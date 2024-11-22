/*
BASIC COMMANDS 
- git clone   // cloning a repository from GitHub on the computer
- git add [filename]  // stage changes
- git commit -m [message] // commit changes
- git push origin main // publish changes

BRANCHING 
- git checkout -b [new branch name]  // to create a branch
- git checkout [branch name]   // switch to a different branch
- git checkout main + git merge [branch]   // merge the branch with the main
- git branch -d [branch name] // delete the branch once you're done working with it

COLLABORATING ()
- FORKING - operation that creates a personal copy of someone else's repo under your account
    - this is a remote copy; the repo is not copied on your machine, but remains on GitHub
    - after you made some changes, create a PULL REQUEST to the original repo
    - provide title and description and CREATE PULL REQUEST
        // pull request is a method for submitting contributions to a project; subject to approval
        before integration in the main codebase
- FETCHING = downloads changes from a remote repo to your local repo WITHOUT merging changes into
    your current working branch
    - NON DESTRUCTIVE
    - git fetch [origin]
- PULLING : combination of FETCH and MERGE
    - downloads changes from a remote repo and MERGES then into your current branch
    - DESTRUCTIVE
    - AUTOMATIC INTEGRATION
    - git pull [origin] [your branch]


NOTIONS
- REPOSITORY = storage location for a project, containing all its files and history. Can be local
    or remote (GitHub)
- BRANCH = separate line of development in a repo
- COMMIT = snapshot of your changes in the repo. Includes a message to describe changes and is 
    identified by a unique SHA (hash)
- PULL = command that fetches changes from a remote repo and merges them into your current branch
- PULL REQUEST = request to merge changes from one branch to another. Allows for code review and discussion
- CLONE = creates a local copy of a remote repo
- FETCH = updates local repo with changes from the remote repo WITHOUT merging them into your current
    branch. A way to see what others have done without modifying your working files
- PUSH = sending your committed changes from local repo to a remote repo.
- CONFLICT = occurs when two branches made changes to the same line in a file or one branch deletes
    a file that another branch modifies
- STAGING AREA (or INDEX) = space where changes are prepared before being commited (git add => stages)
- CHECKOUT = switches between branches or restore working tree files
- HEAD = refers to the current commit that your working directory is based on. Points to the latest
    commit in your currently checked-out branch.
- REVERT = creates a new commit that undoes changes made by a previous commit. Does NOT rewrite history
- MERGING = combines changes from two branches into a single branch. it creates a new commit that 
    represents the combined state of both branches.
    - it has 2 parent commits, one for each branch being mmerged.
    - maintains a complete history of changes, helping to understand the project's evolution
    - can become cluttered; is non-linear
    - git checkout main
    - git merge [feature-branch]
- REBASING = a way of integrating changes. Git takes each commit from the feature branch and applies
    it one by one onto the base branch. Results in a linear commit history.
    - it eliminates unnecessary merge commits but can lead to complications, especially if others
    are collaborating on the same branch. Can potentially lose commits or changes if not done
    properly
    - git checkout [feature-branch]
    - git rebase main

REBASE VS MERGING = linear commits, rewriting history / preserving history, all commits as they happened
PULL VS FETCHING VS FORK 
    FORK : create a copy of a repo on your GitHub for independend dev and collab
    FETCH: download changes from the remote repo WITHOUT merging
    PULL: download changes and immediately MERGE into your current branch
*/