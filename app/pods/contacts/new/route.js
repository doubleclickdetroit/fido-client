import Ember from 'ember';

export default Ember.Route.extend({
  deactivate() {
    let contact = this.controller.model;
    if ( contact.get('isNew') ) {
      contact.unloadRecord();
    }
  },

  model() {
    return this.store.createRecord( 'contact' );
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
