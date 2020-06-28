import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  createdBy: belongsTo('user', { inverse: null }),
  members: hasMany('user', { inverse: 'organisation' }),
  projects: hasMany('project')
});
