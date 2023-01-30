(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  /* functions in TS work the exact same way as in vanilla JS, but we add more security with
  the help of types in a function's parameters */
  function createProductToJSON(
    title: string,
    /* in TS, we can use the class Date to type a date format. This is the only time one of
    JS's classes should be used in TS types */
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  console.log(createProductToJSON('P1', new Date(), 12, 'XL'));

  /* but, what if a parameter of a function is optional? In that case, we can use optional
  chaining in that optional parameter so TS knows that it can be something or it may not exist */
  const createProductToJSON2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => ({
      title,
      createdAt,
      stock,
      size
    }
  );

  console.log(createProductToJSON2('P1', new Date(), 12));
})();
