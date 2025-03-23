const modal = document.querySelector(".modal-instruction");
const instructionLink = document.querySelector(".instruction-link");
const closeBtn = document.querySelector(".close-modal");

instructionLink.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

let currentVideo = null;

function playVideo(playButton) {
  const video = playButton.previousElementSibling;
  const playIcon = playButton;

  if (currentVideo && currentVideo !== video) {
    currentVideo.pause();
    const prevPlayIcon = currentVideo.nextElementSibling;
    prevPlayIcon.classList.remove("hidden");
  }

  video.play();
  currentVideo = video;

  playIcon.classList.add("hidden");
}

function toggleVideo(video) {
  const playIcon = video.nextElementSibling;

  if (video.paused) {
    if (currentVideo && currentVideo !== video) {
      currentVideo.pause();
      const prevPlayIcon = currentVideo.nextElementSibling;
      prevPlayIcon.classList.remove("hidden");
    }

    video.play();
    currentVideo = video;

    playIcon.classList.add("hidden");
  } else {
    video.pause();
    currentVideo = null;

    playIcon.classList.remove("hidden");
  }
}

function changeVolume(slider) {
  if (currentVideo) {
    currentVideo.volume = slider.value;
  }
}

document.querySelectorAll(".video-player").forEach((video) => {
  video.addEventListener("pause", () => {
    const playIcon = video.nextElementSibling;
    playIcon.classList.remove("hidden");
  });

  video.addEventListener("ended", () => {
    const playIcon = video.nextElementSibling;
    playIcon.classList.remove("hidden");
    currentVideo = null;
  });
});
