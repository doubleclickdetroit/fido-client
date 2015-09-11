import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let contact = this._super.apply( this, arguments );

    return Ember.RSVP.hash({
      contact  : contact,
    });
  },

  actions: {
    saveContact() {
      console.log( 'saveContact called' );
    },

    saveOccasions() {
      console.log( 'saveOccasions called' );
    },

    deleteOccasion() {
      console.log( 'deleteOccasion called' );
    }
  }
});
