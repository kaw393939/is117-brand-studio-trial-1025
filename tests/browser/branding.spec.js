import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("the two hero studies preserve the offer and their action really works", async ({
  page,
}) => {
  const offers = [];
  for (const route of [
    "/explorations/modernist.html",
    "/explorations/postmodernist.html",
  ]) {
    await page.goto(route);
    offers.push({
      headline: await page.locator("#hero-title").innerText(),
      support: await page.locator(".study-support").innerText(),
      price: await page.locator(".study-price").innerText(),
      sizes: await page
        .locator('input[name="size"]')
        .evaluateAll((inputs) => inputs.map((input) => input.value)),
      action: await page
        .getByRole("button", { name: "Add to demo bag", exact: true })
        .innerText(),
    });
    await page
      .getByRole("button", { name: "Add to demo bag", exact: true })
      .click();
    await expect(page.locator("#size-error")).toBeVisible();
    await expect(page.locator("#bag-count")).toHaveText("0");
    await page.locator('input[name="size"][value="M"]').check();
    await page
      .getByRole("button", { name: "Add to demo bag", exact: true })
      .click();
    await expect(page.locator("#bag-count")).toHaveText("1");
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
  }
  expect(offers[0].headline).not.toBe("");
  expect(offers[0]).toEqual(offers[1]);
});

async function renderedIdentity(
  page,
  headlineSelector,
  bodySelector,
  actionSelector,
) {
  const properties = [
    "fontFamily",
    "fontSize",
    "fontWeight",
    "lineHeight",
    "color",
  ];
  const readType = async (selector) =>
    page.locator(selector).evaluate((element, keys) => {
      const style = getComputedStyle(element);
      return Object.fromEntries(keys.map((key) => [key, style[key]]));
    }, properties);
  return {
    logo: await page.locator(".brand-link img").getAttribute("src"),
    headline: await readType(headlineSelector),
    body: await readType(bodySelector),
    action: await page.locator(actionSelector).evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        font: style.fontFamily,
        foreground: style.color,
        background: style.backgroundColor,
      };
    }),
  };
}

test("the live guide uses the shop's rendered logo, typography, and action colors", async ({
  page,
}) => {
  await page.goto("/");
  const shop = await renderedIdentity(
    page,
    "#product-title",
    ".product-intro",
    "#product-form .button-primary",
  );
  await page.goto("/styleguide.html");
  const guide = await renderedIdentity(
    page,
    ".type-specimen .brand-headline",
    ".type-specimen .brand-body",
    ".button-primary",
  );
  expect(guide).toEqual(shop);
});

test("a narrow-screen shopper can choose a size and use the bag", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const shirt = page.getByRole("img", {
    name: "Plain white, unbranded short-sleeved T-shirt",
    exact: true,
  });
  await expect(shirt).toHaveCount(1);
  await expect(shirt).toBeInViewport();
  const imageBox = await shirt.boundingBox();
  const sizeBox = await page.locator("#product-form fieldset").boundingBox();
  expect(imageBox.y + imageBox.height).toBeLessThanOrEqual(sizeBox.y);
  await page.screenshot({ path: testInfo.outputPath("mobile-first-view.png") });
  await page.locator('input[name="size"][value="M"]').check();
  await page
    .getByRole("button", { name: "Add to demo bag", exact: true })
    .click();
  await expect(page.locator("#bag-count")).toHaveText("1");
  await expect(page.locator("#bag-status")).toContainText("M");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  await page.screenshot({ path: testInfo.outputPath("mobile-controls.png") });
  await page.goto("/styleguide.html#type");
  await page.locator(".type-specimen .brand-headline").scrollIntoViewIfNeeded();
  await expect(page.locator(".type-specimen .brand-headline")).toBeInViewport();
  await page.screenshot({ path: testInfo.outputPath("mobile-guide-type.png") });
});
