import DS from 'ember-data';

export default DS.Model.extend({
  occasions: DS.hasMany( 'occasion' ),

  gender      : DS.attr( 'number', { defaultValue: 1 } ),
  relationship: DS.attr( 'number', { defaultValue: 1 } )
});
