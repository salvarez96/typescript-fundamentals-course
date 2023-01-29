(() => {

  /* if, for some reason, we want to create variables that are either null or undefined, TS
  won't inferred it's type for either null or undefined cases. For that, we need to explicitly
  assign either null or undefined to a variable: */
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  /* this is more useful whenever we have a variable where we receive, for example, a number
  but we have to assigned it as undefined right after we declare it: */
  let myNumber: number | undefined = undefined;
  let myString: string | null = null;

  myNumber = 12;
  myString = 'something';

  /* if we spect to receive either a truthy value or a null | undefined, we can use optional
  chaining and nullish coallesing to verify and validate an output, respectively */
  function hi(name: string | null) {
    let hello = 'sup ';
    hello += name?.toLowerCase() ?? 'nobody';

    console.log(hello);
  }

  hi('DUDE');
  hi(null);
})();
