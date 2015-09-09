import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super();
    // determine dates for applicable year
    // https://coffeescript-cookbook.github.io/chapters/dates_and_times/date-of-thanksgiving
  },

  list: [
    Ember.Object.create({ label: 'Birthday',       date: null }),
    Ember.Object.create({ label: 'Anniversary',    date: null }),
    Ember.Object.create({ label: 'Sweetest Day',   date: '2015-10-17' }),
    Ember.Object.create({ label: 'Valentines Day', date: '2016-02-14' }),
  ]
});
