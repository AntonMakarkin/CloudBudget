const floatHeader = () => {
    const header = document.querySelector('header'),
          closeMenuButton = document.querySelector('.mobile_menu_button'),
          html = document.documentElement;

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
};

export default floatHeader;