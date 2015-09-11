import Ember from 'ember';

export default Ember.Component.extend({
  occasionPresets: Ember.inject.service( 'occasions' ),

  occasions: [],

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
    },

    saveOccasions() {
      let occasions = this.get('occasionPresets').filterProperty( 'isSelected', true );
      this.attrs.onSave( occasions );
    }
  }
});
