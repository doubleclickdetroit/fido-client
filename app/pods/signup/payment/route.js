import Ember from 'ember';
import WizardStepSignupMixin from '../../../mixins/wizard-steps-signup';

export default Ember.Route.extend(WizardStepSignupMixin, {
  actions: {
    handlePaymentToken(token) {
      // create the subscription
      let subscription = this.store.createRecord('subscription', { stripeToken: token });

      // create subscription, then update controller payment has processed
      subscription.save().then(function() {
        this.set( 'controller.hasProcessedPayment', true );
      }.bind(this));
    }
  }
});
