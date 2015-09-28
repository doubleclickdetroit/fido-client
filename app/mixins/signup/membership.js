import Ember from 'ember';
import EmberValidations from 'ember-validations';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import RegistrationControllerMixin from '../registration-controller-mixin';

export default Ember.Mixin.create(RegistrationControllerMixin, LoginControllerMixin, EmberValidations.Mixin, {
  identification: Ember.computed.alias( 'email' ),

  validations: {
    email: {
      presence: true,
      format: /.+@.+\..{2,4}/
    },
    password: {
      presence: true,
      confirmation: true,
      length: { minimum: 8 }
    },
    passwordConfirmation: {
      presence: true
    }
  },

  handleRegistrationCreateSuccess(response) {
    Ember.run(function() {
      this.send( 'authenticate' );
      this.setProperties({
        password: null,
        passwordConfirmation: null
      });
    }.bind( this ));
  },

  handleRegistrationCreateFailure(xhr) {
    Ember.run(function() {
      var responseHash = JSON.parse( xhr.responseText ),
          errorHash    = responseHash[ 'errors' ];
    }.bind( this ));
  },

  actions: {
    register: function() {
      let request = this._super.apply( this, arguments );
      return request;
    }
  }

});
