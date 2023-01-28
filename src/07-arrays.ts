(() => {
  /* if I declare an empty array, TS asigns it as an array that can take any type of
  data. This means that I can push anything I want into it */
  const numbers = [];
  numbers.push('as');
  numbers.push(3);
  numbers.push(true);
  console.log(numbers);

  /* in contrast, if for example I create an array that has numbers inside, TS would assing it
  as an array of number types inside of it, so whenever I push data into it,
  they can only be numbers */
  const prices = [1,2,3,4,5,6];
  prices.push('');

  /* it's valid to create an array with different types of primitives and, even so, TS can
  automatically assign all the types so the array can accept either type of data that TS
  assigned to it */
  const data = [1, 'sup', false];
  data.push(2);
  data.push('bro');
  data.push(true);
  console.log(data);

  /* we can also explicitly add types to arrays in TS in two ways: */
  const mixed: (number | string | boolean)[] = [];
  mixed.push(3);
  mixed.push('hi');
  mixed.push(true);
  console.log(mixed);
  /* using tuples. They can only accept the length of data assigned to the tupple in the exact
  order of the types it has */
  let mixed2: [number, string, boolean];
  mixed2 = [4, 'bruh', false];
  mixed2 = [];
  mixed2 = [4, 'bruh', 'lol'];
  // if we want an array that only accepts objects, that's another story for another class

})();
