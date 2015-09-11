import Ember from 'ember';

export default Ember.Route.extend({
  occasions: Ember.inject.service( 'occasions' ),

  deactivate() {
    let contact = this.controller.model.contact;

    if ( contact.get('isNew') ) {
      contact.get( 'occasions' ).toArray().invoke( 'unloadRecord' );
      contact.unloadRecord();
    }
  },

  model() {
    let contact   = this.store.createRecord( 'contact' );
    let occasions = contact.get( 'occasions' );

    this.get( 'occasions.list' ).forEach(function(occasion) {
      if ( !occasions.findBy('label', occasion.label) ) {
        occasion.contact = contact;
        this.store.createRecord( 'occasion', occasion );
      }
    }, this);

    return Ember.RSVP.hash({
      contact  : contact,
      occasions: occasions,
    });
  }
});
