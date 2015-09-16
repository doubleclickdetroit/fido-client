import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    sessionAuthenticationSucceeded() {
      // prevent ember-simple-auth config.routeAfterAuthentication redirecting to 'index'
    },
    prevRoute(route) {
      console.log( 'membership prev' );
      return true;
    },
    nextRoute(route) {
      console.log( 'membership next' );
      return true;
    }
  }
});
