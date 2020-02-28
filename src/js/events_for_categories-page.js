$('.header__sort-button').click(e => {

	$('.page__post-list').toggleClass('page__post-list_reverse');

});

$('.header__search-input').on('input', e => {

	$('.page__post-block').each((i, elem) => {

		let search 		  = $('.header__search-input').val().trim().toLowerCase();
		let current_value = $(elem).find('.page__main-value').text().toLowerCase();

		if (!current_value.includes(search)) {

			$(elem).hide();

		} else if (current_value.includes(search)) {

			$(elem).show();			

		}

	})

})

