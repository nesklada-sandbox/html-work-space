export default function() {
	const $formContact = $('#js_formContact');

	$formContact.submit(function(e){
		e.preventDefault();

		if(!$formContact.valid()) {
			return;
		}
		
		const $control = $formContact.find('.btn');

		$control.addClass('btn--loading').attr('disabled', true);

		setTimeout(() => {
			alert('Your message was successfully sent.');
			$formContact.find('input').val('');
			$formContact.find('.form-group').removeClass('has-valid');
			$control.removeClass('btn--loading').attr('disabled', false);
		}, 2410);
	});
}