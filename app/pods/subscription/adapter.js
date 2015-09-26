import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  pathForType: function(modelName) {
    return modelName;
  }
});
