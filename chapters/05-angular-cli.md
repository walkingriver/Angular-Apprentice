# Angular CLI Quick Reference

One of the most powerful tools in the Angular ecosystem is the Angular Command Line Interface (CLI), also known as the `ng` CLI. The Angular CLI is an indispensable tool for Angular developers, providing a comprehensive set of commands that simplify and streamline the process of creating, scaffolding, and managing Angular applications. The CLI abstracts away much of the complexity and boilerplate code that comes with setting up a new Angular project, allowing you to focus on writing your application logic. The Angular CLI also supports a wide variety of custom tasks, reducing the need for manual configuration and setup in many project scenarios.

## Installing the CLI

The most straightforward way to install the Angular CLI is through npm, the Node Package Manager, which is the default package manager for Node.js. To install npm, you first need to install Node.js, as npm is distributed with Node.js. 

For Windows, macOS, and Linux, you can download Node.js and npm directly from the official Node.js website (https://nodejs.org/). The site provides pre-built installers for various platforms. 

### For Windows and macOS:
1. Visit the Node.js downloads page (https://nodejs.org/en/download/).
2. Choose the appropriate installer for your platform (Windows or macOS).
3. Download and run the installer, which will install both Node.js and npm on your system.

### For Linux:
1. Most Linux distributions have Node.js available in their package repositories, which also includes npm. You can install Node.js and npm using your distribution's package manager. For example, on Ubuntu or Debian, you can use the following commands in your terminal:

```bash
sudo apt update
sudo apt install nodejs npm
```

2. Alternatively, you can also download and run the Node.js installer from the Node.js website, similar to the process for Windows and macOS.

Once Node.js and npm are installed, you can install the Angular CLI globally on your system by running the following command in your terminal or command prompt:

```bash
npm install -g @angular/cli
```

In the following sections, we'll also discuss an alternative to the standard Node.js installation: Node Version Manager (nvm), which provides more flexibility for managing multiple versions of Node.js and npm on your system. Stay tuned for more details on that.

## Getting Help

Once installed, getting help is only a few keystrokes away. 

```bash
ng help <command-name (Default: all)> 
```

This command can be used to get general help or help on a specific ng command. 

## Starting a New Angular Project

This command creates a new directory and a new Angular app eg. "ng new [name]". 

```bash
ng new <options...> 
```

Some of the more common options are: 

- `--dry-run` (Boolean) (Default: false) Run through without making any changes. 
- `--skip-install` (Boolean) (Default: false) Skip installing packages. 
- `--skip-git` (Boolean) (Default: false) Skip initializing a git repository. 
- `--standalone` (Boolean) (Default: false) Creates an application based upon the standalone API, without NgModules.
- `--style` (String) (Default: css) The style file default extension. Your choices are css, scss, sass, or less.
- `--prefix` (String) (Default: app) The prefix to use for all component selectors. 
- `--routing` (Boolean) (Default: false) Generate a routing module. 

If you run `ng new` without any parameters, the Angular CLI will walk you through everything.

## Generating Project Assets

This command creates (generates) components, routes, services, interfaces, pipes, etc. with a simple command. 

```bash
ng generate <blueprint> <options...> 
```

By default, the CLI will also create simple test files for all of these.

### Available schematics: 
- appShell
- application
- class
- component
- directive
- enum
- guard
- interceptor
- interface
- library
- module
- pipe
- service
- serviceWorker
- webWorker

### Common Generation Flags
Some of the more common flags available to most of the schematics:  

- `--flat` (Boolean) Flag to indicate if a dir is created. By default, ng cli will create a separate folder for most blueprints, even if there is only one file. If you know you won't be creating multiple file (templates, tests, etc.), you can pass true to this flag, and the cli won't create the separate folder. 
- `--spec` (Boolean) Specifies if a spec file is generated. Pass false to this flag to prevent the cli from generating test files for you. Use this with caution. There are very few reasons not to have unit tests for your code. 
- `--app` (String) Specifies app name to use. 
- `--standalone` (Boolean) Specifies whether a component or directive should be created without an existing NgModule. 
- `--module` (String) Allows specification of the declaring module. By default, the item being generated will be attached to the "closest containing module." The cli will walk up the folder tree, looking for a module. Specifying a different module here will override that behavior. 

There are other options available to many of these blueprints, further customizing their behavior. 

## Starting a Development Web Server

Builds and serves your app, rebuilding on file changes. 

```bash
ng serve <options...> 
```

When running `ng serve`, the compiled output is served from memory, not from disk. This means that the application being served is not located on disk in the dist folder. By default, `ng serve` will serve your application on http://localhost:4200. It will not, however, open a web browser for you. You can override these settings through the following options: 

- `--host` (String) Allows you to change the host being served. 
- `--port` (Number) Allows you to override the port served. 
- `--open` Causes the cli to open your default browser automatically. 

There are many other options available, but those three are probably the most common defaults you might want to override. 

## Checking Your Coding Style

Lints code in existing project. This command can be used to ensure that code style matches industry-standard practices, and can help keep your team's code styling consistent. 

```bash
ng lint <options...> 
```

One of the coolest options to `ng lint` is the `--fix=true` option. As its name implies, this option attempts to fix any linting errors it finds. Some of the more common fixes it can make are spacing issues, missing semicolons, consistent quoting types (single or double). I recommend you only run this option on a pristine git repository, making it easy to undo if it breaks something. 

## Running Unit Tests

Run unit tests in existing project. 

```bash
ng test <options...> 
```

The ng cli sets up your tests by default unless you override that behavior. You don't have to spend your valuable time configuring your tests. If you use the ng cli, they will be configured automatically. 

## Building Your Projects

Builds your app and places it into the output path (dist/ by default). 

```bash
ng build <options...> 
```

## Additional Commands

Here are some other commands that are used less often, included here for completeness. 

### Opening Documentation
```bash
ng doc <keyword> 
```
Opens the official Angular documentation for a given keyword. 

### Running End-to-End Tests
```bash
ng e2e <options...> 
```
Run end-to-end (integration) tests in existing project. 

### Checking Version
```bash
ng version <options...> 
```
Outputs Angular CLI version. 

### Internationalization
```bash
ng xi18n <options...> 
```
Extracts i18n messages from source code. 

For more information, see the official documentation at https://cli.angular.io/
