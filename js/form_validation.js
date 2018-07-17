var bvOptions = {
		disableSubmitButtons: true,
		live:'enabled',
		submitButtons: '#contact-form-button',
		feedbackIcons:{
			valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			inf_field_FirstName: {
				validators: {
					notEmpty: {
						message: 'First name is required.'
					}
				}
			},
			inf_field_LastName: {
				validators: {
					notEmpty: {
						message: 'Last name is required.'
					}
				}
			}
			,
			inf_field_Phone1: {
				validators: {
					notEmpty: {
						message: 'Phone is required.'
					},
					regexp: {
						regexp: /^\d{10}$/i,
						message: 'Please enter 10 digit phone number without dashes or spaces.'
					}
				}
			},
			inf_field_Email: {
				validators: {
					notEmpty: {
						message: 'Email is required'
					},
					emailAddress: {
						message: 'Please enter a valid email address.'
					}
				}
			}
		}
}

var widgetId = null;

var onSubmit = function(token) {
	
	$('#contact-form').submit();
}

var onLoad = function() {
	widgetId = grecaptcha.render('recaptcha', {
		'siteKey' : '6Le4bx0UAAAAANeDRNRCRSCL2O-zB5Lf5yUUmxXQ',
		'callback' : onSubmit
	});
}

$(document).ready(function(){

	$('#contact-form').bootstrapValidator(bvOptions)
	.on('success.form.bv', function(ev){
		ev.preventDefault();
		var recaptchaResponse = grecaptcha.getResponse(widgetId);
		if(!recaptchaResponse){
			console.log(grecaptcha.getResponse(widgetId));
			grecaptcha.execute();
		}else{
			var $form = $(ev.target);
			var validator = $form.data('bootstrapValidator');
			validator.defaultSubmit();
		}
		
	});
	
	$('#contact-form-button').on('click', function(){
		$('#contact-form').data('bootstrapValidator').validate();
	});
});