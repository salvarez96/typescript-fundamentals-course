/* usually when a file has extension .models.ts, it is used to contain and export alias types,
not only this helps in keeping our code cleaner, but also avoids the use of a IIFE*/
export type Data = {
  email: string,
  password: string,
  age?: number
}
