exports.config = {

  api: {
    url: {
      dev    : 'http://localhost:3000',
      staging: 'https://gogetitfido-api-staging.herokuapp.com/',
      prod   : 'https://gogetitfido-api-staging.herokuapp.com/'
    }
  },

  stripe: {
    url: {
      dev    : 'https://js.stripe.com/v2/',
      staging: 'https://js.stripe.com/v2/',
      prod   : 'https://js.stripe.com/v2/'
    },

    publishable_key: {
      dev    : 'pk_test_VRxLdva8gUzjdlPnzWDbeEjp',
      staging: 'pk_test_VRxLdva8gUzjdlPnzWDbeEjp',
      prod   : 'pk_live_unlNGHofNKBjwQIPX7XGqIha'
    }
  }

};
