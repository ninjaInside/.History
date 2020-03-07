function search_listPost() {

	let arr_for_searchResult = [];

	$('.page__post-block').each((i, elem) => {

		let search 		  = $('.header__search-input').val().trim().toLowerCase();
		let current_value = $(elem).find('.page__main-value').text().toLowerCase();

		if (!current_value.includes(search)) {

			$(elem).hide();

		} else if (current_value.includes(search)) {

			$(elem).show();
			arr_for_searchResult.push(true);			

		};

		if (!search) {

			$('.page__counter-posts').html(`Search is ${arr_for_searchResult.length} posts`);			

		} else {

			$('.page__counter-posts').html(`Search is ${arr_for_searchResult.length} posts by result: ${search}`);

		}

	});

};


$('.header__sort-button').click((e) => {

	let arr_for_child = [];

	$('.page__post-block').each((i, elem) => {

		arr_for_child.push($(elem));

		$(elem).remove();

	});

	arr_for_child = arr_for_child.reverse();

	$('.page__post-list').append(arr_for_child);

	$('.header__sort-button').toggleClass('header__sort-button_top')

});


$('.header__push-search-button').on('click', search_listPost);


$('.header__search-input').on('input', (e) => {

	if ($(e.target).val().trim() == false) search_listPost.apply(this); 

});


$('.header__search-input').on('keyup', (e) => {

	if (e.code == 'Enter') search_listPost.apply(this);

});


$(document).ready((e) => {

	search_listPost()

})