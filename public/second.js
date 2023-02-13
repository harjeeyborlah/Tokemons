var swiper = new Swiper(".mySwiper", {
    lazyLoading:true,
    loop:true,
    slidesPerView: 1.1,
    centeredSlides:true,
    spaceBetween:2,

    pagination: {
      el: '.swiper-custom-pagination',
  clickable: true,
  renderBullet: (index, className) => {
   return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
    },
    breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
    },
    navigation:{
      nextEl:"#nav-right",
      prevEl:"#nav-left",
    },
  });