import Ember from 'ember';
import EmberLazyValidationsMixin from '../../../mixins/ember-lazy-validations';
import { module, test } from 'qunit';

module('Unit | Mixin | ember lazy validations');

// Replace this with your real tests.
test('it works', function(assert) {
  var EmberLazyValidationsObject = Ember.Object.extend(EmberLazyValidationsMixin);
  var subject = EmberLazyValidationsObject.create();
  assert.ok(subject);
});
