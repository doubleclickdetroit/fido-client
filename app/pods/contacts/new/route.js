import Ember from 'ember';

export default Ember.Route.extend({
  genders        : Ember.inject.service( 'genders' ),
  relationships  : Ember.inject.service( 'relationships' ),
  occasionPresets: Ember.inject.service( 'occasions' ),

  model() {
    return Ember.RSVP.hash({
      user           : this.store.createRecord( 'contact' ),
      occasions      : this.store.all( 'occasion' ),
      genders        : this.get( 'genders.list' ),
      relationships  : this.get( 'relationships.list' ),
      occasionPresets: this.get( 'occasionPresets.list' )
    });
  },

  actions: {
    selectOccasion(occasion) {
      let model = this.store.createRecord( 'occasion', occasion );
      this.store.push( 'occasion', model );
    }
  }
});
