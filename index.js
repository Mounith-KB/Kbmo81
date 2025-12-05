document.addEventListener('DOMContentLoaded', function() {
  const mapContainer = document.getElementById('map-container');

  function showPosition() {
    const lat = 11.46018;
    const lon = 77.409153;

    const iframe = `
      <iframe width="400" height="300"
        src="https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.002},${lat-0.002},${lon+0.002},${lat+0.002}&layer=mapnik&marker=${lat},${lon}"
        style="border:1px solid black">
      </iframe>
      <br>
    `;
    mapContainer.innerHTML = iframe;
  }

  // Directly show the fixed position (no geolocation)
  showPosition();
});
