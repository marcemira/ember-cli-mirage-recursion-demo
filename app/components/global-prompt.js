import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default class GlobalPromptComponent extends Component {
  @service('prompt') promptService;

  @alias('promptService.currentPrompt') prompt;
}
