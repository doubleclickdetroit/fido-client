import Ember from 'ember';

export default Ember.Component.extend({
  occasionPresets: Ember.inject.service( 'occasions' ),

  occasions: [],
  selectedOccasions       : Ember.computed.filterProperty( 'occasionCollection', 'isSelected', true ),
  withoutSelectedOccasions: Ember.computed.equal( 'selectedOccasions.length', 0 ),

  init() {
    let occasions       = this.get( 'occasions' );
    let occasionPresets = this.get( 'occasionPresets' ).addPresets( occasions );

    occasions.addArrayObserver( this );

    this.set( 'occasionCollection', occasionPresets );
    this._super.apply( this, arguments );
  },

  arrayWillChange: function(array, start, removeCount, addCount) {
  },
  arrayDidChange: function(array, start, removeCount, addCount) {
    let occasions       = this.get( 'occasions' );
    let occasionPresets = this.get( 'occasionPresets' ).addPresets( occasions );
    this.set( 'occasionCollection', occasionPresets );
  },

  actions: {
    selectOccasion(occasion) {
      occasion.set( 'isSelected', true );
    },

    closeOccasion(occasion) {
      occasion.set( 'isSelected', false );
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
