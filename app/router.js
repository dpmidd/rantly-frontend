import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'});
  this.resource("users", {path: '/users'});
  this.resource("signup", {path: '/signup'});
});

export default Router;
