<script>
  const speakerIcon = document.getElementById("speaker-icon");
  const speakerImg = document.getElementById("speaker-img");
  const speakerWave = document.getElementById("speaker-wave");
  const tooltip = document.getElementById("speaker-tooltip");
  const music = document.getElementById("bg-music");

  let isPlaying = false;

  function updateSpeakerIcon() {
    if (isPlaying) {
      speakerWave.setAttribute("d", "M16.5 12C16.5 10.62 15.75 9.44 14.61 8.91L13.89 10.32C14.54 10.6 15 11.25 15 12C15 12.75 14.54 13.4 13.89 13.68L14.61 15.09C15.75 14.56 16.5 13.38 16.5 12Z");
      tooltip.textContent = "Pause Music";

      // Hapus garis silang
      document.getElementById("mute-line1")?.remove();
      document.getElementById("mute-line2")?.remove();
    } else {
      speakerWave.setAttribute("d", "");
      tooltip.textContent = "Play Music";

      // Tambahkan garis silang
      const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line1.setAttribute("x1", "16");
      line1.setAttribute("y1", "8");
      line1.setAttribute("x2", "20");
      line1.setAttribute("y2", "16");
      line1.setAttribute("stroke", "white");
      line1.setAttribute("stroke-width", "2");
      line1.setAttribute("id", "mute-line1");

      const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line2.setAttribute("x1", "16");
      line2.setAttribute("y1", "16");
      line2.setAttribute("x2", "20");
      line2.setAttribute("y2", "8");
      line2.setAttribute("stroke", "white");
      line2.setAttribute("stroke-width", "2");
      line2.setAttribute("id", "mute-line2");

      speakerImg.appendChild(line1);
      speakerImg.appendChild(line2);
    }
  }

  speakerIcon.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
    } else {
      music.play();
    }
    isPlaying = !isPlaying;
    updateSpeakerIcon();
  });
</script>
