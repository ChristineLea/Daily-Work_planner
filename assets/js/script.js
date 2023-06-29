// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// parentEl of the save button
let $hour9 = $("#hour-9");
let $hour10 = $("#hour-10");
let $hour11 = $("#hour-11");
let $hour12 = $("#hour-12");
let $hour1 = $("#hour-1");
let $hour2 = $("#hour-2");
let $hour3 = $("#hour-3");
let $hour4 = $("#hour-4");
let $hour5 = $("#hour-5");
let $saveBtnEl = $(".saveBtn");

let $text9 = $hour9.children().eq(1).text();
let $text10 = $hour10.children().eq(1).text();
let $text11 = $hour11.children().eq(1).text();
let $text12 = $hour12.children().eq(1).text();
let $text1 = $hour1.children().eq(1).text();
let $text2 = $hour2.children().eq(1).text();
let $text3 = $hour3.children().eq(1).text();
let $text4 = $hour4.children().eq(1).text();
let $text5 = $hour5.children().eq(1).text();

$(function () {
	$saveBtnEl.on("click", function (event) {
		let $btn = $(event.currentTarget).parent();
		// let $descr = $(event.currentTarget).parent().children("textarea").text();
		let $id = $btn.attr("id");
		let $descr = $btn.children("textarea").val();
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

	let currentHour = dayjs().format("h");
	if (currentHour === 9) {
		// toggleClass(name, false = remove, true = add)
		// all start on future
		$hour9
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else if (currentHour === 10) {
		$hour9.toggleClass("past", true).toggleClass("present", false);
		$hour10
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else if (currentHour === 11) {
		$hour10.toggleClass("past", true).toggleClass("present", false);
		$hour11
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else if (currentHour === 12) {
		$hour11.toggleClass("past", true).toggleClass("present", false);
		$hour12
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else if (currentHour === 1) {
		$hour12.toggleClass("past", true).toggleClass("present", false);
		$hour1
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else if (currentHour === 2) {
		$hour1.toggleClass("past", true).toggleClass("present", false);
		$hour2
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else if (currentHour === 3) {
		$hour2.toggleClass("past", true).toggleClass("present", false);
		$hour3
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else if (currentHour === 4) {
		$hour3.toggleClass("past", true).toggleClass("present", false);
		$hour4
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else if (currentHour === 5) {
		$hour4.toggleClass("past", true).toggleClass("present", false);
		$hour5
			.toggleClass("present", true)
			.toggleClass("past", "future", false);
	} else {
		$hour4.toggleClass("present", true).toggleClass("past", false);
		$hour5.toggleClass("present", true).toggleClass("past", false);
	}
	
	
	//
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?

	// Display TODAY
	let currentDay = dayjs();
	$("#currentDay").text(currentDay.format("dddd, D MMMM"));
});
