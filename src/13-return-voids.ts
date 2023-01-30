(() => {
  /* TS can also infer the type of value a function would return */
  const calcTotal = (...prices: number[]) => {
    const total = prices.reduce((acum, current) => acum + current);
    console.log(total);
    return total;
  }

  console.log(calcTotal(1,2,3,4,5));

  /* in order to explicitly tell a function which type it should return, we can add a type after the closing parenthesis: */
  const calcTotal2 = (...prices: number[]): number => {
    const total = prices.reduce((acum, current) => acum - current);
    return total;
  }

  console.log(calcTotal2(1,2,3,4,5));

  /* for a function that doesn't return a value, we use type: void with them: */

  function printTotal(...prices: number[]): void {
    const total = calcTotal(...prices);
    console.log(`Your total is ${total}`);
  }

  printTotal(2,3,5,56,34);
})();
