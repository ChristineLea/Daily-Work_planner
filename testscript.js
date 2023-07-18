// let $timeDiv = $("body").children("div").children("div");

//  $("#alltext").append($(this).text());

$(".saveBtn").on("click", function (event) {
	// link the text to the id
	let $timeId = $(event.currentTarget).prev().attr("id");
	// let schedule = $(".saveBtn").prev();
	console.log($timeId);

	let $schedule = $(`#${$timeId}`).val();

	console.log($schedule)

	if ($timeId === "hour-9") {
		localStorage.setItem("nine", JSON.stringify($schedule));
	} else if ($timeId === "hour-10") {
		localStorage.setItem("ten", JSON.stringify($schedule));
	} else if ($timeId === "hour-11") {
		localStorage.setItem("eleven", JSON.stringify($schedule));
	} else if ($timeId === "hour-12") {
		localStorage.setItem("twelve", JSON.stringify($schedule));
	} else if ($timeId === "hour-13") {
		localStorage.setItem("thirteen", JSON.stringify($schedule));
	} else if ($timeId === "hour-14") {
		localStorage.setItem("fourteen", JSON.stringify($schedule));
	} else if ($timeId === "hour-15") {
		localStorage.setItem("fifteen", JSON.stringify($schedule));
	} else if ($timeId === "hour-16") {
		localStorage.setItem("sixteen", JSON.stringify($schedule));
	} else {
		localStorage.setItem("seventeen", JSON.stringify($schedule));
	}
});

function notWorkHr() {
	for (let i = 9; i < 18; i++) {
		$(`#${i}`).removeAttr("class");
		$(`#${i}`).addClass("present row time-block");
	}
}

function workHour(id) {
	for (let i = 9; i < 18; i++) {
		if (i < id) {
			$(`#${i}`).removeAttr("class");
			$(`#${i}`).addClass("past row time-block");
		} else if (i > id) {
			$(`#${i}`).removeAttr("class");
			$(`#${i}`).addClass("future row time-block");
		} else {
			$(`#${i}`).removeAttr("class");
			$(`#${i}`).addClass("present row time-block");
		}
	}
}

function isWorkHr() {
	let hr = dayjs().format("H");

	if (hr >= 18 || hr <= 8) {
		notWorkHr();
	} else {
		workHour(hr);
	}
}
isWorkHr();
