
new Swiper('.category__slider', {
  spaceBetween: 15,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    374.99: {
      slidesPerView: 2,
    },
    599.99: {
      slidesPerView: 3,
    },
    767.99: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
var galleryThumbs = new Swiper('.product__swiper-mini', {
  spaceBetween: 10,
  slidesPerView: 5,direction: 'vertical',
  initialSlide: 6,
  breakpoints: {
		0: {
			direction: 'horizontal', 
		},
		768: {
			direction: 'vertical', 
		}
	},
});

new Swiper('.product__swiper', {
  loop: true,
  slideToClickedSlide: true,direction: 'vertical', 
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  breakpoints: { 
		0: { 
			direction: 'horizontal', 
		},
		768: { 
			direction: 'vertical', 
		}
	},
});