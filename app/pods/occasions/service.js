import Ember from 'ember';

export default Ember.Service.extend({
  list: [
    { id: 1, label: 'Birthday',       date: null },
    { id: 1, label: 'Anniversary',    date: null },
    { id: 1, label: 'Sweetest Day',   date: '10/17/2015' },
    { id: 1, label: 'Valentines Day', date: '2/14/2016' },
  ]
});
