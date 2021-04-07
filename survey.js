const readline = require('readline');
const inspect = require('util').inspect;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let questions = [
// "What's your name? Nicknames are also acceptable :)",
// "What's an activity you like doing?",
// "What do you listen to while doing that?",
// "Which meal is your favourite (eg: dinner, brunch, etc.)",
// "What's your favourite thing to eat for that meal?",
// "Which sport is your absolute favourite?",
// "What is your superpower? In a few words, tell us what you are amazing at!"
// ]

let profile = {}
rl.question("What's your name? Nicknames are also acceptable :)", answer => {
	profile.name = answer;
  rl.question("What's an activity you like doing?", answer => {
		profile.activity = answer;
		rl.question('What do you listen to while doing that?', answer => {
			profile.listening = answer;
			rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', answer => {
				profile.meal = answer;
				rl.question("What's your favourite thing to eat for that meal?", answer => {
					profile.favourite = answer;
					rl.question('Which sport is your absolute favourite?', answer => {
						profile.sport = answer;
						rl.question('What is your superpower? In a few words, tell us what you are amazing at!', answer => {
							profile.superpower = answer;
							console.log(`Thank you for your valuable feedback, this is your profile: ${inspect(profile)}`);
							rl.close()
						});
					});
				});
			});
		});
  });
});
	

