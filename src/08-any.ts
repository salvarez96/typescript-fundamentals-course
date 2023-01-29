(() => {
  /* a variable whose type is any, can receive any type of data, just like working with JS
  vanilla. Rule of thumb is to avoid any whenever possible. The only reason one would use it,
  is when migrating code from vanilla JS to TS where sometimes data types are not very clear,
  or when learning TS and still don't know what type to use in a certain scenario */
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = '';
  myDynamicVar = null;
  myDynamicVar = undefined;
  myDynamicVar = {};

  /* it is possible to convert variable types in TS. This is known as casting, and there's two
  ways to do it: */
  myDynamicVar = 'Hola';
  // case 1:
  const rta = (myDynamicVar as string);
  console.log(rta);
  // case 2:
  myDynamicVar = 10;
  const rta2 = (<number>myDynamicVar);
  console.log(rta2);
  /* this is very useful because now that TS knows what type the variable is, it can show us the
  correct methods to use with that type of data, as well as the other advantages that using types
  gives us when programming */
})();
