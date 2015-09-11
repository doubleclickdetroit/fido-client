export function initialize(container, application) {
  application.inject( 'component:wizard-indicator', 'applicationController', 'controller:application' );
}

export default {
  name: 'wizard-indicator',
  initialize: initialize
};
