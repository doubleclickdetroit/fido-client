import Ember from 'ember';
import SignupMembershipMixin from '../../../mixins/signup/membership';
import { module, test } from 'qunit';

module('Unit | Mixin | signup/membership');

// Replace this with your real tests.
test('it works', function(assert) {
  var SignupMembershipObject = Ember.Object.extend(SignupMembershipMixin);
  var subject = SignupMembershipObject.create();
  assert.ok(subject);
});
