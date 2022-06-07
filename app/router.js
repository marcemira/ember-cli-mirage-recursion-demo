import EmberRouter from '@ember/routing/router';
import config from 'ember-cli-mirage-recursion-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('project', { path: ":id"});
});
