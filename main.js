// swiper
var swiper = new Swiper(".popular-content", {

    slidPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 755500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoint:{
        280:{
            slidPerView:1,
            spaceBetween: 10,
        },
        320:{
            slidPerView:2,
            spaceBetween: 10,
        },
        510:{
            slidPerView:2,
            spaceBetween: 10,
        },
        758:{
            slidPerView:3,
            spaceBetween: 15,
        },
        900:{
            slidPerView:4,
            spaceBetween: 20,
        },
    }
  });

  // show video
  let playButton = document.querySelector(".play-movie");
  let video = document.querySelector(".video-container");
  let myvideo = document.querySelector("#myvideo");
  let closebtn = document.querySelector(".close-video");

  playButton.onclick = () => {
    video.classList.add("show-video");
    //auto play katanya
    myvideo.play();
  };
  closebtn.onclick = () => {
    video.classList.remove("show-video");
    //auto play katanya
    myvideo.pause();
  };