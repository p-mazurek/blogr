const hamburger = document.querySelector('.hamburger');
const submenu = document.querySelectorAll('.submenu');


hamburger.addEventListener('click', activateMenu)

//sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar--sticky', window.scrollY > 0)

})


//hamburger aniamtion
const focusMenu = () => {
    (hamburger.classList.contains('hamburger--open')) ? hamburger.classList.remove('hamburger--open'): hamburger.classList.add('hamburger--open')
}

function activateMenu() {
    //show menu
    const navigation = document.querySelector('.navigation');
    const navigationItems = document.querySelectorAll('.navigation__item')
    const accountButtons = navigation.querySelector('.account')

    navigation.classList.toggle('navigation--active');
    accountButtons.classList.toggle('fade');
    navigationItems.forEach(item => item.classList.toggle('fade'));

    //hamburger aniamtion
    focusMenu()

    //show submenu
    activeNode()

    navigationItems.forEach(item => {
        item.addEventListener('click', () => {
            let arrow = item.querySelector('.navigation__arrow')
            let submenuItem = item.lastElementChild;
            if (submenuItem.classList.contains('submenu--active')) {
                submenuItem.classList.remove('submenu--active');
                arrow.classList.remove('navigation__arrow--active')

            } else {
                activeNode()

                submenuItem.classList.add('submenu--active')
                arrow.classList.add('navigation__arrow--active')
            }
        })

    })

    function activeNode() {
        let activeNode = document.querySelector('.submenu--active')
        let activeArrow = document.querySelector('.navigation__arrow--active')
        if (activeNode) {
            activeNode.classList.remove('submenu--active')
            activeArrow.classList.remove('navigation__arrow--active')
        }

    }
}