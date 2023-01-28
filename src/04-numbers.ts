(() => {
  let productPrice = 100;
  productPrice = 12;
  productPrice = 12;
  console.log(productPrice);

  // console.log(productPrice += '1');

  let somethingElse: number;
  /*  if left untyped, TS won't give any errors as it thinks that somethinElse has an 'undefined' value.
  In constrast, when given some type to it, TS will give an alert that we are trying to use an unassigned variable
  */
  console.log(somethingElse);

  if(somethingElse < 10) {
    console.log('you got it');

  }

  /* even if discount hasn't been given a type explicitly, as soon as it detects that it's value is going to be parsed, it implicitly adds a number type to the variable  */
  let discount = parseInt('10');
  console.log(typeof discount, discount);

  /* hexadecimals, binars and octals are also number types, just like integers and floats */
  let hex = 0xff;
  console.log(hex);
  let binary = 0b1001010100;
  console.log(binary);
  let octal = 0o7174;
  console.log(octal);
})();
