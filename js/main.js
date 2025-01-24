document.addEventListener('DOMContentLoaded', function() {
  VANTA.RINGS({
      el: "#hero-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x18864b,
      color: 0x18864b
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('.background-video');
  const playButton = document.querySelector('.play-button');
  const videoOverlay = document.querySelector('.video-overlay');

  playButton.addEventListener('click', function() {
      if (video.paused) {
          video.play();
          videoOverlay.style.background = 'none';
          playButton.style.display = 'none';
      } else {
          video.pause();
          videoOverlay.style.background = 'rgba(0, 0, 0, 0.4)';
          playButton.style.display = 'block';
      }
  });

  video.addEventListener('ended', function() {
      videoOverlay.style.background = 'rgba(0, 0, 0, 0.4)';
      playButton.style.display = 'block';
  });
});