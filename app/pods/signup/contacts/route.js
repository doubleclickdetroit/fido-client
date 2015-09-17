import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord( 'contact' );
  },

  renderTemplate() {
    this.render( 'contacts.new' );
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
      //
    },

    deleteOccasion() {
      //
    }
  }
});
