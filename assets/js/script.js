let currentDay = dayjs();
$("#currentDay").text(currentDay.format("dddd, D MMMM"));

function checkHour() {
	let currentHour = dayjs().format("H");
	console.log(currentHour);

	// loop through <div> and access id value
	// let divEl = $("div");


	$("div").each(function (index, value) {
		value = this.id; // value of id
		console.log(value);

		let toggleEl = `div${index}`;

		console.log(toggleEl);
		if (value === currentHour) {
			// the index of the div ele at this value will toggle class
			// pass into function to check if it includes
			toggleClass(toggleEl, 'present');
		} else if (value < currentHour) {
			toggleClass(toggleEl, 'past');
		} else if (value > currentHour) {
			toggleClass(toggleEl, 'future');
		} else {
			console.log(currentHour);
		}
	});
	

}

	function toggleClass(ele, str) {
		// this function will check if the str value is a class included
		// in the current element & if not will toggle class to change
		if (str === "future" && ele.includes("past")) {
			ele.toggleClass("past", false).toggleClass("future", true);
		} else if (str === "future" && ele.includes("present")) {
			ele.toggleClass("present", false).toggleClass("future", true);
		} else if (str === "present" && ele.includes("future")) {
			ele.toggleClass("future", false).toggleClass("present", true);
		} else if (str === "present" && ele.includes("past")) {
			ele.toggleClass("past", false).toggleClass("present", true);
		} else if (str === "past" && ele.includes("present")) {
			ele.toggleClass("present", false).toggleClass("past", true);
		} else if (str === "past" && ele.includes("future")) {
			ele.toggleClass("future", false).toggleClass("past", true);
		} else {
			return;
		}
	}
// change present to past &
// if hour === hour // hour attr === present
// ele is the variable

// create a timer to check updatehour
checkHour();
function setLocalStorage(id, text) {
	if (id === "hour-9") {
		localStorage.setItem("nine", JSON.stringify(text));
	} else if (id === "hour-10") {
		localStorage.setItem("ten", JSON.stringify(text));
	} else if (id === "hour-11") {
		localStorage.setItem("eleven", JSON.stringify(text));
	} else if (id === "hour-12") {
		localStorage.setItem("twelve", JSON.stringify(text));
	} else if (id === "hour-13") {
		localStorage.setItem("one", JSON.stringify(text));
	} else if (id === "hour-14") {
		localStorage.setItem("two", JSON.stringify(text));
	} else if (id === "hour-15") {
		localStorage.setItem("three", JSON.stringify(text));
	} else if (id === "hour-16") {
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
