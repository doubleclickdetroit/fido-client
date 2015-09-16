import Ember from 'ember';
import RegistrationControllerMixin from '../../../mixins/signup/membership';

export default Ember.Controller.extend(RegistrationControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',

  isAuthenticatedDidChange: Ember.observer('session.isAuthenticated', 'wizardStep.showNext', function() {
    let isAuthenticated = this.get( 'session.isAuthenticated' );
    this.set( 'wizardStep.showNext', isAuthenticated );
  })
});
