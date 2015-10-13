import Ember from 'ember';

export default Ember.Mixin.create({
  setupController(controller, model) {
    this._super.apply( this, arguments );

    let path   = this.get( 'routeName' );
    let signup = this.modelFor( 'signup' );
    let data   = signup.steps.filterBy( 'route', path ).get( 'firstObject' );

    controller.set( 'wizardStep', data );
  }
});
