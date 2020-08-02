#!/bin/bash
if [[ '$OSTYPE' == 'darwin'* ]]; then
  sed -i '' -e 's/node: false/node:{stream:true,crypto:true}/' node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js
else
  sed -i -e 's/node: false/node:{stream:true,crypto:true}/' node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js
fi
