import Ember from 'ember';
import OccasionValidatorMixin from '../../../mixins/occasion-validator';
import { module, test } from 'qunit';

module('Unit | Mixin | occasion validator');

// Replace this with your real tests.
test('it works', function(assert) {
  var OccasionValidatorObject = Ember.Object.extend(OccasionValidatorMixin);
  var subject = OccasionValidatorObject.create();
  assert.ok(subject);
});
