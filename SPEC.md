# Common Hour — brand decisions

This is a **simulated student assignment** authorized by the instructor. Learner replies are agent-generated role-play, not real student or customer evidence. The implementation and commands/checks are real.

## Current stage

- Feature: `BRAND-001` — first branded storefront and live style guide.
- Status: Approved for keep in the coaching simulation. Actual merge and publication evidence is recorded in PR #2.
- Scope: one branded storefront and shared live guide; preserve the size selector and temporary demo bag. No checkout.
- Issue: https://github.com/kaw393939/is117-brand-studio-trial-1025/issues/1
- Branch: `feat/1-brand-identity`, created before student SPEC/previews.

## Product boundary

One plain, unprinted white T-shirt; S, M, L, XL; $28 USD is fictional demo data. No supported claims about fabric, manufacturing, fit, sustainability, delivery, reviews, sales, or stock. No payments, orders, accounts, or persistence.

## Audience hypotheses

| Tiny card               | Primary                                                                        | Secondary                                                                 |
| ----------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| Situation               | Student moving between café study and time with friends                        | Someone visiting a café alone before friends arrive                       |
| Goal or meaning         | Relaxed everyday identity, recognizable without a loud fashion logo            | Feel welcome without needing an existing group                            |
| Concern                 | Trying too hard or looking like campus-campaign merch                          | An exclusive “in crowd” message                                           |
| Page should help decide | Whether this ordinary shirt's brand feels right for their everyday plans       | Whether the invitation includes them                                      |
| Basis                   | Simulated learner preference and explicitly confirmed assumptions; unvalidated | Proposed contrasting need, accepted by the simulated learner; unvalidated |

The primary leads the design; the secondary checks the same page. There are no interviews, surveys, quotes, or demographic findings.

## Early brief

| Decision            | Agreement                                                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                | Common Hour, a fictional classroom brand                                                                                                                       |
| Promise             | A casual everyday identity for time with your people                                                                                                           |
| Primary archetype   | Everyperson: welcoming and approachable, not exclusive                                                                                                         |
| Voice               | Warm, plainspoken, unhurried                                                                                                                                   |
| Headline            | Good company. No occasion needed.                                                                                                                              |
| Supporting copy     | A white tee for coffee plans, study breaks, and time with your people.                                                                                         |
| Action              | Add to demo bag                                                                                                                                                |
| Meaningful revision | Learner rejected “making room for each other” as sounding like a campus campaign; casual line above was accepted                                               |
| Predicted effect    | The shirt should stand out first, then “Good company” should communicate the café mood quickly; a simulated learner prediction, not a measured audience effect |

## Visual decision

The two studies hold product, headline, supporting copy, price, sizes, and action constant. Artist works are viewed references, not product images or assets licensed for reuse.

| Item                          | Evidence / decision                                                                                                                                                                                                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modernist source              | Josef Müller-Brockmann, Musica Viva, 1957, MoMA 58.1960: https://www.moma.org/collection/works/4885                                                                                                                                                                                                |
| Actual viewing                | Computer Use opened MoMA's artwork lightbox. Observed compact top text columns, large empty center, repeated diagonal black rules below.                                                                                                                                                           |
| Postmodernist source          | Ettore Sottsass, Carlton room divider, 1981, The Met 1997.460.1a–d: https://www.metmuseum.org/art/collection/search/486989                                                                                                                                                                         |
| Actual viewing                | Computer Use viewed the Met's artwork on its public object page. Observed stacked compartments, angular/diagonal supports and contrasting colored surfaces.                                                                                                                                        |
| Web translation               | Two scoped hero studies in public/explorations/; precise annotations accompany them                                                                                                                                                                                                                |
| Chosen direction              | B / Gathered pieces: learner preferred the café-like layered green frame and serif headline, but requested higher size controls and action. Choice reconfirmed after correcting a missing typography class and recapturing both studies.                                                           |
| Logo / one-color / small-size | Name-only editable serif SVG, shown at 175px and 110px, plus a genuine coffee-ink one-color SVG. Simulated learner rejected the original circles as wedding rings and chose the lettering alone. See public/assets/wordmark.svg, wordmark-small.svg, wordmark-mono.svg and public/logo-study.html. |
| Shared tokens and assets      | Cream #f4efe4, coffee ink #2b2924, forest #224b3e, apricot #f4b28d; Georgia display, Arial body, Courier New labels; public/styles.css and shared SVGs. Guide uses the actual brand-headline, brand-body and button classes.                                                                       |

## Ethical persuasion

| Principle   | Actual content / mechanism                                                                            | Support and limits                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Reciprocity | Three short free outfit ideas in public/index.html#outfit-title, visible before buying with no signup | Offers useful ideas first; implemented; no measured conversion or audience-response claim                  |
| Liking      | Agreed: friendly café/study-break language and recognizable everyday situations                       | Uses shared interests and an approachable voice; hypotheses, not actual customer quotes or tested response |

Ordinary required size validation is usability, not by itself a persuasion mechanism. The design will make no measured conversion claim.

## Keep when

- The agreed audience, brief and chosen visual direction appear in the storefront and live guide.
- Two annotated, source-based, same-content hero studies exist and were actually reviewed.
- A simple original SVG logo is legible at navigation size and shown in a genuine one-color presentation.
- Logo, color roles, type, controls and voice agree across shop and guide.
- Two truthful persuasion applications have an explained mechanism and visitor benefit.
- Prepared checks pass and AI has inspected all changed pages.
- One actual test is discussed; simulated impressions and actual browser/keyboard/mobile observations are distinguished.
- The concrete PR is reviewed and kept/merged under the instructor's authorization for this simulation; there is no claimed real learner approval.

## Evidence

| ID        | Files                                                                                                                                                     | Issue / PR                                        | Actual checks and observations                                                                                                                                                                                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRAND-001 | public/index.html, styles.css, styleguide.html, logo-study.html, assets/wordmark*.svg, explorations/, tests/browser/branding.spec.js, docs/trial-notes.md | Issue #1; actual delivery state recorded in PR #2 | Baseline 13 cases passed. Final npm run check passed format/lint, 4 server and 12 browser cases. Computer Use keyboard and desktop review plus 375px screenshots; mobile image-order issue fixed and regression-checked. Learner explanations/preferences are simulated, not human evidence. |

## Later

No follow-up is selected. Checkout remains out of scope.

## Review result

- Desktop: simulated learner recognized the café-menu colors, matching lettering and visible controls.
- Keyboard: Computer Use used Skip → S → Right to M → Tab → Enter; the actual bag count became 1. The simulated learner distinguished the focus outline from the selected size.
- Phone: simulated learner requested the shirt before size selection. A compact mobile preview now appears above the fieldset; desktop retains the large layered frame. The revised screenshot was accepted in role-play.
- One actual negative E2E test was discussed: a missing size must show an error and leave count 0. The simulated learner explained why showing an error alone is insufficient.
- Source, code, screenshot evidence and dialogue limits: docs/trial-notes.md. Checks do not prove customer demand, brand fit or complete accessibility.
