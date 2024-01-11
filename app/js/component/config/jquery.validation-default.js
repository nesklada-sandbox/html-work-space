const error = 'error';
const hasError = 'has-' + error;
const hasValid = 'has-valid';
const formGroup = '.form-group';

export default function () {
    $.validator.addMethod("SOD_required", function (value, element) {
        return value.trim().toLowerCase().indexOf('sod') === 0;
    }, "ID must start with 'SOD'");

    jQuery.validator.setDefaults({
        errorElement: "label",
        errorClass: error,
        focusInvalid: false,

        errorPlacement: function (error, element) {
            $(element).closest(formGroup).append(error);
        },

        highlight: function (element) {
            const $elem = $(element);

            $elem.closest(formGroup).addClass(hasError).removeClass(hasValid);
            $elem.addClass(error);
        },

        unhighlight: function (element) {
            const $elem = $(element);

            $elem.closest(formGroup).removeClass(hasError).addClass(hasValid);
            $elem.removeClass(error);
        },

        rules: {
            sodIdTxt: {
                required: true,
                SOD_required: true,
                minlength: 10
            },
        },
    });
}
