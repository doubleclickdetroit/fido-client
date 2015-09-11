import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let contact = this._super.apply( this, arguments );

    return Ember.RSVP.hash({
      contact  : contact,
    });
  }
});
