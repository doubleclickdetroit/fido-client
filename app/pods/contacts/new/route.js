import Ember from 'ember';

export default Ember.Route.extend({
  genders        : Ember.inject.service( 'genders' ),
  relationships  : Ember.inject.service( 'relationships' ),
  occasionPresets: Ember.inject.service( 'occasions' ),

  model() {
    let contactModel = this.store.createRecord( 'contact' );

    return Ember.RSVP.hash({
      contact        : contactModel,
      occasions      : contactModel.get( 'occasions' ),
      genders        : this.get( 'genders.list' ),
      relationships  : this.get( 'relationships.list' ),
      occasionPresets: this.get( 'occasionPresets.list' )
    });
  },

  actions: {
    selectOccasion(occasion) {
      let model = this.store.createRecord( 'occasion', occasion );
      model.set( 'contact', this.controller.model.contact );
      this.store.pushPayload( 'occasion', this.store.normalize('occasion', model) );
    }
  }
});
