import Ember from 'ember';
import EmberValidations from 'ember-validations';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Mixin.create(LoginControllerMixin, EmberValidations.Mixin, {
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

  actions: {
    register: function() {
      var request, credentialsHash;
      credentialsHash = this.getProperties( 'email', 'password', 'passwordConfirmation' );

      request = Ember.$.ajax({
        method  : 'POST',
        dataType: 'json',
        url: 'http://localhost:3000/users',
        data: {
          user: credentialsHash
        }
      })
      .then(
        handleSuccess.bind( this ),
        handleFailure.bind( this )
      );

      function handleSuccess(response) {
        Ember.run(function() {
          this.send( 'authenticate' );
          this.setProperties({
            password: null,
            passwordConfirmation: null
          });
        }.bind( this ));
      }

      function handleFailure(xhr) {
        Ember.run(function() {
          var responseHash = JSON.parse( xhr.responseText ),
              errorHash    = responseHash[ 'errors' ];
        }.bind( this ));
      }

      return request;
    }
  }

});
