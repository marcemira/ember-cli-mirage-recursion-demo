import Model, {
  attr,
  belongsTo,
  hasMany
} from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr('string') name

  @hasMany('user', { inverse: 'projects' }) members
  @belongsTo('user', { inverse: null }) createdBy
  @hasMany('node') nodes
}
