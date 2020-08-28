window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //let screenWidth = document.documentElement.offsetWidth;
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
            loop() {
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
        //SliderCarousel.loop();
        SliderCarousel.init();

    
    //Mobile menu

    const menuButton = document.querySelector('.menu_button'),
        closeMenuButton = document.querySelector('.mobile_menu_button'),
        menu = document.querySelector('.header'),
        mobileMenu = document.querySelector('.mobile_menu');
        console.log(closeMenuButton);

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show_mobile_menu');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show_mobile_menu');
    });

    //Change header class if user started to scroll the page

    const header = document.getElementsByTagName('header')[0],
        logo = document.getElementById('logo'),
        html = document.documentElement,
        //mobileMenu = document.getElementsByClassName('menu_button')[0],
        openMobileMenu = document.getElementsByClassName('header')[0];

    window.addEventListener('scroll', () => {
        let scrollfromTop = html.scrollTop,
            screenWidth = html.offsetWidth;
            console.log(screenWidth);
        /*if (scrollfromTop > 0) {
            header.classList.add('header_active');
            closeMenuButton.style.top = '30px';
        }
        else {
            header.classList.remove('header_active');
            closeMenuButton.style.top = '50px';
        }*/
        if (scrollfromTop > 0) {
            header.classList.add('header_active');
            closeMenuButton.style.top = '30px';
        }
        if (scrollfromTop === 0 && mobileMenu.className === '') {
            header.classList.remove('header_active');
            closeMenuButton.style.top = '50px';
        }
    });



});






