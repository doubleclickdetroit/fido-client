import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let invoices = this.store.peekAll( 'invoice' );
    if ( !invoices.get('length') ) {
      return this.store.findAll( 'invoice' );
    }

    return invoices
  }
});
