import ActiveModelAdapter from 'active-model-adapter';
import DS from 'ember-data';

export default ActiveModelAdapter.extend({
  host: 'http://localhost:3000'
});
