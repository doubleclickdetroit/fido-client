import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let isAuthenticated = this.get( 'session.isAuthenticated' );

    if ( isAuthenticated ) {
      let model = this.getDashboardResources();
      return Ember.RSVP.hash( model );
    }

    return {};
  },

  getDashboardResources() {
    let contacts  = this.store.peekAll( 'contact' );
    let occasions = this.store.peekAll( 'occasion' );

    if ( !contacts.get('length') ) {
      contacts = this.store.findAll( 'contact' );
    }
    if ( !occasions.get('length') ) {
      occasions = this.store.findAll( 'occasion' );
    }

    return {
      contacts : contacts,
      occasions: occasions
    };
  },

  renderTemplate() {
    let isAuthenticated = this.get( 'session.isAuthenticated' );

    if ( isAuthenticated ) {
      this.render('dashboard', {
        controller: 'dashboard'
      });
    }
    else {
      this.render( 'marketing' );
    }
  }
});
