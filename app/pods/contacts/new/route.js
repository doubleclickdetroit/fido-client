import Ember from 'ember';

export default Ember.Route.extend({
  genders      : Ember.inject.service( 'genders' ),
  relationships: Ember.inject.service( 'relationships' ),
  occasions    : Ember.inject.service( 'occasions' ),

  model() {
    return Ember.RSVP.hash({
      contact      : this.store.createRecord( 'contact' ),
      genders      : this.get( 'genders.list' ),
      relationships: this.get( 'relationships.list' ),
      occasions    : this.get( 'occasions.list' ).slice(0)
    });
  },

  actions: {
    selectOccasion(occasion) {
      occasion.setProperties({
        isSelected: true,
        contact: this.controller.model.contact
      });
    },

    closeOccasion(occasion) {
      occasion.setProperties({
        isSelected: false,
        contact: null
      });
    }
  }
});
