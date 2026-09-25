# Happo showcase

A small, made-up product UI ("Fernway") tested with [Happo](https://happo.io).
Screenshots of its Happo reports are used throughout
[docs.happo.io](https://docs.happo.io).

It's a Storybook of a handful of components and one page, rendered in five Happo
targets: Chrome at desktop and mobile sizes, each in light and dark mode, plus
an [accessibility](https://docs.happo.io/docs/accessibility) target. The
`Toast/Entering` story is captured as an
[animated snapshot](https://docs.happo.io/docs/animated-snapshots).

The app itself (just the dashboard page) also has a
[Playwright](https://docs.happo.io/docs/playwright) end-to-end test that takes
Happo screenshots. It reports to a separate Happo project, `happo-showcase-e2e`
([multi-project setup](https://docs.happo.io/docs/multi-project)). On PRs, the
[Happo workflow](.github/workflows/happo.yml) orchestrates both projects into
one Happo job, so each PR gets one combined Happo status.

## Getting started

```bash
pnpm install
pnpm storybook
```

To run Happo locally, sign in when the CLI asks you to, or set `HAPPO_API_KEY`
and `HAPPO_API_SECRET`:

```bash
pnpm happo
```

And for the end-to-end tests:

```bash
pnpm exec playwright install chromium
pnpm happo:e2e
```

## Demo pull requests

Open PRs labeled `docs-demo` are kept open on purpose. Each one leaves its Happo
report in a known state that the docs take screenshots of:

| State                     | What the PR changes                               |
| ------------------------- | ------------------------------------------------- |
| Needs review              | Visual changes nobody has reviewed yet            |
| Accepted                  | Visual changes that were accepted                 |
| Rejected                  | A visual regression that was rejected             |
| Accessibility violations  | Changes that add axe violations                   |
| Animated diff             | A change to the toast's entrance animation        |
| Diff reported as flake    | A diff that was reported as flake and ignored     |
| Separate project statuses | Visual changes, with one Happo status per project |
| Orchestrated status       | The same, with one combined Happo status          |

Don't merge, close, rebase or push to these PRs. The docs look up their current
Happo report through the GitHub API when screenshots are taken, so the PRs
themselves are the only thing that has to stay put.

The two multi-project PRs (`demo/multi-project*`) are only used for their GitHub
checks, so the workflow below skips them. The one with separate statuses leaves
out the orchestration step in its own copy of the Happo workflow.

Reports don't live forever. The
[Refresh demo reports](.github/workflows/refresh.yml) workflow re-runs Happo
every month for each demo PR and the commits they're compared against. Run it by
hand from the Actions tab if a report has gone missing.
