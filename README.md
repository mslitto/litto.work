## litto.work

Things you can do with this repository:

first, open a terminal/console/bash

#### get copy of this homepage to work on locally:
if you have set up your ssh keys (see [github help](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent))
```bash
git clone git@github.com:mslitto/litto.work
```

if you do not have set up your ssh keys or do not know what they are:
```bash
git clone https://github.com/mslitto/litto.work
```

now you have a local copy in ./litto.work:
```bash
cd ./litto.work
```

## publish page:

1. npm run build
2. git add .
3. git commit -m "updated page"
4. git push
5. npm run publish

#### git tasks:
* #### git status
  shows changed files, run to check which files changed

* #### git add . / git add src public
  adds all changed files to history

* #### git commit -m "commit message (added event eventName)"
  add all 'git added' changes

* #### git push
  push all committed changes to github

* #### git pull
  load all changes from github

#### npm run tasks:

* #### npm run
  shows all available npm commands

* #### npm run build
  creates production build in public directory

* #### npm start
  start the development server on localhost:3000

* #### npm run publish
  publish the page to litto.work

#### workflow for changing content:

first, run the development server:
```bash
npm start
```
then load [http://localhost:3000](http://localhost:3000)

you should see a preview of the page now.
you can now change any files in the src/ directory and see the changes once you reload the page.

once you are done changing content and happy with the result:
```bash
# build the files from ./src/ to ./docs/
npm run build
```
