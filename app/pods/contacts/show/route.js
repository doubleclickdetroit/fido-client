import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveContact() {
      //
    },

    saveOccasions() {
      this.transitionTo( 'contacts.index' );
    },

    deleteOccasion() {
      //
    }
  }
});
