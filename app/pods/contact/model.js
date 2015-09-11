import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin, {
  occasions: DS.hasMany( 'occasion' ),

  firstName   : DS.attr(),
  lastName    : DS.attr(),
  gender      : DS.attr( 'number', { defaultValue: 1 } ),
  relationship: DS.attr( 'number', { defaultValue: 1 } ),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get( 'firstName' ) +' '+ this.get( 'lastName' );
  }),

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
