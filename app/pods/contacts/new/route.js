import Ember from 'ember';

export default Ember.Route.extend({
  genders      : Ember.inject.service( 'genders' ),
  relationships: Ember.inject.service( 'relationships' ),
  occasions    : Ember.inject.service( 'occasions' ),

  model() {
    return Ember.RSVP.hash({
      user         : this.store.createRecord( 'contact' ),
      genders      : this.get( 'genders.list' ),
      relationships: this.get( 'relationships.list' ),
      occasions    : this.get( 'occasions.list' )
    });
  }
});
