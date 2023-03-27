
import jq_validation_default from './component/config/jquery.validation-default';
import avifWebpBackground from './component/config/avifWebpBackground';

// import lazy_init from './component/lazy';
import utms_init from './component/utms';
import form_contact from './component/forms/contact';
import form_unsubscribe from './component/forms/unsubscribe';

(function ($, window, document) {
        
    $(function() {
        avifWebpBackground();
        jq_validation_default();
        // lazy_init();
        utms_init();

        form_contact();
        form_unsubscribe();

        $("body").css("opacity", 1);
    });

})(window.jQuery, window, document);
