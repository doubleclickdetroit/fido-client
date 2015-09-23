import Ember from 'ember';
import WizardStepSignupMixin from '../../../mixins/wizard-steps-signup';

export default Ember.Route.extend(WizardStepSignupMixin, {
  actions: {
    sessionAuthenticationSucceeded() {
      // prevent ember-simple-auth config.routeAfterAuthentication redirecting to 'index'
    }
  }
});
