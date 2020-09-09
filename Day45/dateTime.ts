import {dayOfYear,currentDayOfYear} from "https://deno.land/std@0.68.0/datetime/mod.ts";

console.log(dayOfYear(new Date('2020-04-03')));
console.log(currentDayOfYear());

