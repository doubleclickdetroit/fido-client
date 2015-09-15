import Ember from 'ember';
import RegistrationControllerMixin from '../../../mixins/signup/membership';

export default Ember.Controller.extend(RegistrationControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',

  errorsCollection: function() {
    var errors = this.get( 'errors' );
    return errors.map(function(key, val) {
      return { field: key, messages: val };
    });
  }.property( 'errors' )
});
