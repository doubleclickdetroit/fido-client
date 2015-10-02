/* jshint node: true */

module.exports = function(environment) {
  var config = require( './configuration' ).config;

  var ENV = {
    modulePrefix: 'fido',
    podModulePrefix: 'fido/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com/v2/",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:3000",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "https://js.stripe.com/"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.API_URL    = config.api.url.dev;
    ENV.STRIPE_URL = config.stripe.url.dev;
    ENV.STRIPE_KEY = config.stripe.publishable_key.dev;
  }

  if (environment === 'staging') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.API_URL    = config.api.url.staging;
    ENV.STRIPE_URL = config.stripe.url.staging;
    ENV.STRIPE_KEY = config.stripe.publishable_key.staging;
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
    ENV.API_URL    = config.api.url.prod;
    ENV.STRIPE_URL = config.stripe.url.prod;
    ENV.STRIPE_KEY = config.stripe.publishable_key.prod;
  }


  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    crossOriginWhitelist: [ENV.API_URL]
  };
  ENV['simple-auth-devise'] = {
    identificationAttributeName: 'email',
    tokenAttributeName: 'token',
    serverTokenEndpoint: ENV.API_URL+'/users/sign_in'
  };


  return ENV;
};
