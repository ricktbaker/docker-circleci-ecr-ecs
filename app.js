'use strict';

// Author: Rick Baker <rick@ricktbaker.com>

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

const server = new Hapi.Server();
server.connection({
  host : '0.0.0.0',
  port : 3000,
  routes : {
    cors : true,
    log : true
  }
});

/**
 * Register necessary plugins
 */
server.register([
  Inert,
  Vision,
  {
    register : HapiSwagger,
    options : {
      info : {
        'title' : 'App Documentation',
        'version' : Pack.version
      },
      sortEndpoints : 'ordered',
      grouping : 'tags'
    }
  }
], function(err) {

  if (err) {
    server.log('err', 'Unable to register plugins: ' + err);
  }

  // Print uncaught exceptions to console
  process.on('uncaughtException', function(err) {
    server.log('Uncaught Exception', err);
  });

  // Print unhandled Rejections
  process.on('unhandledRejection', function(reason, promise) {
    server.log('Unhandled Rejection', promise);
  });

  // Start the server
  server.start(function() {
    server.log('info', 'Server running at: ' + server.info.uri);
  });

  // Basic route
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('Hello, world!');
    }
  });
});
