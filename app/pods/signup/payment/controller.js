import Ember from 'ember';

export default Ember.Controller.extend({
  hasProcessedPayment: false,

  hasProcessedPaymentDidChange: Ember.observer('hasProcessedPayment', 'wizardStep.disableNext', function() {
    let hasProcessedPayment = this.get( 'hasProcessedPayment' );
    this.set( 'wizardStep.disableNext', !hasProcessedPayment );
  }),

  actions: {
    handlePaymentToken() {
      // TODO: this will be set in the route
      // once subscription#create is successful
      // keep until that's complete so UI implemented in the meantime
      this.set( 'hasProcessedPayment', true );
      return true;
    }
  }
});
