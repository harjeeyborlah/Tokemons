var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable:true,
    },
    lazyLoading:true,
    loop:true,

    slidesPerView: 1.1,
    centeredSlides:true,
    spaceBetween:2,


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
    }
  });