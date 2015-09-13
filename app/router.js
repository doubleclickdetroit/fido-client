import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', function() {
    this.route('new');
    this.route('show', { path: '/:contact_id' });
  });

  this.route('signup', function() {
    this.route('membership');
    this.route('payment');
    this.route('overview');
  });
  this.route('login');
});

export default Router;
