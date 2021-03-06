import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { debug } from '@ember/debug';

export default class ApplicationController extends Controller {
  @service store;
  @service prompt;

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

  customOrder = {
    add: 1,
    duplicate: 2,
    rename: 3,
    remove: 4,
  };

  get darkTheme () {
    return {
      primaryColor: '#2c7be5',
      textColor: '#FFF',
      uiColor: '#152e4d',
      uiBackground: '#12263f',
      disabledTextColor: 'rgba(255,255,255, 0.5)',
      selectedBackground: 'rgba(44, 123, 229, 0.5)',
      selectedTextColor: '#FFF',
      hiddenBackground: '',
      hiddenTextColor: 'rgba(255,255,255, 0.5)',
    };
  }

  @action
  async createNode() {
    const prompt = await this.prompt.show({
      title: `Add new Node`
    }, 'prompt-name');

    if (prompt.accepted) {
      return this.store.createRecord('node', {
        name: prompt.response.name
      });
    }

    return false;
  }

  @action
  async confirmRemove(node) {
    const response = await this.prompt.show({
      body: `You are about to remove ${node.name}, do you want to continue?`
    });

    return response.accepted;
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
