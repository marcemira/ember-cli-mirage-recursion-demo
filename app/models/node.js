import Model, {
  attr,
  belongsTo,
  hasMany
} from '@ember-data/model';

export default class NodeModel extends Model {
  @attr('string') name

  @attr('boolean', { defaultValue: false }) isSelected
  @attr('boolean', { defaultValue: false }) isDisabled
  @attr('boolean', { defaultValue: false }) isExpanded
  @attr('boolean', { defaultValue: true }) isVisible

  @hasMany('node', { inverse: 'parentNode' }) childNodes
  @belongsTo('node', { inverse: 'childNodes' }) parentNode
  @belongsTo('user', { inverse: null }) createdBy
}
