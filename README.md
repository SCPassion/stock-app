https://nextjs.org/docs/app/api-reference/file-conventions/route-groups

A route group can be created by wrapping a folder's name in parenthesis: (folderName).
This convention indicates the folder is for organizational purposes and should not be included in the route's URL path.

Another use case is the define multiple root layouts.

# Create a new branch and push it to the repo

git switch -c <branch-name>
...code changes...
git add .
git commit -m "commit message"
git push

# Now you can go to the repo and create a pull request

# Switch to main branch and pull the latest changes

git switch main
git pull

# Clean up the branch

git branch -d <branch-name>
