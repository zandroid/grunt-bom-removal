# grunt-bom-removal

> A Byte Order Mark removal task for grunt.

## WARNING
As a note it does a direct rewrite of the file, just without the BOM, please make sure you have tested grunt-bom-removal before using it any code, just in case for some reason it decides to eat your code for lunch.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bom-removal --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bom-removal');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4).*

## BOM task
_Run this task with the `grunt bom` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### printMissed
Type: `Boolean`  
Default: false

This allows to print in log missed files without BOM.

### Usage Examples

There are three formats you can use to run this task.

#### Short

```js
bom: ["path/to/file/one.txt", "path/to/file/two.js"]
```

#### Medium (specific targets with global options)

```js
bom: {
  build: ["path/to/file/one.txt", "path/to/file/two.txt"],
  release: ["path/to/another/file/one.js", "path/to/another/file/two.js"]
},
```

#### Long (specific targets with per target options)

```js
clean: {
  build: {
    src: ["path/to/file/one.txt", "path/to/file/two.txt"]
  }
}
```

## License
Copyright (c) 2013 Andrey Zaytsev
Licensed under the MIT license.
