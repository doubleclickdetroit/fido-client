import Ember from 'ember';
import ActivatedRouteMixin from '../../mixins/activated-route-mixin';

export default Ember.Route.extend(ActivatedRouteMixin, {
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

  renderTemplate(controller, model) {
    let isAuthenticated = this.get( 'session.isAuthenticated' );

    if ( isAuthenticated ) {
      this.render('dashboard', {
        model     : model,
        controller: 'dashboard'
      });
    }
    else {
      this.render( 'marketing' );
    }
  }
});
