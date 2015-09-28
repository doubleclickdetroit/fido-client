import Ember from 'ember';
import RegistrationControllerMixinMixin from '../../../mixins/registration-controller-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | registration controller mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var RegistrationControllerMixinObject = Ember.Object.extend(RegistrationControllerMixinMixin);
  var subject = RegistrationControllerMixinObject.create();
  assert.ok(subject);
});
