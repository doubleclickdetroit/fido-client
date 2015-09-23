import DS from 'ember-data';
import OccasionValidatorMixin from '../../mixins/occasion-validator';

export default DS.Model.extend(OccasionValidatorMixin, {
  contact: DS.belongsTo( 'contact' ),

  label: DS.attr( 'string' ),
  date : DS.attr( 'isodate' ),

  isSelected: true
});
