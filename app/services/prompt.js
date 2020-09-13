import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Promise as EmberPromise } from 'rsvp';

export default class PromptService extends Service {
  @tracked displayPrompt = false;
  @tracked currentPrompt;

  /**
   * Renders a prompt and returns a promise, expecting a `accept` or `cancel`
   * to be called, allowing to await for a `resolved` or `rejected` answer.
   *
   * @param {object}
   * @param {*} component
   * @param {*} data
   */
  show({ title, body }, component, data) {
    let accept, cancel;

    let promise = new EmberPromise(resolve => {
      accept = (response) => {
        this.unregisterPrompt(prompt);
        resolve({ accepted: true, response });
      };

      cancel = (response) => {
        this.unregisterPrompt(prompt);
        resolve({ accepted: false, response });
      };
    });

    this.registerPrompt({ component, data, title, body, accept, cancel });

    return promise;
  }

  registerPrompt(prompt) {
    this.displayPrompt = true;
    this.currentPrompt = prompt;
  }

  unregisterPrompt(prompt) {
    this.displayPrompt = false;
    this.currentPrompt = null;
  }
}
