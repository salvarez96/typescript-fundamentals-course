import { login, pushLoginData, loginArr } from "./product.service";

const data1 = {
  email: 'someone.else@something.else.lmao',
  password: 'someone again',
  age: 69
}

const data2 = {
  email: 'someone@something.lol',
  password: 'someone'
}

console.log(loginArr);

login(data1);
login(data2);

pushLoginData(data1);
pushLoginData(data2);
