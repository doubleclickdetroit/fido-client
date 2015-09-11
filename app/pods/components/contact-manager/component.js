import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),

  occasions: [],

  actions: {
    saveContact(contact) {
      this.sendAction( 'onSaveContact', contact );
    },

    saveOccasions(occasions) {
      let store   = this.get( 'store' );
      let contact = this.get( 'contact' );

      occasions.forEach(function(occasion) {
        let data = occasion.getProperties( 'label', 'date' );
        data.contact = contact;
        store.createRecord( 'occasion', data );
      });

      let collection = contact.get( 'occasions' );
      this.sendAction( 'onSaveOccasions', collection );
    }
  }
});
