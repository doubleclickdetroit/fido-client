import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super();
    console.log( 'Component', this.get('collection') );
  },

  actions: {
    select() {
      let model = this.get( 'preset' );
      this.sendAction( 'onSelect', model );
    }
  }
});
