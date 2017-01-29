(function (d) {
    'use strict';

    // Almost 😜 reliable OS detection based on userAgent string
    var detectMeta = function () {
        var agent = window.navigator.userAgent;
        var meta = 'win';

        if (agent.indexOf("Mac") !== -1) {
            meta = "mac";
        } else if ((agent.indexOf("X11") !== -1) || (agent.indexOf("Linux") !== -1)) {
            meta = "linux";
        }
        return meta;
    };

    var toggleFooter = function () {
        footer.classList.toggle('fade');
    };

    var init = function () {
        metaKey.innerHTML = detectMeta();
        d.addEventListener('keydown', update);
        d.addEventListener('keyup', update);
        d.addEventListener('keypress', start);
        footer.addEventListener('mouseover', function () {
            toggleFooter();
        });
        footer.addEventListener('mouseout', function () {
            toggleFooter();
        });
    };

    var start = function () {
        setTimeout(function () {
            header.classList.add('fade');
            footer.classList.add('fade');
            d.removeEventListener('keypress', start);
        }, 500);
    };

    var update = function (e) {
        display.innerHTML = e.keyCode;

        if (e.code === 'CapsLock') {
            if (e.type === 'keydown') {
                capsKey.classList.remove('hidden');
            } else {
                capsKey.classList.add('hidden');
            }
        }

        if (e.altKey) {
            altKey.classList.remove('hidden');
        } else {
            altKey.classList.add('hidden');
        }

        if (e.ctrlKey) {
            ctrlKey.classList.remove('hidden');
        } else {
            ctrlKey.classList.add('hidden');
        }

        if (e.shiftKey) {
            shiftKey.classList.remove('hidden');
        } else {
            shiftKey.classList.add('hidden');
        }

        if (e.metaKey) {
            metaKey.classList.remove('hidden');
        } else {
            metaKey.classList.add('hidden');
        }
    };

    var display = d.getElementById('display');
    var capsKey = d.getElementById('capsKey');
    var altKey = d.getElementById('altKey');
    var ctrlKey = d.getElementById('ctrlKey');
    var shiftKey = d.getElementById('shiftKey');
    var metaKey = d.getElementById('metaKey');

    var header = d.querySelector('header');
    var footer = d.querySelector('footer');

    init();

})(document);
