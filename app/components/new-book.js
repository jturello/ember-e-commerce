import Ember from 'ember';

export default Ember.Component.extend ({
  addNewBook: false,
  actions: {
    bookFormShow() {
      this.set('addNewBook', true);
    },

    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        genre: this.get('genre')
      };
      this.set('addNewBook', false);
      this.sendAction('save', params);
      this.set('title', "");
      this.set('author', "");
      this.set('genre', "");
    }
  }
});
