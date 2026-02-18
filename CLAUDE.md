# TabStax-web - Development Guide

## Project Context

**Repository:** Hulupeep/Tabstax-web
**Project Board:** GitHub Issues
**Board CLI:** gh (must be installed and authenticated)
**Tech Stack:** Next.js 15 + App Router + TypeScript + Tailwind CSS v4 + SSG + Vercel
**Primary Focus:** TabStax marketing/landing page website (static site, Flout Labs, Ireland)

---

## CRITICAL: Architectural Contracts - READ THIS FIRST

### MANDATORY: Check Contracts Before ANY Code Changes

This project uses **architectural contracts** (YAML files in `docs/contracts/`) that define **non-negotiable rules**. These contracts are enforced by automated tests.

**BEFORE modifying ANY protected file, you MUST:**
1. Read the relevant contract in `docs/contracts/`
2. Run the contract verification script
3. Check the compliance checklist in the contract
4. Only proceed if the change is allowed

#### Files Protected by Contracts:

| Files | Contract | Key Rules |
|-------|----------|-----------|
| `src/**/*.{ts,tsx}` | `feature_architecture.yml` | ARCH-001: Static export only, ARCH-002: "Attention Stax" branding, ARCH-003: CTAs to dash.tabstax.app, ARCH-004: No next/image, ARCH-005: dynamicParams=false |
| `src/**/*.{ts,js,tsx,jsx}` | `security_defaults.yml` | SEC-001..005: No hardcoded secrets, no SQL injection, no XSS, no eval, no path traversal |
| `src/**/*.{tsx,jsx}` | `accessibility_defaults.yml` | A11Y-001..004: Alt text, aria-labels, form labels, tabindex |
| `src/**/*.{ts,js,tsx,jsx}` | `production_readiness_defaults.yml` | PROD-001..003: No demo data, no placeholder domains, no hardcoded IDs |
| `src/**/*.{test,spec}.*` | `test_integrity_defaults.yml` | TEST-001..005: No mocking in E2E, no swallowed errors |

#### How to Check Contracts:

```bash
# 1. Read the contract (SOURCE OF TRUTH)
cat docs/contracts/[contract_name].yml

# 2. Run contract verification tests
npm test -- src/__tests__/contracts/

# 3. Check specific contract
npm test -- [contractName]
```

#### Contract Violation Example:

```
CONTRACT VIOLATION: ARCH-001
File contains forbidden pattern: /getServerSideProps/
Issue: getServerSideProps not compatible with static export
See docs/contracts/feature_architecture.yml
```

The build will FAIL and the PR will be BLOCKED.

#### Overriding Contracts:

**Only the human user can override non-negotiable rules.**

To override, user must explicitly say:
```
override_contract: [contract_name]
```

Then you may proceed, but should:
1. Explain why this violates the contract
2. Warn about potential consequences
3. Ask if contract should be updated permanently

#### Available Contracts:

##### 1. `feature_architecture.yml`
**Protects:** TabStax-web static site architecture and branding
**Rules:** 5 non-negotiable rules
**Status:** Active
**Key rules:**
- `ARCH-001`: Static export only — no API routes, getServerSideProps, or server actions
- `ARCH-002`: Use "Attention Stax" — never "Attention Blocks", "Terrain", or "Map"
- `ARCH-003`: All CTAs must point to dash.tabstax.app/attention — no Tally.so forms
- `ARCH-004`: Use plain `<img>` tags — not next/image (incompatible with static export)
- `ARCH-005`: Dynamic routes must set `dynamicParams = false`

##### Default Contracts (shipped with Specflow):

| Contract | Rules | What it catches |
|----------|-------|----------------|
| `security_defaults.yml` | SEC-001..005 | Hardcoded secrets, SQL injection, XSS, eval, path traversal |
| `accessibility_defaults.yml` | A11Y-001..004 | Missing alt text, aria-labels, form labels, tabindex |
| `test_integrity_defaults.yml` | TEST-001..005 | Mocking in E2E/journey tests, suspicious patterns, placeholder markers |
| `production_readiness_defaults.yml` | PROD-001..003 | Demo/mock data in production, placeholder domains, hardcoded IDs |

---

## Journey Verification Hooks

### Why Hooks Exist

