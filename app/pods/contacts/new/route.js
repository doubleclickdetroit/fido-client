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
    saveContact(contact) {
      contact.save();
    },

    saveOccasions(occasions) {
      occasions.forEach(function(occasion) {
        occasion.save();
      });
    }
  }
});
