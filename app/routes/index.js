import Ember from 'ember';

export default Ember.Route.extend ({
  model(){
    return this.store.findAll('book');
  },

  actions: {
    save(params) {
      var newBook = this.store.createRecord('book', params);
      newBook.save();
      this.transitionTo('index');
    }
  }
});
