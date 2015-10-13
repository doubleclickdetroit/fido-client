import Ember from 'ember';

export default Ember.Route.extend({
  signupService: Ember.inject.service( 'signup' ),

  model() {
    let steps    = this.get( 'signupService.steps' );
    let contacts = this.store.findAll( 'contact' ).catch(function() {
      return [];
    });

    return Ember.RSVP.hash({
      steps   : steps,
      contacts: contacts
    });
  },

  redirect(model, transition) {
    let notAuthenticated = !this.session.get( 'isAuthenticated' );
    let withoutPayment   = !this.session.get( 'isActivated' );
    let withoutContacts  = model.contacts.get( 'length' ) < 1;

    if ( notAuthenticated ) {
      this.transitionTo( 'signup.membership' );
    }
    else if ( withoutContacts ) {
      this.transitionTo( 'signup.contacts' );
    }
    else if ( withoutPayment ) {
      this.transitionTo( 'signup.payment' );
    }
    else {
      this.transitionTo( 'index' );
    }
  },

  actions: {
    prevRoute(route) {
      this.transitionTo( route );
    },
    nextRoute(route) {
      this.transitionTo( route );
    },

    accountIsActivated(isActivated) {
      this.session.accountIsActivated( isActivated );
    }
  }
});
