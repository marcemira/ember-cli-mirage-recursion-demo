import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service store;

  @action
  createNode() {

  }

  @action
  confirmRemove(node) {
    return confirm(`You are about to remove ${node.name}, do you want to continue?`);
  }

  @action
  removeNode(node) {
    node.rollbackAttributes();
  }
}
