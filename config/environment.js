/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rantly-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    adapterURL: process.env.ADAPTER_URL,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' http://fonts.gstatic.com http://maxcdn.bootstrapcdn.com/",
      'connect-src': "'self' localhost:3000 https://frozen-falls-9941.herokuapp.com/",
      'img-src': "'self' http://www.gravatar.com/",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com http://maxcdn.bootstrapcdn.com/",
      'media-src': "'self'"
  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    routeAfterAuthentication: null
  };

  ENV['simple-auth-devise'] = {
    serverTokenEndpoint: 'https://frozen-falls-9941.herokuapp.com/',
    crossOriginWhitelist: ['*'],
    identificationAttributeName: 'email'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
