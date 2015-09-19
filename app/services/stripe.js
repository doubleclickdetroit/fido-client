import Ember from 'ember';
import ENV from 'fido/config/environment';

export default Ember.Service.extend({

  __deferred: Ember.RSVP.defer(),
  exec      : Ember.computed.alias( '__deferred.promise' ),

  init() {
    let deferred = this.get( '__deferred' );

    const API_URL         = ENV.STRIPE_URL;
    const PUBLISHABLE_KEY = ENV.STRIPE_KEY;

    Ember.$.getScript( API_URL ).then(function() {
      Stripe.setPublishableKey( PUBLISHABLE_KEY );
      deferred.resolve();
    });

  },

  submitByForm($form) {
    let deferred = Ember.RSVP.defer();

    let handleStripeResponse = function(status, response) {
      if ( response.error ) {
        deferred.reject( response.error.message );
      }
      else {
        let token = response.id;
        deferred.resolve( token );
      }
    };

    this.get( 'exec' ).then(function() {
      Stripe.card.createToken( $form, handleStripeResponse );
    });

    return deferred.promise;
  }

});
