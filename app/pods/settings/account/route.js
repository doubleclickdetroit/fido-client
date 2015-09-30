import Ember from 'ember';
import RegistrationMixin from '../../../mixins/registration-controller-mixin';

export default Ember.Route.extend(RegistrationMixin, {
  model() {
    return this.getCurrentUser();
  }
});
