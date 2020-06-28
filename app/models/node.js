import Model, {
  attr,
  belongsTo,
  hasMany
} from '@ember-data/model';

export default class NodeModel extends Model {
  @attr('string') name

  @hasMany('node', { inverse: 'parentNode' }) childNodes
  @belongsTo('node', { inverse: 'childNodes' }) parentNode
  @belongsTo('user', { inverse: null }) createdBy
}
