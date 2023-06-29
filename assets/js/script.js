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
	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?

	

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

	// function linkTime(hour) {
	// 	$timeBlock = $("body").children().eq(1).children(1).eq(i).attr("id");
	// 	let timeBlockId = hour.attr("id");
	// 	let timeBlockText = hour.children().eq(1).text();
	// 	let timeBlockBtn = hour.children().eq(2);
	// }
	// let $timeBlock = $("body").children().eq(1).children(1).eq();

	// ("body").children().eq(1).children(1).eq(x).attr("id") // will return the value of id

	// $("textarea").eq(x).text("by"); // add text - to get text .val()

	// 	let $domTrav = $("body").children().eq(1).children(1);
	// 	let $timeBlockInput = $("textarea").text();
	// 	$timeBlockInput;
	// let timeBlockEl = $("time-block");
	// 	$.each($domTrav, function (i, val) {

	// 			val = $domTrav.eq(i).attr("id");
	// 		if (val === $btnClicked) {

	// 			}
	// 			// if ($timeBlockBtn === val) {
	// 			// 	val = "#" + val;
	// 			// 	console.log(val);
	// 			// 	let $hourEl = $(val);
	// 			// 	console.log($hourEl);
	// 			// } else {
	// 			// 	console.log("no match");
	// 			// }
	// 	});

	// 	});
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
