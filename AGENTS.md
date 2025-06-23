# AGENTS.md

- Always start new task branches from the latest main branch (run `git fetch origin` and `git checkout -b branch origin/main`).
- Rebase onto main before opening a pull request.
- Search for `<<<<<<<`, `=======`, or `>>>>>>>` markers in all files, and remove them before committing.
- Merge pull requests one at a time (not in parallel).
