
const fontImport = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,800;1,400&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap';
const iconImport = 'https://kit.fontawesome.com/0555eee51e.js';

let onViaClick = false;
let visible = false;

// import $ from 'jquery';

styles.unshift(fontImport);
scripts.unshift(iconImport);

$(document).ready(() => {
    for (url of scripts) {
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    }

    for (url of styles) {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = url;
        document.head.appendChild(style);
    }

    loadNewDynamicHTML();
});

function loadNewDynamicHTML() {
    // https://stackoverflow.com/a/31837264
    const includes = $('[data-include]');
    includes.each((_, el) => {
        let $el = $(el);
        if (!$el.prop('data-loaded')) {
            let file = 'templates/' + $el.attr('data-include') + '.html';
            $el.load(file);
            $el.attr('data-loaded', '');
        }
    });
}
