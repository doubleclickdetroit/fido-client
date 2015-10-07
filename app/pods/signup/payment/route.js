import Ember from 'ember';
import ENV from 'fido/config/environment';
import WizardStepSignupMixin from '../../../mixins/wizard-steps-signup';

export default Ember.Route.extend(WizardStepSignupMixin, {
  actions: {
    handlePaymentToken(token) {
      let url  = `${ENV.API_URL}/subscription/`;
      let data = { subscription: { stripe_token: token } };

      Ember.$.post( url, data )
        .then(() => this.set( 'controller.hasProcessedPayment', true ))
        .fail(() => this.set( 'controller.hasSubscriptionErrors', true ));
    }
  }
});
