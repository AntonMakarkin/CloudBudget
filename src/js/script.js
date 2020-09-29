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








/*window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const galleryContainer = document.querySelector('.gallery_container'), //род. контейнер слайдера
          galleryItems = document.querySelectorAll('.slider_item'); //элементы слайдера


        class Carousel {
            constructor(container, items) {
                this.carouselContainer = container;
                this.carouselArray = [...items];
            }

            //Add css-classes for slider
            setInitialState() {
                this.carouselArray[0].classList.add('gallery_item_previous');
                this.carouselArray[1].classList.add('gallery_item_selected');
                this.carouselArray[2].classList.add('gallery_item_next');
            }

            //Update the order state of the slider with css classes
            setCurrentState(selected, previous, next) {

                selected.forEach(element => {
                    element.classList.remove('gallery_item_selected');
                    element.classList.add('gallery_item_next');
                });

                previous.forEach(element => {
                    element.classList.remove('gallery_item_previous');
                    element.classList.add('gallery_item_selected');
                });

                next.forEach(element => {
                    element.classList.remove('gallery_item_next');
                    element.classList.add('gallery_item_previous');
                });

            }

            /*Inititate infinity loop for slider*/
            /*loop() {
                const selectedItem = document.querySelectorAll('.gallery_item_selected');
                const previousItem = document.querySelectorAll('.gallery_item_previous');
                const nextItem = document.querySelectorAll('.gallery_item_next');

                this.setCurrentState(selectedItem, previousItem, nextItem);
            }

            init() {
                setInterval(() => {
                    this.loop();
                }, 1500);
            }

        }

        const SliderCarousel = new Carousel(galleryContainer, galleryItems);
        SliderCarousel.setInitialState();
        SliderCarousel.init();

    
    //Mobile menu

    const menuButton = document.querySelector('#openMenu'),
        closeMenuButton = document.querySelector('#closeMenu'),
        mobileMenu = document.querySelector('.mobile_menu');
        console.log(mobileMenu);

    menuButton.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });


    //Change header class if user started to scroll the page

    const header = document.getElementsByTagName('header')[0],
        html = document.documentElement,
        openMobileMenu = document.getElementsByClassName('header')[0];

    window.addEventListener('scroll', () => {
        let scrollfromTop = html.scrollTop,
            screenWidth = html.offsetWidth;
            console.log(screenWidth);
        if (scrollfromTop > 0) {
            header.classList.add('header_active');
        }
        else {
            header.classList.remove('header_active');
        }
    });


});*/






