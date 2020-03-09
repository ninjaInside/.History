$('.page__button-copy').click(function(e) {

	let element = document.querySelector('.page__main-text-article');

	let range = document.createRange();
		range.selectNode(element);

	window.getSelection().addRange(range);

	try {

		document.execCommand('copy');

	} catch (err) {

		console.log(err);

	};

	window.getSelection().removeAllRanges();

}); 