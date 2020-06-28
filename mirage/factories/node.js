import { Factory } from 'ember-cli-mirage';
import { commerce } from 'faker';

export default Factory.extend({
  name: () => commerce.department(),
});
