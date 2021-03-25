const hamburger = document.querySelector('.hamburger');
const submenu = document.querySelectorAll('.submenu');
const navigationItems = document.querySelectorAll('.navigation__item')


//sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar--sticky', window.scrollY > 0)

})


//Event Listeners
hamburger.addEventListener('click', activateMenu)

function activateMenu(e) {
    e.preventDefault();
    //change hamburger icon
    (hamburger.classList.contains('hamburger--open')) ? hamburger.classList.remove('hamburger--open'): hamburger.classList.add('hamburger--open')

    //show mobile menu
    const navigation = document.querySelector('.navigation');
    const accountButtons = navigation.querySelector('.account')

    navigation.classList.toggle('navigation--active');
    accountButtons.classList.toggle('fade');
    navigationItems.forEach(item => item.classList.toggle('fade'));

    navigationItems.forEach(item => {
        item.addEventListener('click', (e) => {
           
            let arrow = item.querySelector('.navigation__arrow')
            let submenuList = item.lastElementChild;
            if (submenuList.classList.contains('submenu--active')) {
                submenuList.classList.remove('submenu--active');
                arrow.classList.remove('navigation__arrow--active')
    
            } else {
                let activeNode = document.querySelector('.submenu--active')
                let activeArrow = document.querySelector('.navigation__arrow--active')
                if (activeNode) {
                    activeNode.classList.remove('submenu--active')
                    activeArrow.classList.remove('navigation__arrow--active')
                }
                submenuList.classList.add('submenu--active')
                arrow.classList.add('navigation__arrow--active')
            }
        })
    })

}

