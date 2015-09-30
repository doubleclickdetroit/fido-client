import Ember from 'ember';
import WizardStepSignupMixin from '../../../mixins/wizard-steps-signup';

export default Ember.Route.extend(WizardStepSignupMixin, {
  model() {
    return this.store.createRecord( 'contact' );
  },

  setupController(controller, model) {
    this._super.apply( this, arguments );

    let contacts = this.store.peekAll( 'contact' );
    controller.set( 'contacts', contacts );
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
