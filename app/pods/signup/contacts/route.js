import Ember from 'ember';
import WizardStepDataMixin from '../../../mixins/wizard-step-data';

export default Ember.Route.extend(WizardStepDataMixin, {
  model() {
    return this.store.createRecord( 'contact' );
  },

  setupController(controller, model) {
    this._super.apply( this, arguments );

    let contacts = this.store.peekAll( 'contact' );
    controller.set( 'contacts', contacts );
  },

  renderTemplate() {
    this.render( 'contacts.new' );
  },

  actions: {
    willTransition() {
      let contact = this.controller.model;
      if ( contact.get('isNew') ) {
        contact.unloadRecord();
      }
    },

    saveOccasions() {
      let contact = this.store.createRecord( 'contact' );
      this.set( 'controller.model', contact );
    },

    saveContact() {
      //
    },

    deleteOccasion() {
      //
    }
  }
});
