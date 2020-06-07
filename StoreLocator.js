
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
		  switch (userInput){
			 case "1" :
			console.log("You have selected our Sydney Store. Please visit us as the addres below:")

			let sydneyLocation = {
				address : "14 Wahroonga Rd, North Sydney",
				manager : "Kelse Mann",
				phone: "042456499"
			};
			
			console.log (sydneyLocation);
		
			break;
		

			case "2" : 

			console.log("You have selected our Melbourne Store. Please visit us as the address below:");
		
			let melbourneLocation = {
				Address: "223 Chadwick Road",
				Manager: "Veronica",
				phone: "045993405"
			};

			console.log(melbourneLocation)
	
			break;

		  case "3": 
	
			console.log("You have selected our Perth Store. Please visit us at the address below:")
			
			 let perthLocation = {
			   Address : "345 Wahmoy Lane",
				Manager: "Monica Ndlovu",
				phone : "039400024"
			};
              console.log(perthLocation);
			break;
			
		 case "4" : 
			console.log("Unfortunately, we are not in your location yet, please express your interest in having one of our stores in your city");
			break;

		case "5":

		console.log("Thank you for you for visiting Liz's site!")

		break;

		 default: 
			console.log("Error: please enter a number 1 - 4");


		}

	}
}

Program().then(() => {
	process.exit(0);
});
