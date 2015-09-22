import DS from 'ember-data';

export default DS.Model.extend({
  stripeToken: DS.attr( 'string' )
});
