import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNote: function() {
      var body = this.get('newBody');
      var note = this.store.createRecord('note', {
        body: body
      });
      note.save();
      this.set('newBody', "");
      this.set('message', "Successfully created a note!");
    },

    deleteNote: function(note) {
      var _this = this;
      this.store.find('note', note.id).then(function(note) {
        note.destroyRecord();
        _this.set('message', "Note deleted!");
      });
    }
  }
});
