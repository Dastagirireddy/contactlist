# MEAN stack contacts list app demo

***

## Purpose

The idea is to demonstrate how to write a typical, non-trivial CRUD application using AngularJS, NodeJs and MongoDb**. The sample application tries to show best practices when it comes to: folders structure, using modules, testing, communicating with a REST back-end.

## Stack

* Persistence store: [MongoDB](http://www.mongodb.org/)
* Backend: [Node.js](http://nodejs.org/)
* Awesome [AngularJS](http://www.angularjs.org/) on the client
* CSS based on [Twitter's bootstrap](http://getbootstrap.com/)

### Build

It is a complete project with a build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community:
* powered by [gulp.js](http://gulpjs.com/)
* test written using [Jasmine](http://jasmine.github.io/) syntax
* test are executed by [Karma Test Runner](http://karma-runner.github.io/0.8/index.html) (integrated with the gulp.js build)
* build supporting JS minification

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)
* Install gulp and Karma as global npm modules:

    ```
    npm install -g gulp karma
    ```

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/Dastagirireddy/contactlist.git
cd contactlist
```

### App Server

Our backend application server is a NodeJS application that relies upon some 3rd Party npm packages.  You need to install these:

* Install local dependencies (from the project root folder):

    ```
    npm install
    ```

  (This will install the dependencies declared in the package.json file)

### Client App

Our client application is a straight HTML/Javascript application but our development process uses [RequireJs] (requirejs.com) to load Module dependencies in AMD mode.

## Building

### Configure Server
The server stores its data in a [MongoDb] (mongodb.com) database. Make sure you have already configures the MongoDb.

* Unix / linux / Mac OS use this command
    ```
    sudo apt-get install mongodb
    ```
* Windows OS use this info [npm](http://stackoverflow.com/questions/2438055/how-to-run-mongodb-as-windows-service)

### Build the app
The app made up of a number of javascript, css and html files that need to be merged into a final distribution for running.  We use the gulp build tool to do this.
* Build application:

    ```
    gulp build
    ```

*It is important to build again if you have changed the client configuration as above.*

## Running
### Start the Server
* Run the application server 

    ```
    gulp run
    ```
* Browse to the application at [http://localhost:5000]

## Browser Support
We only regularly test against Chrome 29 and occasionally against Firefox and Internet Explorer.
The application should run on most modern browsers that are supported by the AngularJS framework.
Obviously, if you chose to base your application on this one, then you should ensure you do your own
testing against browsers that you need to support.

## Development

### Folders structure
At the top level, the repository is split into a client folder and a server folder.  The client folder contains all the client-side AngularJS application.  The server folder contains a very basic Express based webserver that delivers and supports the application.
* `node_modules` contains build tasks for gulp along with other, user-installed, Node packages
* `dist` contains build results
* `src` contains application's sources
* ` |`
* ` |-client` contains client side AngularJs code
* ` |-server` contains server side express logic
* `test` contains test sources, configuration and dependencies
* `vendor` contains external dependencies for the application
* 'build' contains all the configurations for project build, tests ad jasmine runner.

### Build without tests
If for some reason you don't want to run the test but just generate the files - not a good idea(!!) - you can simply run the build task: `gulp build`.

* If build completed successfully then you will find the stuff in `dist` folder

### Testing
You can have gulp (karma) continuously watch for file changes and automatically run all the tests on every change, without rebuilding the distribution files.  This can make the test run faster when you are doing test driven development and don't need to actually run the application itself.

* Run `gulp test`.
* If test executed successfully then if you will find stuff in `coverage` folder
