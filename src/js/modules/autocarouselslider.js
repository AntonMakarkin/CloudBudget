const autoSlider = () => {
    const galleryContainer = document.querySelector('.gallery_container'), //a parent container
          galleryItems = document.querySelectorAll('.slider_item'); //elements of the slider


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
        SliderCarousel.init();
};

export default autoSlider;