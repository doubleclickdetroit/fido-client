import DS from 'ember-data';

export default DS.Model.extend({
  stripeToken       : DS.attr( 'string' ),
  currentPeriodStart: DS.attr( 'date' ),
  currentPeriodEnd  : DS.attr( 'date' ),
  price             : DS.attr( 'number' )
});
