import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  genre: DS.attr(),
  cost: DS.attr()
});
