# Ionic 4 pwa app with okta authentication
This a sample hybrid mobile application project based on ionic 4 and firebase.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

_Currently this project is using the latest versions of all: Ionic 4 and Angular 8_

## Setup

Requirements to use this project:

##### Node.js (https://nodejs.org/download/)

##### npm (Node Package Manager, it comes with node.js installation)
In case you're not with the latest version of npm:
```sh
$ npm install npm -g
```

##### Cordova & Ionic Cli
To install both of them on your system just launch this command:
```sh
$ npm install cordova ionic -g
```

## Install NPM Dependencies
Once you clone this repository, run this command on your terminal to install all needed dependencies:
```sh
$ npm install
```

## Steps
Run this command on your terminal to add a pwa to the app and firebase hosting:

Start new app:
```sh
$ ionic start app-name app-type
```

Add pwa packege to the app:
```sh
$ ng add @angular/pwa --project app
```

Build and test the app:
```sh
$ ionic build --prod
$ npm install -g http-server
$ cd www
$ http-server -o
```

Host app in firebase hosting:
```sh
$ npm install -g firebase-tools
$ firebase login
$ firebase init
$ ? What do you want to use as your public directory? www
  ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
  ? File www/index.html already exists. Overwrite? No
$ ionic build --prod // update the project build before do the production
$ firebase deploy
```

## Launching the App
After deploying the application firebase giving the url like below.
```sh
$ https://ionic-okta-pwa.firebaseapp.com
```

## Amazing contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
[<img src="https://avatars3.githubusercontent.com/u/37896307?v=4" width="100px;"/><br /><sub><b>Kasun Gamage</b></sub>](https://www.linkedin.com/in/kasun-gamage95/)<br />[💻](https://github.com/KasunGamage/Ionic-4-firebase_authentication/commits?author=Kasun-Gamage "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->
