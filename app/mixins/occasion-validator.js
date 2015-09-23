import Ember from 'ember';
import EmberValidations, { validator } from 'ember-validations';

export default Ember.Mixin.create(EmberValidations.Mixin, {

  validations: {
    date: {
      inline: EmberValidations.validator(function() {
        let date = this.get( 'date' );
        if ( !date ) {
          return 'Date is required.'
        }

        date      = new Date( date );
        let today = new Date( new Date().setHours(0,0,0,0) );

        if ( today >= new Date(date) ) {
          return 'Date must be in the future.'
        }
      })
    }
  }

});
