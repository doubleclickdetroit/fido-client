import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  contact  : Ember.computed.alias( 'model.contact' ),
  firstName: Ember.computed.alias( 'contact.firstName' ),
  lastName : Ember.computed.alias( 'contact.lastName' ),

  validations: {
    firstName: {
      presence: true,
      length: { minimum: 2 }
    },

    lastName: {
      presence: true,
      length: { minimum: 3 }
    }
  }
});
