import Ember from 'ember';

export default Ember.Mixin.create({
  redirect(model, transition) {
    let isAuthenticated = this.get( 'session.isAuthenticated' );
    let isActivated     = this.get( 'session.isActivated' );

    if ( isAuthenticated && !isActivated ) {
      this.transitionTo( 'signup' );
    }
    else {
      this._super.apply( this, arguments );
    }
  }
});
