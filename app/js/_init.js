
import jq_validation_default from './component/config/jquery.validation-default';
import js_form from './component/js_form';

(function ($, window, document) {

    $(function () {
        jq_validation_default();
        js_form();

        $("body").css("opacity", 1);
    });

})(window.jQuery, window, document);
