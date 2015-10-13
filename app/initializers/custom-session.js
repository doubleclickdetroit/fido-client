import Ember from 'ember';
import Session from "simple-auth/session";

export function initialize(/* container, application */) {
  Session.reopen({
    isActivated: Ember.computed.alias( 'secure.is_activated' ),

    accountIsActivated(isActivated) {
      let data = this.store.restore();
      Ember.merge( data.secure, { is_activated: isActivated } );
      this.set( 'secure.is_activated', isActivated );
      this.store.persist( data );
    }
  });
}

export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize: initialize
};
