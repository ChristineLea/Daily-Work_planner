$(".btn").on("click", function (event) {
	let $btnEvent = $(event.target);
	let $btnId = $btnEvent.prev().attr("id");
	let $descr = $btnEvent.prev().val();
	console.log($btnId);
	console.log($descr);
})