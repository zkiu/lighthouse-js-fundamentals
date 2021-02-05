//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
order("Lobster", "Wild Rice", "Wine");

// WRITE YOUR CODE BELOW
function inMenu(str, array = generateMenu()) {
	if (!str) return false;

	return array.some((item) => item.name.toUpperCase() === str.toUpperCase());
}

/*
Order Function Here:
The first function will be the 'order' function, which should take in 3 parameters, the main, side, and drink. If these 3 arguments are provided by a user, then the order function will call the next function, the cook function, with the 3 items as arguments. If less than 3 arguments are provided, then the function should display an error and ask the user to order again.
*/
function order(item1, item2, item3) {
	if (inMenu(item1) && inMenu(item2) && inMenu(item3)) {
		cook(item1, item2, item3);
	} else {
		console.log("There is an error with the order");
	}
}

// Cook Function Here:
/*
The second function will be the 'cook' function, which again will take in the 3 meal parameters. This function will need to look through the restaurant's menu and determine the total time it will take to prepare the 3 items that were ordered. Once the total time has been determined, the function should tell the user how much time it will take to prepare the meal, and then wait that amount of time in seconds. After that, the 'serve' function will be called with the 3 meal items as arguments.
*/
function getItemData(str, property, array = generateMenu()) {
	for (const item of array) {
		if (item.name === str) return item[property];
	}
}

function cook(item1, item2, item3) {
	let cookingTime = 0;

	cookingTime =
		getItemData(item1, "time") +
		getItemData(item2, "time") +
		getItemData(item3, "time");
	console.log("Your order will take", cookingTime, "seconds");

	setTimeout(() => serve(item1, item2, item3), cookingTime * 1000);
}

// Serve Function Here:
/*
The final 'serve' function will need to take in the 3 meal parameters, and loop through the menu to find out the total price of all 3 menu items. The function should log that the meal is ready to serve, and also inform the user what the price of the meal will be.
*/
function serve(item1, item2, item3) {
	console.log("The meal is ready to serve.");

	let price =
		getItemData(item1, "price") +
		getItemData(item2, "price") +
		getItemData(item3, "price");
	console.log("The price of the meal is", `$${price}`);
}

// function that returns a menu array, no need to modify this function
function generateMenu() {
	return [
		{
			name: "Steak",
			time: 5,
			price: 40,
		},
		{
			name: "Burger",
			time: 4,
			price: 15,
		},
		{
			name: "Shawarma",
			time: 4,
			price: 20,
		},
		{
			name: "Pizza",
			time: 3,
			price: 10,
		},
		{
			name: "Sushi",
			time: 3,
			price: 15,
		},
		{
			name: "Lobster",
			time: 5,
			price: 50,
		},
		{
			name: "Carpaccio",
			time: 5,
			price: 25,
		},
		{
			name: "Chicken",
			time: 4,
			price: 10,
		},
		{
			name: "Wild Rice",
			time: 2,
			price: 5,
		},
		{
			name: "Fries",
			time: 1,
			price: 5,
		},
		{
			name: "Baked Potato",
			time: 1,
			price: 5,
		},
		{
			name: "Salad",
			time: 1,
			price: 5,
		},
		{
			name: "Coffee",
			time: 1,
			price: 0,
		},
		{
			name: "Tea",
			time: 1,
			price: 0,
		},
		{
			name: "Pop",
			time: 1,
			price: 0,
		},
		{
			name: "Beer",
			time: 1,
			price: 5,
		},
		{
			name: "Wine",
			time: 1,
			price: 10,
		},
	];
}
