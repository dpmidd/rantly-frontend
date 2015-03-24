import DS from "ember-data";

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  rants: DS.hasMany('rants', {async: true})
});
