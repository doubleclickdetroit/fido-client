import DS from 'ember-data';

export default DS.Model.extend({
  contact: DS.belongsTo( 'contact' ),

  label: DS.attr( 'string' ),
  date : DS.attr( 'isodate' ),

  isSelected: true
});
