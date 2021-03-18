const myInformation = require("./information.js");

let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `I'm ${myInformation.name} from ${myInformation.campus} !`,
	e : "oO",
	T : "U "
}));



