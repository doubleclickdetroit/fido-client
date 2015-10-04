import Ember from 'ember';
import EmberValidations from 'ember-validations';
import Errors from 'ember-validations/errors';

const { computed } = Ember;

export default Ember.Mixin.create(EmberValidations.Mixin, {

  _hasValidated: false,

  fieldErrors: computed('_hasValidated', function() {
    return this.get('_hasValidated') ? this.get('errors') : Errors.create({});
  }),

  validate: function () {
    this.set('_hasValidated', true);
    return this._super.apply(this, arguments);
  }
});
