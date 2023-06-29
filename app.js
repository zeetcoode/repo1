const fs = require("fs");
const { execSync } = require("child_process");

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 365; i++) {
	for (let j = 0; j < getRandomInt(1, 10); j++) {
		const d = `${i} days ago`;
		fs.appendFileSync("file.txt", d);
		execSync("git add .");
		execSync(`git commit --date="${d}" -m "commit"`);
	}
}

execSync("git push -u origin main");

// import os
// from random from randint

// for i in range(1, 365):

//     for j in (0, randint(1, 10)):
//         d = str(i) + 'days ago'
//         with open('file.txt', a) as file:
//                 file.write('d')
//         os.system('git add .')
//         os.system('git commit --date="' + d + '" -m "commit"')

// os.system('git push -u origin main')
