import Ember from 'ember';
import WizardStepSignupMixin from '../../../mixins/wizard-steps-signup';

export default Ember.Route.extend(WizardStepSignupMixin, {
  actions: {
    sessionAuthenticationSucceeded() {
      let nextTransition = this.controller.get( 'wizardStep.nextTransition' );
      this.transitionTo( nextTransition );
      // prevent ember-simple-auth config.routeAfterAuthentication redirecting to 'index'
    }
  }
});
