// Select DOM items 

//method querySelector() returns 1st element that matches specified css selector 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu'); 
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
//querySelectorAll() returns a NodeList of all elements containing specified css selector
const navItem = document.querySelectorAll('.nav-item');

//Set initial state of the menu

let showMenu = false; //variable for whether menu is open(true) or closed(false)

menuBtn.addEventListener('click', toggleMenu);

//this func adds the class close/show to elements making up the nav menu
//when class close/show gets added, a menu overlay opens when menu button is clicked 
function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show')); //iterates through each item in an array and applies function
        //Set menu state 
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show')); 
        showMenu = false;
    }
}
