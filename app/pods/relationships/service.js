import Ember from 'ember';

export default Ember.Service.extend({
  list: [
    { id: 1, label: 'Parent' },
    { id: 2, label: 'Spouse' },
    { id: 3, label: 'Fiancee' },
    { id: 4, label: 'Dating' },
    { id: 5, label: 'Grandparent' },
    { id: 6, label: 'Sibling' },
    { id: 7, label: 'Child' }
  ]
});
