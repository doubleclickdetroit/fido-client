import Ember from 'ember';
import WizardStepDataMixin from '../../../mixins/wizard-step-data';

export default Ember.Route.extend(WizardStepDataMixin, {
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
