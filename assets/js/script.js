let currentDay = dayjs();
$("#currentDay").text(currentDay.format("dddd, D MMMM"));

function updateHour() {
	let currentHour = dayjs().format("h");
	console.log(currentHour);

	let $hour9 = $("#hour-9");
	console.log($hour9);
	let checkAtt = $hour9.attr("class");
	console.log(checkAtt);
	console.log(typeof checkAtt);
	if (checkAtt.includes("future")) {
		$hour9.toggleClass("future", false).toggleClass("past", true);
		console.log($hour9.attr("class"));
	}
}

updateHour();
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
}

$(".saveBtn").on("click", function (event) {
	let $btnEvent = $(event.target);
	let $btnId = $btnEvent.prev().attr("id");
	let $descr = $btnEvent.prev().val();
	console.log($btnId);
	console.log($descr);

	setLocalStorage($btnId, $descr);
});
