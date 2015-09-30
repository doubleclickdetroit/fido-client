import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let cards        = this.store.peekAll( 'credit-card' );
    let subscription = this.store.findAll( 'subscription' ).then(function(collection) {
      return collection.get( 'firstObject' );
    });

    return Ember.RSVP.hash({
      cards: cards,
      subscription: subscription
    });
  }
});
