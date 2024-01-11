const getUuid = require('uuid-by-string');

const target = '.js_form';
const host = target + 'Host';
const sodId = target + 'SodId';

export default function () {
    const $js_form = $(target);
    const $host = $(host);
    const $sodID = $(sodId);
    const $out = $('.js_out');

    $js_form.submit(function (e) {
        e.preventDefault();

        if (!$js_form.valid()) return;

        $out.append(outList($sodID.val().trim().toUpperCase(), $host.val().trim()))
    });
}


const outList = (function () {
    const links = {
        default: 'test.screenondemand.de/tmpbuild/',
        whiteLabel: 'media-preview.de/go/'
    };

    const state = [];

    const attention = 'shakeX';

    return function (sodID, host) {
        const stateID = sodID + host;

        if (state.some(id => id === stateID)) {
            const $row = $(`.${stateID}`);

            $row.removeClass(attention);

            setTimeout(() => {
                $row.addClass(attention);
            });

            return;
        } else {
            state.push(stateID);
        }

        const uuid = getUuid(sodID);
        const url = `https://${links[host]}${host === 'default' ? sodID : sodID.replace(/[a-z]/gi, '')}/${uuid}/${sodID}.zip`;

        return (`<ul class="list-group list-group-horizontal mb-2 ${stateID}">
                <li class="list-group-item">${sodID}</li>
                <li class="list-group-item">
                    <a href="${url}" download>Download archive</a>
                </li>
            </ul>`);
    }
})();