let currentTarget = null;
let currentTheme  = false;

$('.sidebar__button').click(e => {

	switch ($(e.target).attr('data-event')) {

		case 'toggle_menu':
			toggle_menu(e);
		break;
		case 'toggle_info':
			toggle_info(e)
		break;
		case 'toggle_theme':
			toggle_menu(e, true);
			toggle_info(e, true);
			toggle_theme(e);
			$('.sidebar').removeClass('sidebar_border-left');
		break;

	}

})
 
function toggle_menu(e, remove) {

	if (remove) {

		$('.page__aside-menu').removeClass('page__aside-content_toggle-on')
		$('.sidebar__button:nth-child(1)').removeClass('sidebar__button_menu-close-icon-white')
		$('.sidebar__button:nth-child(1)').removeClass('sidebar__button_menu-close-icon')
			
		return;

	}

	$('.page__aside-menu').toggleClass('page__aside-content_toggle-on');

	if (document.querySelector('.sidebar').getBoundingClientRect().left == 0) {

		$('.sidebar').addClass('sidebar_border-left');

	} else {

		setTimeout(() => {

			if (document.querySelector('.sidebar').getBoundingClientRect().left == 0) {

				$('.sidebar').removeClass('sidebar_border-left');

			}

		}, 650);

	};

	if (!currentTheme) {

	$('.sidebar__button:nth-child(1)').toggleClass('sidebar__button_menu-close-icon');

	} else {

		$('.sidebar__button:nth-child(1)').toggleClass('sidebar__button_menu-close-icon-white');

	}

	if (currentTarget == '.page__aside-info') {

		currentTarget = null;
		toggle_info(e, true);

	}

	currentTarget = '.page__aside-menu';

}

function toggle_info(e, remove) {

	if (remove) {

		$('.page__aside-info').removeClass('page__aside-content_toggle-on');		

		return;

	}	

	if (currentTarget == '.page__aside-menu') {

		currentTarget = null;
		toggle_menu(e, true);

	}

	$('.page__aside-info').toggleClass('page__aside-content_toggle-on');
	

	if (document.querySelector('.sidebar').getBoundingClientRect().left == 0) {

		$('.sidebar').addClass('sidebar_border-left');

	} else {

		setTimeout(() => {

			if (document.querySelector('.sidebar').getBoundingClientRect().left < 0) {

				$('.sidebar').removeClass('sidebar_border-left');

			}

		}, 650)

	};

	currentTarget = '.page__aside-info';

}

function toggle_theme(e) {

	$('*').toggleClass('dark-theme-all-opt');
	$('.sidebar').toggleClass('dark-theme-shadow-opt');
	$('.page__aside-info').toggleClass('dark-theme-background-special');

	$('.sidebar__button[data-event$="menu"]').toggleClass('sidebar__button_menu-white');
	$('.sidebar__button[data-event$="info"]').toggleClass('sidebar__button_info-white');
	$('.sidebar__button[data-event$="theme"]').toggleClass('sidebar__button_theme-white');


	currentTheme = !currentTheme;

}