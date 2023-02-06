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
  });