import Ember from 'ember';

export default Ember.Service.extend({
  steps: [
    Ember.Object.create({
      route: 'signup.membership',
      step: 'Membership',
      next: 'Payment',
      nextTransition: 'signup.payment',
      prevTransition: 'signup.index',
      showNext: true,
      showPrev: false
    }),

    Ember.Object.create({
      route: 'signup.payment',
      step: 'Payment',
      next: 'Overview',
      nextTransition: 'signup.overview',
      prevTransition: 'signup.membership',
      showNext: true,
      showPrev: true
    }),

    Ember.Object.create({
      route: 'signup.overview',
      step: 'Overview',
      next: '...',
      nextTransition: 'signup.overview',
      prevTransition: 'signup.payment',
      showNext: false,
      showPrev: true
    })
  ]
});
