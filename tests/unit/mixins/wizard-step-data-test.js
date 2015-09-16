import Ember from 'ember';
import WizardStepDataMixin from '../../../mixins/wizard-step-data';
import { module, test } from 'qunit';

module('Unit | Mixin | wizard step data');

// Replace this with your real tests.
test('it works', function(assert) {
  var WizardStepDataObject = Ember.Object.extend(WizardStepDataMixin);
  var subject = WizardStepDataObject.create();
  assert.ok(subject);
});
