import Ember from "ember";
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(LoginControllerMixin, EmberValidations.Mixin, {
  authenticator: 'simple-auth-authenticator:devise',
  loginError: false,

  validations: {
    query: {
      presence: {message: "This can't be blank!"}
    }
  },

  actions: {
    newRant: function() {
      this.transitionToRoute('/new');
    },

    search: '',

    doSearch: function() {
        var query = this.get('search');
        this.set('searchQuery', query);
        this.transitionToRoute('search', query);
    }
  }
});
