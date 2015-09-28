import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({
  makeRegistrationRequest(options={}) {
    let settings = _.extend({
      method  : 'POST',
      dataType: 'json',
      url: 'http://localhost:3000/users'
    }, options);

    return Ember.$.ajax( settings );
  },

  handleRegistrationCreateSuccess() {},
  handleRegistrationCreateFailure() {},

  actions: {
    register() {
      let request, credentialsHash;
      credentialsHash = this.getProperties( 'email', 'password', 'passwordConfirmation' );

      request = this.makeRegistrationRequest({
        data: {
          user: credentialsHash
        }
      })
      .then(
        this.handleRegistrationCreateSuccess.bind( this ),
        this.handleRegistrationCreateFailure.bind( this )
      );

      return request;
    }
  }

});
