import Ember from 'ember';
import LazyValidations from '../../../mixins/ember-lazy-validations';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import RegistrationControllerMixin from '../../../mixins/registration-controller-mixin';

export default Ember.Controller.extend(RegistrationControllerMixin, LoginControllerMixin, LazyValidations, {
  authenticator: 'simple-auth-authenticator:devise',

  identification: Ember.computed.alias( 'email' ),

  isAuthenticatedDidChange: Ember.observer('session.isAuthenticated', 'wizardStep.disableNext', function() {
    let isAuthenticated = this.get( 'session.isAuthenticated' );
    this.set( 'wizardStep.disableNext', !isAuthenticated );
  }),

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
        let credentialsHash = this.getProperties( 'email', 'password', 'passwordConfirmation' );
        this.registerUser( credentialsHash );
      }
    }
  }
});
