import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { debug } from '@ember/debug';

export default class ApplicationController extends Controller {
  @service store;

  additionalActions = [
    {
      title: 'Duplicate',
      name: 'duplicate',
      icon: 'duplicate',
      order: 3,
      action: this.duplicateNode,
    },
    {
      title: 'Rename',
      name: 'rename',
      icon: 'rename',
      order: 4,
      action: this.renameNode,
    },
  ];

  @action
  customOrder = {
    add: 1,
    duplicate: 2,
    rename: 3,
    remove: 4,
  };

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
