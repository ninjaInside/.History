$('.sidebar__button').click(e => {

	switch ($(e.target).attr('data-event')) {

		case 'toggle_menu':
			void function() {

				$('.page__aside-menu').toggleClass('page__aside-content_toggle-on');

				$('.sidebar__button:nth-child(1)').toggleClass('sidebar__button_menu-close-icon');

			}();
		break;

	}

});
