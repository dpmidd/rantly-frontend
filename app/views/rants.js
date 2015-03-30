import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$('#thissearch').keyup(function (e) {
      var value = Ember.$('#thissearch').val();
      if(e.which === 13 && value === ''){
        Ember.$('#thissearch').attr('placeholder', "This can't be blank!");
        e.stopPropagation();
        e.preventDefault();
      }
    });
  }
});
