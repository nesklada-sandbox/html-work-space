const error = 'error';
const hasError = 'has-' + error;
const hasValid = 'has-valid';
const formGroup = '.form-group';

export default function () {
    jQuery.validator.setDefaults({
        errorElement: "label",
        errorClass: error,
        focusInvalid: false,

        errorPlacement: function (error, element) {
            $(element).closest(formGroup).append(error);
        },

        highlight: function (element, errorClass, validClass) {
            const $elem = $(element);

            $elem.closest(formGroup).addClass(hasError).removeClass(hasValid);
            $elem.addClass(error);
        },

        unhighlight: function (element, errorClass, validClass) {
            const $elem = $(element);

            $elem.closest(formGroup).removeClass(hasError).addClass(hasValid);
            $elem.removeClass(error);
        },

        rules: {
            sodIdTxt: {
                required: true,
                minlength: 10
            },
        },
    });
}
