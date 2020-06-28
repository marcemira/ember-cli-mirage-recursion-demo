import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  projects: hasMany('project'),
  organisation: belongsTo('organisation')
});
