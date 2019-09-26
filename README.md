# Demo project for Liferay Symposium


This repository contains 2 applications :
* my-angular-app : basic angular application
* symposium-portal : Liferay DXP project with a portlet based on the angular app


## Angular application

The application (scaffolded wuth [angular-cli](http://cli.angular.io)) is very basic as its only purpose is to showcase the workflow used to deploy it on the Liferay DXP portal.

Points of interest are :
* `LazyModule` : this module is meant to be lazy loaded (check `app-routing.module.ts`) 
* `package.json` : look at the `build:prod` script as it includes the `--deploy-url` option which is required for the 
lazy loading of modules to work properly.

## Liferay DXP portal

This project is a simple Liferay DXP portal with only one portal : `my-angular-portlet` which is used to deploy the 
angular application into the portal in which we called `embedded` mode.

It's a very simple portlet, the interesting parts are :
 * `view.jsp`: you'll find 
   * the base angular application tag (`<app-root></app-root>`)
   * the various imports needed for the angular application to boot (`main.js`,`polyfills.js`,`runtime.js`)
 * `pom.xml` : in this demo project, instead of using a profile, we directly configure the `maven-resources-plugin` to copy files from `dist` local directory of my-angular-app.

## How to start the angular application in standalone mode

The project `my-angular-app` is a fully independant angular application, and thus can be directly started using `ng serve` 
in the directory `my-angular-app`. As usual, it will be available on `localhost:4200`.

## How to deploy the angular application in the portal (embedded mode)

* Start the liferay portal
* Package the angular application by using the command `yarn build:prod`
* Launch the build and deployment of the portlet `my-angular-portlet` with a simple `mvn clean install`
* log into the portal (test@liferay.com / test) and place the portlet anywhere : you should have the exact same application than the standalone mode. 