**Option A: Manual** - You tell Claude "run tests" every time (you'll forget)
**Option B: Hooks** - Tests run automatically at build boundaries (can't forget)

### Project Configuration

- **Package Manager:** npm
- **Build Command:** `npm run build`
- **Test Command:** `npm run test:e2e` (when configured)
- **Test Directory:** `tests/e2e`
- **Deploy Platform:** Vercel

### Trigger Points

| Trigger | Environment | Action |
|---------|-------------|--------|
| POST-BUILD | LOCAL | Run E2E tests for issues in recent commits |
| POST-COMMIT | LOCAL | Run E2E tests for issues in recent commits |

### How It Works

```
npm run build (success)
    |
Hook extracts issue numbers from recent commits (#123, #456)
    |
Fetches each issue to find journey contract (J-SIGNUP-FLOW)
    |
Maps to test file (journey_signup_flow.spec.ts)
    |
Runs only those tests (not full suite)
    |
Pass = continue | Fail = blocks with error
```

### Critical: Commit Message Format

**Hooks only work if commits reference issues:**

```bash
# GOOD - hooks will find #375 and run its journey tests
git commit -m "feat: add signup validation (#375)"

# BAD - hooks find nothing, no tests run
git commit -m "feat: add signup validation"
```

### Mandatory Reporting

Claude MUST report for EVERY test run:

1. **WHERE** - "Tests passed against LOCAL/PRODUCTION (URL)"
2. **WHICH** - "Ran: signup.spec.ts, login.spec.ts, ..."
3. **HOW MANY** - "12/12 passed (0 failed, 0 skipped)"
4. **SKIPPED explained** - Every skip needs a reason

### Deferring Tests

```bash
touch .claude/.defer-tests    # Skip tests
rm .claude/.defer-tests       # Re-enable
```

See `.claude/hooks/README.md` for detailed behavior.

---

## Specflow Subagent Library

Reusable agent prompts live in `scripts/agents/*.md`. The `waves-controller` is the
master orchestrator -- invoke it once, it handles everything.

### Quick Commands

| Goal | Say this |
|------|----------|
| Execute entire backlog | "Execute waves" |
| Execute specific issues | "Execute issues #50, #51, #52" |
| Execute by milestone | "Execute waves for milestone v1.0" |
| Audit test quality | "Run e2e-test-auditor" |
| Check compliance | "Run board-auditor" |

### Agent Registry

| Agent | When to Use |
|-------|-------------|
| `waves-controller` | Execute entire backlog in dependency-ordered waves (MASTER ORCHESTRATOR) |
| `specflow-writer` | New feature needs acceptance criteria, Gherkin, SQL contracts |
| `board-auditor` | Check which issues are specflow-compliant |
| `dependency-mapper` | Extract dependencies, build sprint waves |
| `sprint-executor` | Execute parallel build waves |
| `contract-validator` | Verify implementation matches spec |
| `contract-generator` | Generate YAML contract from spec |
| `contract-test-generator` | Generate test files from contracts |
| `test-runner` | Run tests, report failures with details |
| `e2e-test-auditor` | Find tests that silently pass when broken |
| `journey-enforcer` | Verify journey coverage, release readiness |
| `journey-tester` | Generate and run journey tests |
| `journey-gate` | Three-tier journey enforcement (issue, wave, regression) |
| `ticket-closer` | Close validated issues with summaries |
| `frontend-builder` | Build frontend components from contracts |
| `heal-loop` | Autonomous fix loop for contract violations |

### Auto-Trigger Rules

**After ANY code changes:** Run `test-runner` and `e2e-test-auditor` before marking work complete.

**When creating new features:** Run `specflow-writer` FIRST to generate contracts, THEN implement.

**Before closing issues:** Run `contract-validator` and `journey-enforcer` to verify compliance.

**After each wave:** Run `e2e-test-auditor` to catch tests that silently pass when broken.

---

## Agent Teams (Default)

Agent Teams is the default execution model on Claude Code 4.6+. Detection is automatic.

| Goal | Command |
|------|---------|
| Execute waves (auto-detects mode) | "Execute waves" |
| View execution dashboard | "/specflow status" |
| Run journey gate for an issue | "Run journey gate tier 1 for issue #50" |
| Run wave gate | "Run journey gate tier 2 for issues #50 #51 #52" |
| Run regression check | "Run journey gate tier 3" |

## Journey Gates

| Gate | Scope | Blocks | When |
|------|-------|--------|------|
| Tier 1: Issue | J-* tests from one issue | Issue closure | After implementing issue |
| Tier 2: Wave | All J-* tests from all wave issues | Next wave | After all issues pass Tier 1 |
| Tier 3: Regression | Full E2E suite vs baseline | Merge to main | After wave passes Tier 2 |

Deferrals: `.claude/.defer-journal` (scoped by J-ID with tracking issue).
Baseline: `.specflow/baseline.json` (updated only on clean Tier 3 pass).

---

## Commands

```bash
npm install              # Install dependencies
npm run dev              # Dev server (localhost:3000)
npm run build            # Production build (static export to out/)
npm run start            # Serve production build
```

## Architecture

**Framework**: Next.js 15 with App Router + TypeScript + Tailwind CSS v4

**Deployment**: Static export (`output: "export"` in next.config.ts), auto-deploys to Vercel on push to `main`.

### Key directories

| Directory | Purpose |
|-----------|---------|
| `src/app/` | App Router pages (layout.tsx, page.tsx, and route directories) |
| `src/components/` | React components (Header, Footer, homepage sections) |
| `src/data/` | Data files (blog-posts.ts, use-cases.ts with 73 entries) |
| `public/` | Static assets (logos, screenshots) |
| `docs/contracts/` | Specflow contract YAML files |
| `scripts/agents/` | Specflow agent prompts (23+ agents) |
| `.specflow/` | Specflow runtime (baseline, fix patterns) |

### Key files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout — fonts (Fraunces + Epilogue via Google Fonts), metadata, Header/Footer |
| `src/app/globals.css` | Tailwind v4 @theme tokens, custom animations, base styles |
| `src/app/page.tsx` | Homepage — 12 section components composed together |
| `src/components/Header.tsx` | Sticky header with nav + "Start Now" CTA (client component) |
| `src/components/Footer.tsx` | Footer with product links, company info, Flout Labs Ireland |
| `src/data/use-cases.ts` | 73 use cases with slug, title, category, persona, summary, content |
| `src/data/blog-posts.ts` | 5 blog posts with slug, title, date, excerpt, content |
| `src/app/use-cases/[slug]/page.tsx` | Dynamic route for 73 individual use case pages (SSG) |
| `src/app/sitemap.ts` | Auto-generated sitemap including all use case URLs |

### Design system

- **Fonts**: Fraunces (headings, 700-900) + Epilogue (body, 300-700)
- **Colors**: Cream #FFFBEB, Charcoal #1C1917, Amber #D97706, Terracotta #C2410C, Warm Gray #78716C, Pink Glow #EC4899
- **Tailwind tokens**: `bg-cream`, `text-charcoal`, `text-amber`, `bg-terracotta`, `text-warm-gray`, `text-pink-glow`, `font-heading`, `font-body`

### Pages (79 total HTML pages)

- `/` — Homepage (jobs-based sections)
- `/about` — About Colm Byrne, Flout Labs, roadmap
- `/blog` — 5 blog posts with expandable accordion
- `/contact` — Email (tabstax@floutlabs.com), no forms
- `/use-cases` — Index of 73 use cases grouped by Work/Life categories
- `/use-cases/[slug]` — 73 individual use case pages

### Primary CTA

All CTAs point to: `https://dash.tabstax.app/attention` ("Start Now")

### External integrations

- **No Tally.so forms** — signup is via the web app (dash.tabstax.app)
- Contact email: tabstax@floutlabs.com
- Images stored in `public/`

---

## Quick Reference

```
Specflow Quick Reference

Core Loop:
  Spec -> Contract -> Test -> Code -> CI Enforces

Requirement ID Format:
  AUTH-001 (MUST)  = Non-negotiable rule
  AUTH-010 (SHOULD) = Guideline
  J-AUTH-LOGIN     = User journey

Contract Location:
  docs/contracts/feature_*.yml   = Pattern rules
  docs/contracts/journey_*.yml   = E2E journeys

Test Location:
  src/__tests__/contracts/*.test.ts = Contract tests
  tests/e2e/journey_*.spec.ts       = Journey tests

Commands:
  npm test -- contracts     Run contract tests
  npm test -- journeys      Run journey tests
  npx playwright test       Run E2E tests

Subagent Quick Commands:
  "Execute waves"           Run entire backlog
  "Run e2e-test-auditor"    Find unreliable tests
  "Run test-runner"         Execute tests, report fails
  "Run journey-enforcer"    Check journey coverage
  "Run board-auditor"       Check issue compliance
```
