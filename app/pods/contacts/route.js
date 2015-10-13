import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ActivatedRouteMixin from '../../mixins/activated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, ActivatedRouteMixin, {
});
