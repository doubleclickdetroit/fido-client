import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord( 'contact' );
  },

  actions: {
    willTransition() {
      let contact = this.controller.model;
      if ( contact.get('isNew') ) {
        contact.unloadRecord();
      }
    },

    saveContact() {
      //
    },

    saveOccasions() {
      this.transitionTo( 'contacts.index' );
    },

    deleteOccasion() {
      //
    }
  }
});
