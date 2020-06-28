import Model, {
  attr,
  belongsTo,
  hasMany
} from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') firstName
  @attr('string') lastName

  @belongsTo('organisation') organisation
  @hasMany('project') projects
}
