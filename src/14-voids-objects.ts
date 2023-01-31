(() => {
  type data = {
    email: string,
    password: string,
    age?: number
  }

  const data1: data = {
    email: 'someone@something.lol',
    password: 'someone'
  }

  const data2: data = {
    email: 'someone.else@something.else.lmao',
    password: 'someone again',
    age: 69
  }

  const login = (data: data) => {
    const {email, password, age} = data;
    console.log(email);
    console.log(password);
    /* nullish coalesing is very useful when we want to manage an optional property from an object
    parameter in a function */
    console.log(age ?? 'no age specified');
  }

  login(data1);
  login(data2);
})();
