import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(EmberValidations.Mixin, {

  isEditing: false,

  actions: {
    editRant: function(){
      this.set('isEditing', true);
    },
    cancelRant: function(){
      this.set('isEditing', false);
    },
    updateRant: function(rant){
      var title = this.get('title');
      var body = this.get('body');
      var self = this;
      this.store.find('rant', rant.id).then(function(){
        rant.set('title', title);
        rant.set('body', body);
        rant.save().then(function () {
          self.set('isEditing', false);
        });
        self.transitionToRoute('rants');
      });
    },
    deleteRant: function(rant){
      rant.destroyRecord();
    }
  }
});
