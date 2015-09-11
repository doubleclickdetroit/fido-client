import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectOccasion(occasion) {
      occasion.set( 'isSelected', true );
    },

    closeOccasion(occasion) {
      occasion.set( 'isSelected', false );
    }
  }
});
