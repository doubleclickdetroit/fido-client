import Ember from 'ember';

export default Ember.Component.extend({
  occasions: [],

  actions: {
    saveContact(contact) {
      this.sendAction( 'onSaveContact', contact );
    }
  }
});
