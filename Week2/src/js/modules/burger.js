let iconMenu = document.querySelector('.icon-menu');
let iconLine = document.querySelector('.header .menu__line');
let menuBody = document.querySelector('.menu__body');
let langDropdown = document.querySelector(".header__lang .dropdown");

if (iconMenu) {
  iconMenu.onclick = function () {
    menuBody.classList.toggle('__active-menu--burger');
    iconMenu.classList.toggle('__menu-open');
    document.body.classList.toggle('__lock');
    langDropdown.classList.toggle('dropdown--black');
  };
};

const linkmenu = document.querySelectorAll('.menu__link a');
if (linkmenu.length > 0) {
  for (let index = 0; index < linkmenu.length; index++) {
    const elem = linkmenu[index];
    elem.addEventListener('click', function (e) {
      document.body.classList.remove('__lock');
      menuBody.classList.remove('_active');
      iconMenu.classList.remove('__menu-open');
    });
  }
}
