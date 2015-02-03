 /*
 * grunt-zoompf
 * https://github.com/afuller/grunt-zoompf
 *
 * Copyright (c) 2015 Andrew Fuller
 * Licensed under the MIT license.
 */

'use strict';

var opn = require('opn');
var request = require('request');
var fs = require('fs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('zoompf', 'Grunt plugin to call the Zoompf API', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      testURLs: ['http://m.target.com/'],
      zoompf: 'http://wpo.zoompf.com/api/v1/BuildTimeScan.ashx'
    });

    // Allows us to run async requests within a synchronous grunt task
    var done = this.async(); 

    // TODO: Replace options.apikey with following:      
    // process.env.ZOOMPF_APIKEY

    var URLoptions = {
      uri: options.zoompf,
      method: "POST",
      json: {
        apikey: process.env.ZOOMPF_APIKEY,
        urls: options.testURLs
      }
    };

    request(URLoptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {

        // Response body returned as string so we'll just pull the url directly from that
        // Had weird issues with JSON.parse, not the best way to do it but it works for now
        var start = body.indexOf('http');
        var end = body.lastIndexOf("'}");
        var parsedURL = body.slice(start, end); 
          
        // This should open up the returned URL 
        opn(parsedURL);

        // Print a success message.
        grunt.log.writeln('Zoompf report can be found at: ' + parsedURL);
      }
      done();
    });

    });

};
