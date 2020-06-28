import { Factory } from 'ember-cli-mirage';
import { name } from 'faker'

export default Factory.extend({
  firstName: () => name.firstName(),
  lastName: () => name.lastName(),
});
