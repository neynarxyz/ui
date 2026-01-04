# @neynar/ui TODO

Tracking remaining work before 1.0 release.

## High Priority

### Testing
- [ ] Add vitest setup with React Testing Library
- [ ] Add axe-core or jest-axe for automated a11y testing
- [ ] Smoke tests for critical interactive components (Dialog, Select, Combobox)
- [ ] Visual regression tests via Chromatic or similar
- [ ] Testing guide with data-slot examples for E2E testing
- [ ] Run Playwright tests against every variant of every component in Storybook

### CI/CD
- [ ] Bundle size tracking (size-limit or bundlewatch)
- [ ] Automated a11y checks in PR pipeline
- [ ] Type-check and build verification on PRs

## Medium Priority

### Documentation
- [ ] Dedicated accessibility overview document (a11y.llm.md) - WCAG compliance, patterns across components
- [ ] Migration guide from shadcn (`asChild` → `render` prop, Radix → Base UI differences)
- [ ] Performance guide - which components are heavy, code-splitting recommendations
- [ ] CHANGELOG structure improvements - version comparison tables, breaking changes format
- [ ] Add "Common Mistakes" sections to all component docs (template updated, need to backfill)

### Developer Tooling
- [x] ~~`/ui:document` skill~~ - renamed to `/ui:manage`, uses `ui-component-manager` agent
- [x] ~~Create `/ui:component` skill~~ - merged into `/ui:manage --new`
- [ ] Consider `ui-migrator` agent - help migrate from old shadcn patterns (codemod alternative)

## Low Priority / Nice to Have

- [ ] Bundle size analysis and optimization
- [ ] Explore extracting Base UI deps to reduce bundle when tree-shaking fails
- [ ] Add more themes (high-contrast, corporate, etc.)
- [ ] Playground environment for consumers to test components

## Completed

- [x] Fix TypeScript errors (select, combobox, typography)
- [x] LLM documentation system (59 docs: 53 UI + 4 typography + 2 theme utilities)
- [x] TSDoc with Props types on all components
- [x] Storybook stories for all components
- [x] Audit `"use client"` directives - verified correct
- [x] Add `data-slot` to all components
- [x] Convert typography `interface` to `type`
- [x] Decided against exporting `lib/variants.ts` (internal, exposed via props)
- [x] Add CHANGELOG.md
- [x] Add CONTRIBUTING.md (human + .llm/contributing.llm.md)
- [x] Clean up legacy `/ui:add`, `/ui:refresh` references
- [x] Document color-mode and first-light exports
- [x] Agent expanded to handle index management + new component workflow
- [x] Renamed `/ui:document` → `/ui:manage` with expanded scope
