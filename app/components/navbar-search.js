import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LayoutNavbarSearchComponent extends Component {
  @service store;

  @tracked query;
  @tracked results;
  @tracked loading = true;
  @tracked showResults = false;

  get filteredList () {
    if (this.query) {
      // One of the best regular expression website: http://www.regexr.com/
      // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
      const regexString = '(' + this.query.split(' ').join(')+.*(') + ')+.*';
      // i: case insensitive, g: global
      const regex = new RegExp(regexString, 'ig');

      return this.results.filter(item => item.name.match(regex));
    }
  }

  @action
  async fetchResults () {
    if (!this.results) {
      this.results = await this.store.findAll('project');
    }

    this.loading = false;
  }

  @action
  checkShowResults (event) {
    this.query = event.target.value;

    if (this.query && this.filteredList.length) {
      this.showResults = true;
    }
  }
}
