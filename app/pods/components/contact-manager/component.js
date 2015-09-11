import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),

  occasions: [],

  actions: {
    saveContact(contact) {
      contact.save().then(function() {
        this.sendAction( 'onSaveContact', contact );
      }.bind(this));
    },

    saveOccasions(occasions) {
      let store   = this.get( 'store' );
      let contact = this.get( 'contact' );

      occasions.filterBy('id', undefined).forEach(function(occasion) {
        let data = occasion.getProperties( 'label', 'date' );
        data.contact = contact;
        store.createRecord( 'occasion', data );
      });

      let collection = contact.get( 'occasions' );
      collection.invoke( 'save' );
      this.sendAction( 'onSaveOccasions', collection );
    },

    deleteOccasion(occasion) {
      occasion.destroyRecord();
      this.sendAction( 'onDeleteOccasion', occasion );
    }
  }
});
