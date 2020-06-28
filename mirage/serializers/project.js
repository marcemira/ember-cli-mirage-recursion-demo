import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  alwaysIncludeLinkageData: true,

  init() {
    this._super(...arguments);
    this.include = ['members', 'nodes'];
  }
});
