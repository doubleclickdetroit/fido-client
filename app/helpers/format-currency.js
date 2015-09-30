import Ember from 'ember';

export function formatCurrency(params) {
  let cents = params[0] || 0;
  let price = ( cents/100 ).toFixed( 2 )
  return `$${price}`;
}

export default Ember.Helper.helper(formatCurrency);
