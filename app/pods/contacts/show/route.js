import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveContact() {
      console.log( 'saveContact called' );
    },

    saveOccasions() {
      console.log( 'saveOccasions called' );
    },

    deleteOccasion() {
      console.log( 'deleteOccasion called' );
    }
  }
});
