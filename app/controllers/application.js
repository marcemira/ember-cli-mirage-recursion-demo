import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { debug } from '@ember/debug';

export default class ApplicationController extends Controller {
  @service store;

  additionalActions = [
    {
      name: 'Duplicate',
      icon: 'duplicate',
      action: this.duplicateNode,
    },
    {
      name: 'Rename',
      icon: 'rename',
      action: this.renameNode,
    },
  ];

  @action
  createNode() {

  }

  @action
  confirmRemove(node) {
    return confirm(`You are about to remove ${node.name}, do you want to continue?`);
  }

  @action
  removeNode(node) {
    if (node.isNew) {
      node.rollbackAttributes();
    } else {
      node.destroyRecord();
    }
  }

  @action
  duplicateNode (node) {
    debugger
  }

  @action
  renameNode (node) {
    debugger
  }
}
