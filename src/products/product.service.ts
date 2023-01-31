import { Data } from "./product.model";

/* destructuring also works with object types: */
export const login = ({email, password, age}: Data) => {
  console.log(email);
  console.log(password);
  console.log(age ?? 'no age specified');
}

export const loginArr: Data[] = [];

export const pushLoginData = (data: Data) => {
  loginArr.push(data);
  console.log(loginArr);
}
