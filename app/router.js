import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'}, function () {
    this.route("new", {path: '/new'});
  });
  this.resource("signup", {path: '/signup'}, function () {
    });
  this.resource("users", {path: '/users'}, function () {
  });
  this.route("protected");
  this.route("login");
});

export default Router;
