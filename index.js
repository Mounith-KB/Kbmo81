document.addEventListener('DOMContentLoaded', function() {
  const mapContainer = document.getElementById('map-container');
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      mapContainer.innerHTML = '<p>Geolocation not supported by this browser.</p>';
    }
  }
  
  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const iframe = `
      <iframe width="400" height="300" 
              src="https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.002},${lat-0.002},${lon+0.002},${lat+0.002}&layer=mapnik&marker=${lat},${lon}" 
               >
              </iframe>
            <br>
            
    `;
    mapContainer.innerHTML = iframe;
  }
  
  function showError(error) {
    let message = 'Unable to get location: ';
    switch(error.code) {
      case error.PERMISSION_DENIED:
        message += 'Permission denied';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location unavailable';
        break;
      case error.TIMEOUT:
        message += 'Request timed out';
        break;
      default:
        message += 'Unknown error';
    }
    mapContainer.innerHTML = `<p>${message}</p>`;
  }
  
 
  getLocation();
});
