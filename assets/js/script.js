// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// parentEl of the save button
const $hour9El = $("#hour-9");
const $hour10El = $("#hour-10");
const $hour11El = $("#hour-11");
const $hour12El = $("#hour-12");
const $hour1El = $("#hour-1");
const $hour2El = $("#hour-2");
const $hour3El = $("#hour-3");
const $hour4El = $("#hour-4");
const $hour5El = $("#hour-5");
const saveBtnEl = $(".saveBtn");
$(function () {
	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?
	
// trav.parent().eq(0); compare the eq(0) to the hour-*
//     const travEl = time9.attr("id")
// const checkId = (trav) {
//     const hour-x = button.parent().attr("id")
//     const trav = travEl
//     if (hour-x === trav) {
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

