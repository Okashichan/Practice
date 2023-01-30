const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

function copyDate() {
let itemSetImg = document.querySelectorAll('.ration__item-set img');
 if (itemSetImg.length) {

 }
}

const btn = document.querySelectorAll('.ration .item-set__button');
const imagePopup = document.querySelector('.ration_set--popup .preview') 
const imageForm = document.querySelector('.ration_set--form img') 

if (btn.length > 0) {
  for (let index = 0; index < btn.length; index++) {
    const el = btn[index];
    el.addEventListener('click', function (e) { 
      let img = el.closest('.item-set__body').firstElementChild.firstElementChild;
      imagePopup.src = img.src ; 
      imageForm.src = img.src ; 
      let bodyItem = this.closest('.item-set__body'); 
      let setName = bodyItem.querySelector('.item-set__set-name')
      let subName = bodyItem.querySelector('.item-set__subname')
      let setNamePopup = document.querySelector('.ration_set--popup .item-set__set-name') 
      let subNamePopup = document.querySelector('.ration_set--popup .item-set__set-subname')
      let setNameForm = document.querySelector('.ration_set--form .item-set__set-name')
      let subNameForm = document.querySelector('.ration_set--form .item-set__set-subname')
      setNamePopup.innerHTML = setName.innerHTML;  
      subNamePopup.innerHTML = subName.innerHTML; 
      setNameForm.innerHTML = setName.innerHTML;  
      subNameForm.innerHTML = subName.innerHTML; 
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    })
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('_lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('_lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}