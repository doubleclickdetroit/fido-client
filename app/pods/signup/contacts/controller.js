import Ember from 'ember';

export default Ember.Controller.extend({
  contactsDidChange: Ember.observer('contacts.[]', function() {
    let contacts = this.get('contacts').filterBy( 'isNew', false );
    let hasActiveContacts = !contacts.get( 'length' );

    this.set( 'wizardStep.disableNext', hasActiveContacts );
  })
});
