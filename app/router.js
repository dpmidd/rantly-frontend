import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("index", {path: '/'});
  this.resource("rants", {path: '/rants'});
});

export default Router;
