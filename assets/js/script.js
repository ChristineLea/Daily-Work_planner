// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// parentEl of the save button

// let $hour11El = $("#hour-11");
// let $hour12El = $("#hour-12");
// let $hour1El = $("#hour-1");
// let $hour2El = $("#hour-2");
// let $hour3El = $("#hour-3");
// let $hour4El = $("#hour-4");
// let $hour5El = $("#hour-5");
let $saveBtnEl = $(".saveBtn");

$(function () {
	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?

	// .time-block --- if

	$saveBtnEl.on("click", function (event) {
		let $btn = $(event.currentTarget).parent();
		// let $descr = $(event.currentTarget).parent().children("textarea").text();
		let $id = $btn.attr("id");
		let $descr = $btn.children("textarea").text();
		console.log($descr);
		console.log($id);

		if ($id === "hour-9") {
			localStorage.setItem("nine", JSON.stringify($descr));
		} else if ($id === "hour-10") {
			localStorage.setItem("ten", JSON.stringify($descr));
		} else if ($id === "hour-11") {
			localStorage.setItem("eleven", JSON.stringify($descr));
		} else if ($id === "hour-12") {
			localStorage.setItem("twelve", JSON.stringify($descr));
		} else if ($id === "hour-1") {
			localStorage.setItem("one", JSON.stringify($descr));
		} else if ($id === "hour-2") {
			localStorage.setItem("two", JSON.stringify($descr));
		} else if ($id === "hour-3") {
			localStorage.setItem("three", JSON.stringify($descr));
		} else if ($id === "hour-4") {
			localStorage.setItem("four", JSON.stringify($descr));
		} else {
			localStorage.setItem("five", JSON.stringify($descr));
		}
	});

	

	// TODO: Add code to apply the past, present, or future class to each time
	// block by comparing the id to the current hour. HINTS: How can the id
	// attribute of each time-block be used to conditionally add or remove the
	// past, present, and future classes? How can Day.js be used to get the
	// current hour in 24-hour time?
	//
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?

	// Display TODAY
	let currentDay = dayjs();
	$("#currentDay").text(currentDay.format("dddd, D MMMM"));
});
// object & key timeId = timeId = timeId.value (timeId === id hour-9 etc)
// key eventDetails = eventDetails.value (the value of this is the corresponding .description class)
// access it via dom traversal?? $("#hour-9").children("textarea")???
