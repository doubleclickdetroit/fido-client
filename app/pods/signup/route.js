import Ember from 'ember';

export default Ember.Route.extend({
  signupService: Ember.inject.service( 'signup' ),

  model() {
    return this.get( 'signupService.steps' );
  },

  redirect(model, transition) {
    let isAuthenticated = this.session.get( 'isAuthenticated' );
    this.transitionTo( isAuthenticated ? 'signup.payment' : 'signup.membership' );
    // this.transitionTo( isAuthenticated ? 'index' : 'signup.membership' );
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
