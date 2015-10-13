import Ember from 'ember';
import ActivatedRouteMixinMixin from '../../../mixins/activated-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | activated route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ActivatedRouteMixinObject = Ember.Object.extend(ActivatedRouteMixinMixin);
  var subject = ActivatedRouteMixinObject.create();
  assert.ok(subject);
});
