export default function() {
	const $formUnsubscribe = $('#js_formUnsubscribe');
	
	$formUnsubscribe.submit(function(e){
		e.preventDefault();

		if(!$formUnsubscribe.valid()) {
			return
		}

		const $control = $formUnsubscribe.find('.btn');

		$control.addClass('btn--loading').attr('disabled', true);

		setTimeout(() => {
			alert('If your email was found in our database - you have been unsubscribed.');
			$formUnsubscribe.find('input').val('');
			$formUnsubscribe.find('.form-group').removeClass('has-valid');
			$control.removeClass('btn--loading').attr('disabled', false);;
		}, 2500);
	});
}