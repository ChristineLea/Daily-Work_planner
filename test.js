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

$(function () {
	if (localStorage.getItem("nine")) {
		$hour9
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("nine")));
	} else if (localStorage.getItem("ten")) {
		$hour10
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("ten")));
	} else if (localStorage.getItem("eleven")) {
		$hour11
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("eleven")));
	} else if (localStorage.getItem("twelve")) {
		$hour12
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("twelve")));
	} else if (localStorage.getItem("one")) {
		$hour1
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("one")));
	} else if (localStorage.getItem("two")) {
		$hour2
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("two")));
	} else if (localStorage.getItem("three")) {
		$hour3
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("three")));
	} else if (localStorage.getItem("four")) {
		$hour4
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("four")));
	} else {
		$hour5
			.children()
			.eq(1)
			.text(JSON.parse(localStorage.getItem("five")));
	}

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

	// Display TODAY
	let currentDay = dayjs();
	$("#currentDay").text(currentDay.format("dddd, D MMMM"));
});
// $(document).ready(function () {

// });

$saveBtnEl.on("click", function (event) {
	let $btn = $(event.currentTarget).parent();
	// let $descr = $(event.currentTarget).parent().children("textarea").text();
	let $id = $btn.attr("id");
	let $descr = $saveBtnEl.prev().text();
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
