const dropdownLink = document.querySelector('.shop-link');
const mobileMenu = document.querySelector('.mobile-menu');
const links = document.querySelectorAll('.menu-link')

// menu toggle
dropdownLink.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
});

// close menu if clicked on the links
links.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
    })
});

// close menu if clicked outside
document.onclick = (e) => {
    if (!dropdownLink.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open')
    }
}
