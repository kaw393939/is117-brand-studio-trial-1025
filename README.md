# Common Hour

A fictional white-T-shirt brand built during an instructor-authorized IS117 coaching simulation. The implementation is real; learner choices and explanations are agent role-play. No customers were interviewed and no real orders are accepted.

- [Storefront](https://kaw393939.github.io/is117-brand-studio-trial-1025/)
- [Live style guide](https://kaw393939.github.io/is117-brand-studio-trial-1025/styleguide.html)
- [Two visual studies](https://kaw393939.github.io/is117-brand-studio-trial-1025/explorations/)
- [Brand decisions and personas](SPEC.md)
- [Conversation, critiques, and check evidence](docs/trial-notes.md)
- [Feature issue #1](https://github.com/kaw393939/is117-brand-studio-trial-1025/issues/1) · [Delivery PR #2](https://github.com/kaw393939/is117-brand-studio-trial-1025/pull/2)

This is a completed trial example. **Students start with the [unfinished IS117 Brand Studio template](https://github.com/kaw393939/is117-brand-studio#readme).**

## Run locally

Use Node 22.16+ on the 22 LTS line, or 24+.

```sh
npm ci
npm run setup:browser
npm start
```

Open http://localhost:5173. Run `npm run check` for formatting, lint, four server integration cases and twelve real-browser cases. The temporary demo bag resets on reload; there is no checkout, account, payment, or persistence.

The checks cover behavior, responsive interaction, the two studies' matching content, and rendered identity agreement. They do not establish branding effectiveness, customer demand, or complete accessibility. Actual merge/deployment results are recorded in PR #2.
