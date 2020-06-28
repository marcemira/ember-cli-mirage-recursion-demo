import { Factory } from 'ember-cli-mirage';
import { lorem } from 'faker';

export default Factory.extend({
  name: () => lorem.words(2),
});
