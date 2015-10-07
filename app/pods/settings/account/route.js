import Ember from 'ember';
import RegistrationMixin from '../../../mixins/registration-controller-mixin';

export default Ember.Route.extend(RegistrationMixin, {
  model() {
    return this.getCurrentUser();
  },

  actions: {
    updateUser() {
      let userData = this.controller.model.getProperties( 'first_name', 'last_name', 'current_password' );
      return this.updateUser( userData );
    }
  }
});
