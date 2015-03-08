import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newRant: function() {
      this.transitionToRoute('/new');
    }
  }
});
