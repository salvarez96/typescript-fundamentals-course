(() => {
  /* union types lets us specify more than one type to a single variable. This is useful if we
  know a variable can take more than one type of data depending on what use it has. One advantage
  of this is that, whenenever we declare a variable with the correct type, the IDE helps us with
  the correct methods for that type of data */
  let userId: string | number;
  userId = 13;
  userId.toFixed();
  userId = '13';
  userId.length;

  /* depending on the type of value we pass as an argument in the greeting function, we can choose
  what to do with that value depending on its type, and when we pass a conditional the IDE would
  help us choose which methods are the correct ones depending on the type */
  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      const text = myText.concat(' string');
      console.log(text);
    } else {
      const number = myText.toFixed(2);
      console.log(number);
    }
  }

  greeting('sup');
  greeting(15.38659);
})();
