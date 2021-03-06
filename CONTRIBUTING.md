# Contributing

Pull Resquests (PR) are welcomes.


## Install

Fork [Class Mentors](https://github.com/singpath/classmentors), then:

```shell
git clone git@github.com:your-user-id/classmentors.git
cd classmentors
git remote add upstream https://github.com/singpath/classmentors.git
npm install
```


## Feature branch

Avoid working fixes and new feature in your master branch. It will prevent you
from submitting focussed pull request or from working on more than one
fix/feature at a time.

Instead, create a branch for each fix or feature:
```shell
git checkout master
git pull upstream master
git checkout -b <branch-name>
```

Work and commit the fixes/features, and then push your branch:
```shell
git push origin <branch-name>
```

Visit your fork and send a Pull Request from that branch; the PR form URL
will have this form:

    https://github.com/singpath/classmentors/compare/master...<your-github-username>:<branch-name>

Once your PR is accepted:
```shell
git checkout master
git push origin --delete <branch-name>
git branch -D <branch-name>
git pull upstream master
```


## Firebase Access

If you don't have access to `singpath` or `singpath-play` Firebase DBs, edit
`src/index.html` and `dist/classmentors/index.html` to point to the correct
Firebase DB id; edit the `window.SINGPATH.firebaseId`. E.g.:
```javascript
window.SINGPATH = {
  firebaseId: 'my-firebase-db',
  singpathURL: 'https://localhost:8080/',
  backendURL: 'https://localhost:8081/'
};

System.import(
  './app.js'
).catch(
  console.error.bind(console)
);
```

To setup your Firebase DB:
```
npm install @singpath/rules
./node_modules/.bin/singpath-rules compile
```

It will generate `rules.json` to use on your Firebase security tab.


## Run Dev server

To start a server listening on "https://localhost:8081":
```shell
npm start
```


## Building app bundle

To build a minified bundles of the singpath apps and its dependencies:
```shell
npm run build
```

To serve it:
```shell
npm run serve-build
```
