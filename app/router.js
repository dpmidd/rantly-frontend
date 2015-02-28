import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'});
  this.route("login", {path: '/login'});
  this.route('application');
  this.route('protected');
  this.resource("users", {path: '/users'});
  this.resource("signup", {path: '/signup'});
});

export default Router;
