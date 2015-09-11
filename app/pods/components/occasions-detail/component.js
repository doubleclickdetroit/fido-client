import Ember from 'ember';

export default Ember.Component.extend({
  occasions: [],
  occasionPresets: Ember.inject.service( 'occasions' ),

  init() {
    let occasions       = this.get( 'occasions' );
    let occasionPresets = this.get( 'occasionPresets' ).addPresets( occasions );

    this.set( 'occasionPresets', occasionPresets );
    this._super.apply( this, arguments );
  },

  actions: {
    selectOccasion(occasion) {
      occasion.set( 'isSelected', true );
    },

    closeOccasion(occasion) {
      occasion.set( 'isSelected', false );
    }
  }
});
