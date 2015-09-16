import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Mixin.create(LoginControllerMixin, {
  identification: Ember.computed.alias( 'email' ),

  actions: {
    register: function() {
      var request, credentialsHash;
      credentialsHash = this.getProperties( 'email', 'password', 'password_confirmation' );

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
            password_confirmation: null
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
