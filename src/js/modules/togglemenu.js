const toggleMobileMenu = () => {
    const menuButton = document.querySelector('#openMenu'),
        closeMenuButton = document.querySelector('#closeMenu'),
        mobileMenu = document.querySelector('.mobile_menu');
        console.log(closeMenuButton);

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show_mobile_menu');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show_mobile_menu');
    });
};

export default toggleMobileMenu;