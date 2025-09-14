## Git workshop (40 minutes)

### Basics (5 minutes)

- `git init` - create repository
- `git add file` - add `file` to repository
- `git add -A` - add everything to repository, be careful; not recommended
- `git commit -m "message"` - commit files
- `git push` or `git push origin branch` - push files (usually to main, sometimes to a certain branch)

### `.gitignore` (5 minutes)

- List of files to ignore
- **Keep secrets in `.gitignore` such as `.env` files**
- Keep compiled files and installed packages folders in `.gitignore`
	- Sometimes this is done for you already when you initialize a project.
- If you have already added a file that you want to ignore, use `git rm --cached file`.
	- Without the `--cached` flag, your file will be deleted from the repository.

### Branching (20 minutes)

- Think of branches as pointers to specific commits on a tree of commits
- `git branch` - view branches
- `git checkout -b new-branch-name` - create branch with specified name and change to this branch
- `git checkout branch-name`  - checkout branch name
- `git switch -c new-branch-name` and `git switch branch-name` - Same as `checkout`
- `git merge branch-name` - merge specified branch into your branch and create a commit
- `git rebase branch-name` - adds commits of branch on top of another branch
- `git fetch` - updates remote branch information
- `git pull` - updates remote branch information and merges remote
- Pull requests - merge branches from remote

#### Remember to resolve merge conflicts

### Other things (10 minutes)

#### Visualizing changes

- `git log`  - view branches

### Customize Git Log

Credit: Leah Perlmutter's CSC-324 lecture slides

https://docs.google.com/presentation/d/1fHp9DvbFh5Thz9vq-l7EesldGEcPmjjzXGhaQ_S77pI/edit?slide=id.g2bc8c146d8f_0_141#slide=id.g2bc8c146d8f_0_141

```sh
alias gs='git status'
alias gd='git diff'
alias gds='git diff --staged'

# each line has commit hash, author, and commit message
alias gla='git log --oneline --graph --all --pretty=format:"%C(yellow)% h%C(green)% an%C(auto)%d%C(reset)%<(65,trunc)% s"'

# each line has commit hash, author, date, and commit message
alias glad='git log --oneline --graph --all --pretty=format:"%C(yellow)% h%C(green)% an%Cblue% ai%C(auto)%d%C(reset)%<(40,trunc)% s"'

# Remember to run `source ~/.bashrc` after editing ~/.bashrc
```

#### Learning resources

[Learn Git Branching](learngitbranching.js.org)
Man pages