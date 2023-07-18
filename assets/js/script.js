function init() {
	let currentDay = dayjs();
	$("#currentDay").text(currentDay.format("dddd, D MMMM"));

	getLocalStorage();
	isWorkHr();
}

// 2. Check if current time is between 9:00 - 17:00
function isWorkHr() {
	// format time as 24hr
	let hr = dayjs().format("H");

	if (hr >= 18 || hr <= 8) {
		notWorkHr();
	} else {
		// Pass in hr as param
		workHour(hr);
	}
}

// 3. if NOT between 9:00 - 17:00 / reset all time blocks to "future"
function notWorkHr() {
	for (let i = 9; i < 18; i++) {
		$(`#${i}`).removeAttr("class");
		$(`#${i}`).addClass("future row time-block");
	}
}

// 4. IF between 9:00 - 17:00 / loop through time blocks
function workHour(hour) {
	for (let i = 9; i < 18; i++) {
		if (i < hour) {
			// set "past" if time block (i) is less than the current time (hour)
			$(`#${i}`).removeAttr("class");
			$(`#${i}`).addClass("past row time-block");
		} else if (i > hour) {
			// set "future" if time block (i) is more than the current time (hour)
			$(`#${i}`).removeAttr("class");
			$(`#${i}`).addClass("future row time-block");
		} else {
			// set "present" if time block (i) is the same as the current time (hour)
			$(`#${i}`).removeAttr("class");
			$(`#${i}`).addClass("present row time-block");
		}
	}
}

// Get Local Storage // loop through localStorage keys / render to the correct time block
function getLocalStorage() {
	$.each(localStorage, function (key) {
		if (key === "hour-9") {
			$("#9")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-9")));
		} else if (key === "hour-10") {
			$("#")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-")));
		} else if (key === "hour-11") {
			$("#11")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-11")));
		} else if (key === "hour-12") {
			$("#12")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-12")));
		} else if (key === "hour-13") {
			$("#13")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-13")));
		} else if (key === "hour-14") {
			$("#14")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-14")));
		} else if (key === "hour-15") {
			$("#15")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-15")));
		} else if (key === "hour-16") {
			$("#16")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-16")));
		} else if (key === "hour-17") {
			$("#17")
				.children("textarea")
				.val(JSON.parse(localStorage.getItem("hour-17")));
		} else {
			return;
		}
	});
}

// Set local storage / use ID as "key" in local storage
function setLocalStorage(id, str) {
	if (id === "hour-9") {
		localStorage.setItem("hour-9", JSON.stringify(str));
	} else if (id === "hour-10") {
		localStorage.setItem("hour-10", JSON.stringify(str));
	} else if (id === "hour-11") {
		localStorage.setItem("hour-11", JSON.stringify(str));
	} else if (id === "hour-12") {
		localStorage.setItem("hour-12", JSON.stringify(str));
	} else if (id === "hour-13") {
		localStorage.setItem("hour-13", JSON.stringify(str));
	} else if (id === "hour-14") {
		localStorage.setItem("hour-14", JSON.stringify(str));
	} else if (id === "hour-15") {
		localStorage.setItem("hour-15", JSON.stringify(str));
	} else if (id === "hour-16") {
		localStorage.setItem("hour-16", JSON.stringify(str));
	} else if (id === "hour-17") {
		localStorage.setItem("hour-17", JSON.stringify(str));
	} else {
		return;
	}
}

// Triggered by a user / get ID of the <textarea> & value of <textarea> / Pass as params to setLocalStorage()
$(".saveBtn").on("click", function (event) {
	let $timeId = $(event.currentTarget).prev().attr("id");
	let $schedule = $(`#${$timeId}`).val();

	setLocalStorage($timeId, $schedule);
});

// 1. invoke init()
init();
