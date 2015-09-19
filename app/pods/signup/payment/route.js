import Ember from 'ember';
import WizardStepSignupMixin from '../../../mixins/wizard-steps-signup';

export default Ember.Route.extend(WizardStepSignupMixin, {
  actions: {
    handlePaymentToken(token) {
      console.log( 'handlePaymentToken', token );
    }
  }
});
