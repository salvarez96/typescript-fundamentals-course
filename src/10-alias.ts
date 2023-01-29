(() => {
  /* TS gives us the option to create our own types, using something called 'alias types'. For
  this, we use the TS reserved word 'type' and use pascal case to name our new alias type */
  type UserId = string | number | boolean;
  let userIdVar: UserId;

  function greeting(userId: UserId) {
    if(typeof userId === 'string') {
      const text = userId.concat(' string');
      console.log(text);
    }
  }

  /* there's also something called literal types, where we can be very strict with the data a
  variable is assigned with: (literal types are case sensitive) */
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  /* applying alias with literal types: */
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize2: Sizes;
  shirtSize2 = 'S';
  shirtSize2 = 'M';
  shirtSize2 = 'L';
  shirtSize2 = 'XL';
})();
