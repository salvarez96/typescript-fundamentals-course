(() => {
  let isEnabled = true;
  let isNew: boolean;

  const random = Math.random();
  console.log(random);
  /* eventhough falsy values can be considered false, because they're not booleans, they can't be assigned to
  a variable whose type is boolean */
  isNew = random >= 0.5 ? true : NaN;
  console.log(isNew);
})();
