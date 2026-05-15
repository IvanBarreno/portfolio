# Git

> The distributed version control system that every developer uses, every day.

## What is it?

Git is a distributed version control system (DVCS) created by Linus Torvalds in 2005 — the same person who created the Linux kernel. He built it in 10 days out of frustration with existing tools. Git tracks changes to files over time, allows multiple people to work on the same codebase simultaneously, and makes it possible to recover any version of any file at any point in history.

Unlike older centralized version control systems (SVN, CVS), every Git repository is a full copy with complete history — there is no single "server" that everyone depends on.

## Why it matters

Git is the foundation of all modern software development. There is no alternative in widespread use. Every professional developer uses Git daily. Every open-source project is managed with Git. Every CI/CD pipeline starts with a Git repository.

Understanding Git deeply — not just `add`, `commit`, `push` — is what separates juniors from experienced developers. Branching strategies, conflict resolution, rebasing, cherry-picking, and bisecting are daily tools on real teams.

## Key Concepts

- **Repository (repo)** — a directory tracked by Git; contains the `.git` folder with all history
- **Commit** — a snapshot of all tracked files at a point in time; identified by a SHA-1 hash
- **Branch** — a lightweight movable pointer to a commit; branching is free and instant in Git
- **Merge** — combine changes from one branch into another; creates a merge commit
- **Rebase** — reapply commits from one branch on top of another; creates a linear history
- **Remote** — a reference to a copy of the repo on another machine or server (GitHub, GitLab, Bitbucket)
- **Staging area (index)** — files are staged before committing; allows you to craft precise commits
- **HEAD** — a pointer to the current commit/branch you're working on
- **`.gitignore`** — a file listing patterns that Git should not track (node_modules, .env, build artifacts)

## Core Workflow

```bash
# Daily workflow
git status                          # see what's changed
git add src/components/Button.tsx   # stage a specific file
git commit -m "feat: add Button component"
git push origin main

# Branching
git checkout -b feature/dark-mode   # create and switch to new branch
# ... make changes ...
git push -u origin feature/dark-mode
# → open PR on GitHub

# Undoing things
git restore file.txt                # discard unstaged changes to a file
git reset HEAD~1                    # undo last commit, keep changes staged
git stash                           # temporarily shelve changes
git stash pop                       # restore shelved changes
```

## Useful Commands Beyond the Basics

```bash
git log --oneline --graph --all     # visual branch history
git blame file.ts                   # who changed which line and when
git bisect start                    # binary search through history to find a bug
git cherry-pick <sha>               # apply a specific commit to current branch
git reflog                          # see all recent HEAD movements — your safety net
```

## Related Technologies

GitHub · GitLab · Bitbucket · GitHub Actions · CI/CD · Linux
