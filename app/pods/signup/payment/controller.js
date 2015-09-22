import Ember from 'ember';

export default Ember.Controller.extend({
  hasProcessedPayment: false,

  hasProcessedPaymentDidChange: Ember.observer('hasProcessedPayment', 'wizardStep.disableNext', function() {
    let hasProcessedPayment = this.get( 'hasProcessedPayment' );
    this.set( 'wizardStep.disableNext', !hasProcessedPayment );
  })
});
