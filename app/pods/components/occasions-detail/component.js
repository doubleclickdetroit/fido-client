import Ember from 'ember';

export default Ember.Component.extend({
  occasionPresets: Ember.inject.service( 'occasions' ),

  occasions: [],
  selectedOccasions       : Ember.computed.filterProperty( 'occasionCollection', 'isSelected', true ),
  withoutSelectedOccasions: Ember.computed.equal( 'selectedOccasions.length', 0 ),

  init() {
    let occasions = this.get( 'occasions' );
    occasions.addArrayObserver( this );

    // initially set occasionCollection
    this.updateOccasionCollection();

    this._super.apply( this, arguments );
  },

  updateOccasionCollection() {
    let occasions       = this.get( 'occasions' );
    let occasionPresets = this.get( 'occasionPresets' ).insertPresets( occasions );
    this.set( 'occasionCollection', occasionPresets );
  },

  arrayWillChange() {
    // required, otherwise Ember throws an error
  },
  arrayDidChange() {
    this.updateOccasionCollection();
  },

  actions: {
    openOccasion(occasion) {
      occasion.set( 'isSelected', true );
    },

    closeOccasion(occasion) {
      occasion.set( 'isSelected', false );
    },

    deleteOccasion(occasion) {
      this.send( 'closeOccasion', occasion );

      if ( occasion.get('id') ) {
        this.attrs.onDelete( occasion );
      }
    },

    saveOccasions() {
      let occasions = this.get( 'selectedOccasions' );
      this.attrs.onSave( occasions );
    }
  }
});
