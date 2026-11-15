# relay-typescript-fixture

Minimal TypeScript project for the Relay live corpus.

Checks:

```bash
npm install
npm test
npm run typecheck
```

`add` lives in `src/math.ts`. Tests run on Node's built-in test runner with
type stripping, so the only dependencies are TypeScript and `@types/node`.
