import Ember from 'ember';
import WizardStepsSignupMixin from '../../../mixins/wizard-steps-signup';
import { module, test } from 'qunit';

module('Unit | Mixin | wizard steps signup');

// Replace this with your real tests.
test('it works', function(assert) {
  var WizardStepsSignupObject = Ember.Object.extend(WizardStepsSignupMixin);
  var subject = WizardStepsSignupObject.create();
  assert.ok(subject);
});
