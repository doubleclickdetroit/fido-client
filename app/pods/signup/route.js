import Ember from 'ember';

export default Ember.Route.extend({
  signupService: Ember.inject.service( 'signup' ),

  model() {
    return this.get( 'signupService.steps' );
  },

  afterModel(model, transition) {
    this.transitionTo( 'signup.membership' );
  },

  actions: {
    prevRoute(route) {
      this.transitionTo( route );
    },
    nextRoute(route) {
      this.transitionTo( route );
    }
  }
});
