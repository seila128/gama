const btn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    btn.textContent = "⏸️ Pausar música";
  } else {
    music.pause();
    btn.textContent = "🎵 Tocar música";
  }
  isPlaying = !isPlaying;
});
