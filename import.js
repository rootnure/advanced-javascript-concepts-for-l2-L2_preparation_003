// default exported resource can be import using any name
// named exported resource can only be imported using the same name and need to use destructuring
import generateMsg, { greetDeveloper } from "./export.js";

console.log(generateMsg('Sabab'));
console.log(greetDeveloper('Sohel'));