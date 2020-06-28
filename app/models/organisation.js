import Model, {
  attr,
  belongsTo,
  hasMany
} from '@ember-data/model';

export default class OrganisationModel extends Model {
  @attr('string') name

  @belongsTo('user', { inverse: null }) createdBy
  @hasMany('user', { inverse: 'organisation' }) members
  @hasMany('project') projects
}
