/* this library makes working with dates much easier than using the standard JS ways.
Also, this library is TS friendly */
import { subDays, format } from 'date-fns';

// YYYY, MM, DD
const date = new Date(1996, 1, 16); //in JS, jan starts at 0, so dec is actually 11

const rta = subDays(date, 30);
const str = format(rta, 'E/do/MMM/yy');

console.log(str);
