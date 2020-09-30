import 'nodelist-foreach-polyfill';

import autoSlider from './modules/autocarouselslider';
import toggleMobileMenu from './modules/togglemenu';
import floatHeader from './modules/floatheader';
import scrolling from './modules/scrolling';
import usewebp from './modules/testwebp';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    scrolling('.pageUpButton');
    autoSlider();
    toggleMobileMenu();
    floatHeader();
    usewebp();
});







