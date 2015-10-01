import ENV from 'fido/config/environment';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: ENV.API_URL
});
