import Ember from 'ember';
import LazyValidations from '../ember-lazy-validations';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import RegistrationControllerMixin from '../registration-controller-mixin';

export default Ember.Mixin.create(RegistrationControllerMixin, LoginControllerMixin, LazyValidations, {
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
    this.send( 'authenticate' );
  },

  handleRegistrationCreateFailure(xhr) {
    Ember.run(function() {
      var responseHash = JSON.parse( xhr.responseText ),
          errorHash    = responseHash[ 'errors' ];
    }.bind( this ));
  },

  actions: {
    register: function() {
      this.validate().catch( Ember.K );

      let isValid = this.get( 'isValid' );
      if ( isValid ) {
        this._super.apply( this, arguments );
      }
    }
  }

});
