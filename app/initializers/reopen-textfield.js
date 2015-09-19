export function initialize(/* container, application */) {
  Ember.TextField.reopen({
    attributeBindings: [
      'data-attr',
      'data-stripe'
    ]
  });
}

export default {
  name: 'reopen-textfield',
  initialize: initialize
};
