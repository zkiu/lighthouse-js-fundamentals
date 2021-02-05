const usersURL = "https://reqres.in/api/users?page=2";

axios
	.get(usersURL)
	.then((response) => {
		let info = response.data;
		console.log(info);
		return info;
	})
	.then((info) => {
		document.querySelector(".res__page").innerHTML = info.page;
		document.querySelector(".res__total-pages").innerHTML = info.total_pages;

		const listEl = document.querySelector(".res-users");
		while (listEl.firstChild) listEl.removeChild(listEl.firstChild);

		info.data.forEach((userObj) => {
			listEl.append(createUserElNode(userObj));
		});

		const adEl = document.querySelector(".res__ad");
		adEl.innerHTML = JSON.stringify(info.support);
		// then format the adEl text...
	});

function createUserElNode(userObj) {
	const { id, email, first_name, last_name, avatar } = userObj;

	// -- creating elements

	const liEl = document.createElement("li");

	const imgEl = document.createElement("img");
	imgEl.classList.add("res-users__avatar");
	imgEl.src = avatar;

	const nameEl = document.createElement("span");
	nameEl.classList.add("res-users__name");
	nameEl.innerText = first_name + " " + last_name;

	const emailEl = document.createElement("span");
	emailEl.classList.add("res-users__email");
	emailEl.innerText = email;

	// -- appending elements
	// append created elements to the <li> before appending to the <ul>
	liEl.appendChild(imgEl);
	liEl.appendChild(nameEl);
	liEl.appendChild(emailEl);

	return liEl;
}
