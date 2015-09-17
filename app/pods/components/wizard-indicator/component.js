import Ember from 'ember';

export default Ember.Component.extend({
  currentPath: Ember.computed.alias( 'applicationController.currentPath' ),

  activeStep : Ember.computed('steps', 'currentPath', function() {
    let steps       = this.get( 'steps' );
    let currentPath = this.get( 'currentPath' );

    return steps.filterBy( 'route', currentPath ).get( 'firstObject' );
  }),

  nextButton    : Ember.computed.alias( 'activeStep.next' ),
  prevButton    : Ember.computed.alias( 'activeStep.prev' ),
  nextTransition: Ember.computed.alias( 'activeStep.nextTransition' ),
  showButtons   : Ember.computed.alias( 'activeStep.showButtons' ),
  prevTransition: Ember.computed.alias( 'activeStep.prevTransition' ),
  showNext      : Ember.computed.alias( 'activeStep.showNext' ),
  showPrev      : Ember.computed.alias( 'activeStep.showPrev' ),
  disableNext   : Ember.computed.alias( 'activeStep.disableNext' ),
  disablePrev   : Ember.computed.alias( 'activeStep.disablePrev' ),

  actions: {
    prev() {
      let route = this.get( 'prevTransition' );
      this.sendAction( 'onPrev', route );
    },

    next() {
      let route = this.get( 'nextTransition' );
      this.sendAction( 'onNext', route );
    }
  }

});
