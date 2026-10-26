# IS117 Brand Studio

**The same white T-shirt can carry very different meanings.** Develop a brand for it with an AI collaborator, then make those decisions visible in a professional website and a live style guide.

This template starts with a working, deliberately neutral storefront. Your audience, name, promise, logo, voice, and visual direction are **not chosen yet**. You make the decisions; the agent helps you explore, build, check, and revise them.

## Start here

1. Open [this template on GitHub](https://github.com/kaw393939/is117-brand-studio), select **Use this template → Create a new repository**, and create a **public** repository in your own account. A template copy does not copy the instructor's issues.
2. In your terminal, replace both placeholders with your account and new repository name:

   ```sh
   git clone git@github.com:USERNAME/REPOSITORY.git
   cd REPOSITORY
   ```

3. Open this cloned folder as a local project in ChatGPT desktop/Codex, or another AI agent that can **read and edit local files and run terminal commands**. A browser-only conversation cannot do the whole exercise. VS Code is optional; an editor extension or separate agent CLI is not required. Start one chat with:

   > Read AGENTS.md and SPEC.md. Help me get this running, then guide me through the brand studio one decision at a time.

4. Let the agent check Node.js **22.16+ on the 22 LTS line (recommended), or 24+**, and npm, explain any setup problem, run `npm ci`, then start the site with `npm start`. Open [http://localhost:5173](http://localhost:5173) in your browser. Leave the server running while you work.

**First success checkpoint:** you can see the neutral white T-shirt page, choose a size, and add it to the demo bag. Tell the agent what you actually see. The bag is a demonstration; it does not take payments, persist between visits, or place orders.

If a command fails, paste the real error into the same chat. You can ask for a hint, an example, or a small recommendation at any time. You do not need to know the branding vocabulary first.

## Work one decision at a time

The agent follows **Try → Decide → Build → Check → Keep**. It asks one small, meaningful question and waits for your answer. It should never invent your response or quietly choose your brand.

1. **Try the baseline.** Agree on the first feature, `BRAND-001`: a branded hero and visible identity for this working storefront.
2. **Decide who and why.** Make two tiny audience/persona cards, then an early brief: name, promise, one primary brand archetype, and three voice traits. These are hypotheses to revisit, not customer research. An archetype describes the brand's character, not a customer type.
3. **Compare two small previews.** See a modernist and a postmodernist hero using the **same product, headline, supporting copy, and action**. Each cites real design references and explains its visual decisions. Choose or adjust a direction before building the whole page.
4. **Build the chosen slice.** Develop an original SVG logo with monochrome and small-size versions. Apply the selected identity to the storefront and the live style guide, sharing the same CSS variables and assets. Plan two truthful, useful applications of Cialdini's persuasion principles; do not invent reviews, scarcity, credentials, or product facts.
5. **Check together.** The agent runs the prepared checks and reviews its work first, shows one actual check, and asks you to explain what it demonstrates. Then inspect the page in your own browser: describe the impression, try the keyboard, and look at a narrow/mobile view. Ask for help if something is unclear.
6. **Keep a change you understand.** Save agreed decisions in [SPEC.md](SPEC.md), connect the feature to an issue and pull request in **your repository**, and commit the checked change on its branch. Revise anything that misses the intended meaning before moving on.

You work at your own pace. There is no required class demonstration, quiz, reflection report, or extra bug-making task. If you say “build it,” the agent can build the slice you have chosen; it still needs your browser observation before continuing.

## What is here

| File                                   | Purpose                                                                                                    |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `public/index.html`                    | Working storefront; the first branding feature is still pending                                            |
| `public/styleguide.html`               | Live identity board using the storefront's shared styles and assets                                        |
| `public/studio.html`                   | Short studio overview, also [available online](https://kaw393939.github.io/is117-brand-studio/studio.html) |
| [SPEC.md](SPEC.md)                     | The concise record of your chosen decisions and evidence                                                   |
| [AGENTS.md](AGENTS.md)                 | Instructions for your AI coach                                                                             |
| [docs/reference.md](docs/reference.md) | Short explanations and source links to use when needed                                                     |

The README is the authoritative startup path. The online overview introduces the exercise; it does not replace your local project or chat.

## Prepared checks

`npm run check` runs formatting, HTML/CSS/JavaScript lint, server tests, and a real Chromium browser journey with Playwright and axe accessibility checks. Use `npm run format` to fix formatting, then check again. Fix lint problems in the source; keep the prepared rules. If Chromium is missing, the agent can explain and run `npm run setup:browser`, then retry. That command installs the browser dependency; it is not an additional tool choice.

Positive cases check intended behavior, such as adding a selected size. Negative cases check unsuitable input, such as trying to add without a size. These are different from test **levels**: unit checks focus on a small function, integration checks join parts, and end-to-end checks drive a user journey in a real browser.

Checks can find defects and some accessibility barriers. They cannot prove that your audience will value the brand, that a claim is true, or that every person can use the site. Your own browser observation adds evidence; it does not stand in for customer research.

After `BRAND-001`, choose **one** next cycle with less guidance: perhaps a useful brand story, a fit guide with supported information, or a richer demo bag. A real checkout would be a separate project decision.

## Publish when you keep the site

After your checked change is approved and merged into `main`, let the agent guide you through your repository's **Settings → Pages → Source → GitHub Actions**, then **Actions → Check and publish → Run workflow** on `main`. Open the deployment URL reported by that run. Later pushes to `main` publish automatically after checks pass. Until Pages is configured, the workflow checks the project and skips publishing successfully; first setup does not require deployment.
