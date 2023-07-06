function setLocalStorage(id, text) {
	if (id === "9") {
		localStorage.setItem("nine", JSON.stringify(text));
	} else if (id === "10") {
		localStorage.setItem("ten", JSON.stringify(text));
	} else if (id === "11") {
		localStorage.setItem("eleven", JSON.stringify(text));
	} else if (id === "12") {
		localStorage.setItem("twelve", JSON.stringify(text));
	} else if (id === "1") {
		localStorage.setItem("one", JSON.stringify(text));
	} else if (id === "2") {
		localStorage.setItem("two", JSON.stringify(text));
	} else if (id === "3") {
		localStorage.setItem("three", JSON.stringify(text));
	} else if (id === "4") {
		localStorage.setItem("four", JSON.stringify(text));
	} else {
		localStorage.setItem("five", JSON.stringify(text));
	}
};

$(".btn").on("click", function (event) {
	let $btnEvent = $(event.target);
	let $btnId = $btnEvent.prev().attr("id");
	let $descr = $btnEvent.prev().val();
	console.log($btnId);
	console.log($descr);

	setLocalStorage($btnId, $descr);
});
