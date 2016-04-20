export const fetch = () =>
  window.fetch('https://still-scrubland-9880.herokuapp.com/bill.json')
    .then(response => response.json());
