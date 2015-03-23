import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'}, function () {
    this.route("new", {path: '/new'});
  });
  this.resource("users", {path: '/users'}, function () {
  });
  this.resource("signup", {path: '/signup'}, function () {
  });
});

export default Router;
