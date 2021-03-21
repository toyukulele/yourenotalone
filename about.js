document.querySelectorAll("video").forEach(function (video) {
    video.addEventListener("click", function (event) {
      video.classList.toggle("video-rotating");
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });