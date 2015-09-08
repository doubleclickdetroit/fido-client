import Ember from 'ember';

export default Ember.Service.extend({
  list: [
    { label: 'Birthday',       date: null },
    { label: 'Anniversary',    date: null },
    { label: 'Sweetest Day',   date: '10/17/2015' },
    { label: 'Valentines Day', date: '2/14/2016' },
  ]
});
