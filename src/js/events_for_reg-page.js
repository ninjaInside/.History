$(document).ready(() => {

	$('input[data-type]').val('')

})

$('.form-input > form').on('submit', (e) => {

	const validate_nickname  = $('input[data-type="name"]').val().trim(); 
	const validate_email_res = validate_pass();
	const validate_pass_res  = validate_email();

	if (!validate_pass_res || !validate_email_res || !validate_nickname) {

		e.preventDefault();

		return;

	};

})

function validate_pass() {

	if (!$('input[data-type="conf-pass"]').val().trim()) {

		$('input[data-type="pass"]').css('background', '');
		$('input[data-type="conf-pass"]').css('background', '');

		return false;

	} else {

		if ($('input[data-type="pass"]').val().trim() != $('input[data-type="conf-pass"]').val().trim()) {

			$('input[data-type="pass"]').css('background', '#e02a2a');
			$('input[data-type="conf-pass"]').css('background', '#e02a2a');

			return false;

		} else {

			$('input[data-type="pass"]').css('background', '');
			$('input[data-type="conf-pass"]').css('background', '');

			return true;

		}

	}

}


function validate_email() {

	let value = $('input[data-type="email"]').val().trim();

	if (!value) {

		return false;

	} else if (!value.includes('@') || !value.includes('.')) {

		$('input[data-type="email"]').css('background', '#e02a2a');

		return false;

	} else {

		$('input[data-type="email"]').css('background', '');

		return true;

	};

}

$('input:not([class$="button"])').on('blur', (e) => {

	switch ($(e.target).attr('data-type')) {

		case 'pass':
			validate_pass();
		break;

		case 'conf-pass':
			validate_pass();
		break;

		case 'email':
			validate_email();
		break;

	}

});

