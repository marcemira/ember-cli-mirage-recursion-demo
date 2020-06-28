import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  parentNode: belongsTo('node', { inverse: 'childNodes' }),
  childNodes: hasMany('node', { inverse: 'parentNode' }),
  createdBy: belongsTo('user'),
});
