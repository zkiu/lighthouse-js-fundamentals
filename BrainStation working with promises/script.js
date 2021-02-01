"use strict";

/* === PREMADE FUNCTIONS - Don't have to touch these! === */

// Decides how long it takes for an elf to complete current task
const randomizeTimeout = () => {
	return 500;
};

/*
  Elf effort functions, decides whether an elf will succeed at a current task
*/
const getEagerElfSuccess = () => {
	return true;
};

const getLazyElfSuccess = () => {
	return false;
};

const getChaosElfSuccess = () => {
	let weightedSuccess = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1];
	return weightedSuccess[Math.floor(Math.random() * weightedSuccess.length)];
};
/*
  End: Elf effort functions
*/

/*
  Elf task functions
*/
const getMaterials = (elfName, successChanceFn) => {
	return new Promise((resolve, reject) => {
		console.log(`${elfName}: getting materials...🚚`);
		setTimeout(() => {
			if (successChanceFn()) {
				console.log(`${elfName}: got materials! 🧰`);
				resolve("material task done");
			} else {
				console.log(`${elfName}: failed to get materials.`);
				reject(new Error("materials failed."));
			}
		}, randomizeTimeout());
	});
};

const buildToy = (elfName, successChanceFn) => {
	return new Promise((resolve, reject) => {
		console.log(`${elfName}: building the perfect toy...🔧`);
		setTimeout(() => {
			if (successChanceFn()) {
				console.log(`${elfName}: built toy! 🧸`);
				resolve("toy built");
			} else {
				console.log(`${elfName}: failed to build toy.`);
				reject(new Error("building failed."));
			}
		}, randomizeTimeout());
	});
};

const qualityControl = (elfName, successChanceFn) => {
	return new Promise((resolve, reject) => {
		console.log(
			`${elfName}: checking for sharp edges, flammability and play-testing for fun factor...🔍`
		);
		setTimeout(() => {
			if (successChanceFn()) {
				console.log(`${elfName}: all checked! 💯`);
				resolve();
			} else {
				console.log(`${elfName}: toy does not pass fun standards.`);
				reject(new Error("quality control failed."));
			}
		}, randomizeTimeout());
	});
};

const personalizeToy = (elfName, successChanceFn) => {
	return new Promise((resolve, reject) => {
		console.log(`${elfName}: packaging and writing message...📝`);
		setTimeout(() => {
			if (successChanceFn()) {
				console.log(`${elfName}: all packaged & ready! 🎁`);
				resolve(` ${elfName} has done all the work`);
			} else {
				console.log(`${elfName}: failed to package gift properly.`);
				reject(new Error("personalizing failed."));
			}
		}, randomizeTimeout());
	});
};
/*
  End: Elf task functions
*/

/* === PREMADE FUNCTIONS - Don't have to touch these functions above ^ === */

/* === ELF FUNCTIONS: Go through all the TODO's below === */
function elfOne() {
	let name = "Elf One";
	return new Promise((resolve, reject) => {
		// TODO: Fix and complete the Elf functionality below, in this Promise
		getMaterials(name, getEagerElfSuccess)
			.then(() => {
				/* TODO: Ready for a next task if the previous one succeeded */
				return buildToy(name, getEagerElfSuccess);
			})
			.then(() => {
				/* TODO: Ready for a next task if the previous one succeeded */
				return qualityControl(name, getEagerElfSuccess);
			})
			.then(() => {
				/* TODO: When all tasks are completed use the resolve function to sign off on the toy */
				return personalizeToy(name, getEagerElfSuccess);
			})
			.then(() => {
				resolve();
			})
			.catch((err) => {
				console.error(`${name}: stopped making gift.`);
				reject();
			});
	});
}

function elfTwo() {
	let name = "Elf Two";
	return new Promise((resolve, reject) => {
		// TODO: Fix and complete the Elf functionality below, in this Promise
		getMaterials(name, getEagerElfSuccess)
			.then(() => {
				/* TODO: Ready for a next task if the previous one succeeded */
				return buildToy(name, getEagerElfSuccess);
			})
			.then(() => {
				/* TODO: Ready for a next task if the previous one succeeded */
				return qualityControl(name, getEagerElfSuccess);
			})
			.then(() => {
				/* TODO: When all tasks are completed use the resolve function to sign off on the toy */
				return personalizeToy(name, getEagerElfSuccess);
			})
			.then(() => {
				resolve();
			})
			.catch((err) => {
				console.error(`${name}: stopped making gift.`);
				reject();
			});
	});
}

function elfThree() {
	let name = "Elf Three";
	return new Promise((resolve, reject) => {
		// TODO: Fix and complete the Elf functionality below, in this Promise
		getMaterials(name, getEagerElfSuccess)
			.then(() => {
				/* TODO: Ready for a next task if the previous one succeeded */
				buildToy(name, getEagerElfSuccess);
			})
			.then(() => {
				/* TODO: Ready for a next task if the previous one succeeded */
				qualityControl(name, getEagerElfSuccess);
			})
			.then(() => {
				/* TODO: When all tasks are completed use the resolve function to sign off on the toy */
				personalizeToy(name, getEagerElfSuccess);
			})
			.then(() => {
				resolve();
			})
			.catch(null, (err) => {
				console.error(`${name}: stopped making gift.`);
				reject(error);
			});
	});
}

/* === SANTA's CONTROL PANEL === */
// Promise.all([elfOne(), elfTwo(), elfThree()])
// 	.then(() => {
// 		console.log("🎄🎄🎄 Ready for Christmas!!! 🎄🎄🎄");
// 	})
// 	.catch(() => {
// 		console.log("==== Not ready for Christmas yet. 😞 ====");
// 	});

/*
  Diving Deeper

  Re-write this functionality so each elf is only responsible for a single task using the .then chaining syntax
*/
function elfOneOffSeason() {
	return getMaterials("Elf One", getEagerElfSuccess);
}
function elfTwoOffSeason() {
	return buildToy("Elf Two", getEagerElfSuccess);
}
function elfTwoOffSeasonAgain() {
	return qualityControl("Elf Two", getEagerElfSuccess);
}
function elfThreeOffSeason() {
	return personalizeToy("Elf Three", getEagerElfSuccess);
}

elfOneOffSeason()
	.then(() => elfTwoOffSeason())
	.then(() => elfTwoOffSeasonAgain())
	.then(() => elfThreeOffSeason())
	.then(() => {
		console.log("🎄🎄🎄 Ready for Christmas!!! 🎄🎄🎄");
	})
	.catch(() => {
		console.log("==== Not ready for Christmas yet. 😞 ====");
	});
