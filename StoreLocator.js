
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function askQuestion(question) {
	let answer;
	return new Promise((resolve, reject) => {
		rl.question(question, (ans) => {
			resolve(ans);
		})
	});
}

async function Program() {
	console.log("Hello, Welcome to Liz's Storefinder!");
	while (true) {
		console.log("[1] Sydney");
		console.log("[2] Melbourne");
		console.log("[3] Perth");
		console.log("[4] None of the Above");
		let userInput = await askQuestion("Please select your location from the options listed above: ");
		if (userInput == "1") {
			console.log("You have selected our Sydney Store, Please visit us at the address below:");
			let sydneyLocation = {
				Building: "Blacktown Mall",
				Shop: 3,
				Manager: "Kelsi"
			};
			console.log(sydneyLocation);
		} else if (userInput == "2") {
			console.log("You have selected our Melbourne Store, Please visit us at the address below:");
			let melbourneLocation = {
				Building: "Chadstone Mall",
				shop: 442,
				Manager: "Veronica"
			};
			console.log(melbourneLocation);
		} else if (userInput == "3") {
			console.log("You have selected our Perth Store, Please visit us at the address below:");
			let perthLocation = {
				Building: "Wahmoy Mall",
				shop: 62,
				Manager: "Monica"
			};
			console.log(perthLocation);
		} else if (userInput == "4") {
			console.log("Unfortunately, we are not in your location yet, please shop online!");
			break;
		} else {
			console.log("Error: please enter a number 1 - 4");
		}
		console.log("");
	}
	console.log("Thank you for you for visiting Liz's site!");
}


Program().then(() => {
	process.exit(0);
});
