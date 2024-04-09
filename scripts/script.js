const dropdownLink = document.querySelector('.shop-link');
const mobileMenu = document.querySelector('.mobile-menu');
const links = document.querySelectorAll('.menu-link')
const costumerBtn = document.querySelector('.account-btn')
const costumerMenu = document.querySelector('.costumer-menu')
const costumerLinks = document.querySelectorAll('.menu-costumer-link')

// menu toggle
dropdownLink.addEventListener('click', () => {
    mobileMenu.classList.toggle('open-mobile-menu')
});

// close menu if clicked on the links
links.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open-mobile-menu')
    })
});

// close menu if clicked outside
document.onclick = (e) => {
    if (!dropdownLink.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open-mobile-menu')
    }
}


// COSTUMER MENU
costumerBtn.addEventListener('click', () => {
    costumerMenu.classList.toggle('open-costumer-menu')
})

costumerLinks.forEach((costumerLink) => {
    costumerLink.addEventListener('click', () => {
        costumerMenu.classList.remove('open-costumer-menu')
    })
})

document.body.onclick = (e) => {
    if (!costumerBtn.contains(e.target) && !costumerMenu.contains(e.target)) {
        costumerMenu.classList.remove('open-costumer-menu')
    }
}