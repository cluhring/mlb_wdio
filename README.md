# MLB QA Engineer 

## Using the WebdriverIO framework with JavaScript/TypeScript, I automated the following test steps:

1) Navigate to MLB login page
2) Login
3) Navigate to tv page
4) Validate Users' favorite team videos are displayed 

These tests can be run after cd'ing into the mlb_wdio_tests folder and running the commands:

 -  npm i
 -  npx wdio run ./wdio.conf.ts --spec specs/test.e2e.js

Built using:
 -  node v22.10.0
 -  wdio v9.13.0

 Vidoe:

 ![](/mlb_wdio.mp4)