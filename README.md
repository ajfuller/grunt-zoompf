# grunt-zoompf

> Grunt plugin to call the Zoompf API

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-zoompf --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-zoompf');
```

## The "zoompf" task

### Overview
In your project's Gruntfile, add a section named `zoompf` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  zoompf: {
    options: {
      // Task-specific options go here.
    },
  },
});
```

### API KEY
To run the task you must first provide your Zoompf API key as a node environment variable (process.env.ZOOMPF_APIKEY)
```export ZOOMPF_APIKEY=1234```

### Options

#### options.testURLs
Type: `Array`
Default value: `['http://www.google.com/']`

An array to set the different URLs that you want Zoompf to test against

#### options.zoompf
Type: `String`
Default value: `'http://wpo.zoompf.com/api/v1/BuildTimeScan.ashx'`

A string value that is used to set the default Zoompf API endpoint

### Usage Examples

#### Custom Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  zoompf: {
    options: {
        testURLs: ['http://m.google.com','http://www.google.com']
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
