(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product changed';

  let price: number;

  price = 24;
  /* because template literals will always be strings, I can pass any type of variable,
  function, object, etc inside of ${} */
  productTitle = `This product costs ${price} bucks`;
  console.log(productTitle);
})();
