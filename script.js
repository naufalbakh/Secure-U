function startSlideshow() {
  const slideshowImgs = document.querySelectorAll(".slideshow-img");
  let currentIndex = 0;

  function showNextSlide() {
    slideshowImgs[currentIndex].style.opacity = "0";
    currentIndex = (currentIndex + 1) % slideshowImgs.length;
    slideshowImgs[currentIndex].style.opacity = "1";
  }

  setInterval(showNextSlide, 1000);
}

startSlideshow();
