import Ember from 'ember';

export default Ember.Component.extend({
  gendersService      : Ember.inject.service( 'genders' ),
  relationshipsService: Ember.inject.service( 'relationships' ),

  genders      : Ember.computed.alias( 'gendersService.list' ),
  relationships: Ember.computed.alias( 'relationshipsService.list' ),

  setIsEditable(isEditable) {
    this.set( 'isEditable', isEditable );
  },

  contactDidChange: function() {
    let id = this.get( 'contact.id' );
    this.setIsEditable( !id );
  }.on( 'init' ).observes( 'contact.isNew' ),

  actions: {
    saveContact() {
      let contact = this.get( 'contact' );
      this.attrs.onSave( contact );
      this.setIsEditable( false );
    },

    editContact() {
      this.setIsEditable( true );
    },

    cancelEditing() {
      this.setIsEditable( false );
    }
  }
});
