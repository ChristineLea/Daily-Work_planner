// let $timeDiv = $("body").children("div").children("div");

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
// hour(12);
function isWorkHr() {
	let hr = dayjs().format("H");

	if (hr >= 18 || hr <= 8) {
		notWorkHr();
	} else {
		workHour(hr);
	}
}
isWorkHr();