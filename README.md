#League calculator application

Written in node 10.15.0 latest LTS version.

Install nvm following instructions from https://github.com/nvm-sh/nvm

then ```nvm install 10.15.0``` and ```nvm use 10.15.0```

```npm i``` then

```npm start``` to run app
```npm run start:dev``` to run app in dev mode
```npm test``` to run all testing security, lint and unit
```npm run test:lint``` to run linting
```npm run test:unit``` to run unit tests

After completing first pass there are a number of refactoring tasks needed.

All functions need unit tests not just one to compare results.

Would also refactor functions in to a class and have the main index file create instantiation class for any league allowing the functions to be reused over multiple leagues as functions should be generic enough.

Could also take in passed in path to different json files allowing application to be run against different leagues in different json files.