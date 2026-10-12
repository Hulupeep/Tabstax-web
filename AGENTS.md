# Agent instructions

## Vercel build spend

Batch doc commits; push docs/review branches without triggering builds; never push per-step evidence commits to branches linked to Vercel.

The Vercel ignore step is `bash scripts/vercel-ignore.sh`. It compares with `VERCEL_GIT_PREVIOUS_SHA`; missing or unavailable history builds normally. Preview branches matching `docs/*`, `chore/docs*`, `review/*`, `evidence/*`, or `spec/*` are deliberately skipped. Keep application changes off those branches.
