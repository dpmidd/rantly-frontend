import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  validations: {
    firstName: {
      format: {with: /^\S*$/, message: "First name can't be blank or contain spaces"}
    },
    lastName: {
      presence: {message: "Last name can't be blank"}
    },
    email: {
      format: {with: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: 'Must be a valid email address'}
    },
    password: {
      length: {minimum: 8, messages: {tooShort: 'Password must be at least 8 characters'}}
    }
  },

  actions: {
    signUp: function () {
      var firstName = this.get('firstName'),
          lastName = this.get('lastName'),
          email = this.get('email'),
          password = this.get('password'),
          self = this;

      var user = this.store.createRecord('user',
        {first_name: firstName,
         last_name: lastName,
         email: email,
         password: password});
      self.set('firstName', '');
      self.set('lastName', '');
      self.set('email', '');
      self.set('password', '');
      user.save().then(function () {
        self.transitionToRoute('rants');
        Ember.run.later(function () {
          Ember.$('.rant-item').addClass('slide-out-right');
        }, 300);
      }.bind(self));
    },
  }
});
