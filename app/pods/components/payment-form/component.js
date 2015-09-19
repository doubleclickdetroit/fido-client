import Ember from 'ember';

export default Ember.Component.extend({
  StripeSevice: Ember.inject.service( 'stripe' ),

  isProcessing: false,

  init() {
    this._super();

    let isDebug = this.get( 'isDebug' );
    if ( isDebug ) {
      this.setProperties({
        number   : '4242424242424242',
        cvc      : '123',
        exp_month: '05',
        exp_year : '2016'
      });
    }
  },

  handleSubmitSuccess(token) {
    this.sendAction( 'onPaymentToken', token );
  },

  handleSubmitFailure(message) {
    this.setProperties({
      error: message,
      isProcessing: false
    });
  },

  actions: {
    submit() {
      this.set( 'error', null );
      this.toggleProperty( 'isProcessing', true );

      let $form  = this.$( 'form' );
      let stripe = this.get( 'StripeSevice' );

      stripe.submitByForm( $form )
        .then( this.handleSubmitSuccess.bind(this) )
        .fail( this.handleSubmitFailure.bind(this) );
    }
  }
});
