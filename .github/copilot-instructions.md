<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot instructions for the Manara repository

This repository is a small JavaScript learning workspace consisting mostly of standalone example files under `01_Hello_World/` and a minimal `package.json`.

Key points for automated edits
- Project purpose: learning/demonstrations. Files are intentionally small, simple, and standalone; do not change the overall single-file-per-concept layout unless the user asks.
- Where to look: `01_Hello_World/` contains the core examples. Reference files: `Map.js` (DOM output into `#output`), `reduce.js` (array reduce example), `04_Variables.js` (scope and strict-mode examples), and `index.html` (loads one script for browser preview).
- Runflows:
  - Browser preview: open `01_Hello_World/index.html` in a browser. Modify the `<script src="...">` tag to switch which example runs.
  - Node.js CLI: run `node 01_Hello_World/<file>.js` for console-based examples (e.g., `reduce.js`, `blocks.js`).
  - Dependencies: run `npm install` at repo root or inside `01_Hello_World/` if you need `cli-table3` or `chalk` (present in package.json files).

Conventions and constraints
- Naming: Some filenames include special characters (e.g., `filtter&Find.js`). Prefer safe edits that keep original filenames.
- No module system: files are plain scripts (no `import`/`export`). If adding new examples, keep them standalone.
- DOM usage: `Map.js` expects an element with id `output`. If updating DOM examples, preserve this contract.

What to change vs avoid
- Safe changes: small bug fixes in examples, formatting, adding comments, improving clarity in a single file, or adding another independent example file.
- Avoid: migrating the repo to a build system, introducing bundlers, adding a test framework, or refactoring multiple files into modules without explicit user instruction.

Examples to reference when editing
- To add a browser example, follow `Map.js` pattern: select `#output`, build an HTML string with `.map(...).join('')`, and set `output.innerHTML`.
- To add a Node example, follow `reduce.js` style: use `console.log`, avoid DOM API calls.

When writing PRs or commits
- Keep commits small and focused (one example fix per commit).
- Update `package.json` only when adding a real dependency and run `npm install`.

If uncertain, ask the user for direction before large or cross-cutting changes.

Contact / follow-up
- After making edits, run the relevant example locally (open `index.html` or run `node`) and report what you ran and the output.

End of file.

## How to run (PowerShell examples)
Run these from the repository root in PowerShell (`pwsh.exe`).

```powershell
# install dependencies (if you add one)
npm install

# run a Node example
node .\01_Hello_World\reduce.js

# open the browser preview (Windows)
start .\01_Hello_World\index.html
```

Notes: the project doesn't declare a required Node version — use Node 18+ for modern ES features. If you need a specific runtime for CI, ask before locking it in.

## Do / Don't (concrete examples)
- Do: change the `<script src="...">` tag in `01_Hello_World/index.html` to switch which browser example runs (e.g., `Map.js`).
- Do: run CLI examples with `node 01_Hello_World/<file>.js` (e.g., `reduce.js`, `blocks.js`).
- Don't: convert these files into modules (`import`/`export`) or add a bundler unless the user requests it — these are educational single-file scripts.
- Don't: rename files with unusual characters unless requested; instead add new files following the same naming style.
