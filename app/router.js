import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('marketing');

  this.route('signup', function() {
    this.route('membership');
    this.route('payment');
    this.route('overview');
    this.route('contacts');
  });

  this.route('login');
  this.route('dashboard');

  this.route('contacts', function() {
    this.route('new');
    this.route('show', { path: '/:contact_id' });
  });

  this.route('settings', function() {
    this.route('account', function() {
      this.route('edit');
      this.route('password');
    });
    this.route('billing', function() {
      this.route('edit');
    });
    this.route('notifications');
    this.route('receipts');
  });
});

export default Router;
