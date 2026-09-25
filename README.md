# Happo showcase

A small, made-up product UI ("Fernway") tested with [Happo](https://happo.io).
Screenshots of its Happo reports are used throughout
[docs.happo.io](https://docs.happo.io).

It's a Storybook of a handful of components and one page, rendered in five Happo
targets: Chrome at desktop and mobile sizes, each in light and dark mode, plus
an [accessibility](https://docs.happo.io/docs/accessibility) target. The
`Toast/Entering` story is captured as an
[animated snapshot](https://docs.happo.io/docs/animated-snapshots).

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

## Demo pull requests

Open PRs labeled `docs-demo` are kept open on purpose. Each one leaves its Happo
report in a known state that the docs take screenshots of:

| State                    | What the PR changes                           |
| ------------------------ | --------------------------------------------- |
| Needs review             | Visual changes nobody has reviewed yet        |
| Accepted                 | Visual changes that were accepted             |
| Rejected                 | A visual regression that was rejected         |
| Accessibility violations | Changes that add axe violations               |
| Animated diff            | A change to the toast's entrance animation    |
| Diff reported as flake   | A diff that was reported as flake and ignored |

Don't merge, close, rebase or push to these PRs. The docs look up their current
Happo report through the GitHub API when screenshots are taken, so the PRs
themselves are the only thing that has to stay put.

Reports don't live forever. The
[Refresh demo reports](.github/workflows/refresh.yml) workflow re-runs Happo
every month for each demo PR and the commits they're compared against. Run it by
hand from the Actions tab if a report has gone missing.
