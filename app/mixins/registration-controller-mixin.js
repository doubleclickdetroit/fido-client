import Ember from 'ember';
import _ from 'lodash/lodash';
import ENV from 'fido/config/environment';

export default Ember.Mixin.create({
  buildRequest() {
    return {
      dataType: 'json',
      url     : `${ENV.API_URL}/users`
    };
  },

  makeRegistrationRequest(options={}) {
    let settings = _.extend( this.buildRequest(), options );
    return Ember.$.ajax( settings );
  },

  /**
   * Register User
   * @param  {object} credentialsHash user credentials
   * @return {promise}
   */
  registerUser(credentialsHash={}) {
    let request = this.makeRegistrationRequest({
      method: 'POST',
      data: {
        user: credentialsHash
      }
    })
    .then(
      this.handleRegistrationCreateSuccess.bind( this ),
      this.handleRegistrationCreateFailure.bind( this )
    );

    return request;
  },

  handleRegistrationCreateSuccess() {},
  handleRegistrationCreateFailure() {},

  /**
   * Get Current User
   * @return {promise}
   */
  getCurrentUser() {
    let request = this.makeRegistrationRequest({
      method: 'GET'
    })
    .then(
      this.handleRegistrationGetSuccess.bind( this ),
      this.handleRegistrationGetFailure.bind( this )
    );

    return request;
  },

  handleRegistrationGetSuccess(response) {
    return Ember.Object.create( response.user );
  },
  handleRegistrationGetFailure() {},

  /**
   * Update User
   * @param  {object} userData user credentials
   * @return {promise}
   */
  updateUser(userData) {
    let request = this.makeRegistrationRequest({
      method: 'PUT',
      data: {
        user: userData
      }
    })
    .then(
      this.handleRegistrationUpdateSuccess.bind( this ),
      this.handleRegistrationUpdateFailure.bind( this )
    );
  },

  handleRegistrationUpdateSuccess() {},
  handleRegistrationUpdateFailure() {}

});
