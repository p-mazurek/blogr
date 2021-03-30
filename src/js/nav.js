const hamburger = document.querySelector('.hamburger');
const submenu = document.querySelectorAll('.submenu');
const navigationItems = document.querySelectorAll('.navigation__item');
const signButtons = document.querySelectorAll('.account > button');



//sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar--sticky', window.scrollY > 0)

})


//Event Listeners
signButtons.forEach(button => {
    const login = document.querySelector('.login');
    const register = document.querySelector('.register');

    button.addEventListener('click', () => {
        if (button.classList.contains('account__button--login')) {
            if (login.classList.contains('inactive')) {
                login.classList.remfgove('inactive');
                login.classList.add('active');
                register.classList.add('inactive');
                register.classList.remove('active')
            } else {
                login.classList.add('inactive');
                login.classList.remove('active');
            }
        } else if (button.classList.contains('account__button--signup')) {
            if (register.classList.contains('inactive')) {
                register.classList.remove('inactive');
                register.classList.add('active');
                login.classList.add('inactive');
                login.classList.remove('active');
            } else {
                register.classList.add('inactive');
                register.classList.remove('active');
            }
        }
    })
})
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