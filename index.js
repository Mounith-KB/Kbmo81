document.addEventListener('DOMContentLoaded', function() {
  const mapContainer = document.getElementById('map-container');

  function showPosition() {
    // Fixed coordinates
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
const aboutTitle = document.getElementById('about-title');
const aboutContent = document.getElementById('about-content');

let aboutOpen = false;

aboutTitle.addEventListener('click', function () {
  if (aboutOpen) {
    aboutContent.style.display = 'none';
    aboutTitle.textContent = 'About Me ';
    aboutOpen = false;
  } else {
    aboutContent.style.display = 'inline';
    aboutTitle.textContent = 'About Me';
    aboutOpen = true;
  }
});
const hobbiesTitle = document.getElementById('hobbies-title');
const hobbiesList = document.getElementById('hobbies-list');

let hobbiesOpen = false;

hobbiesTitle.addEventListener('click', function () {
  if (hobbiesOpen) {
    hobbiesList.style.display = 'none';
    hobbiesTitle.textContent = 'Hobbies';
    hobbiesOpen = false;
  } else {
    hobbiesList.style.display = 'block';
    hobbiesTitle.textContent = 'Hobbies';
    hobbiesOpen = true;
  }
});

const goalsTitle = document.getElementById('goals-title');
const goalsList = document.getElementById('goals-list');

let goalsOpen = false;

goalsTitle.addEventListener('click', function () {
  if (goalsOpen) {
    goalsList.style.display = 'none';
    goalsTitle.textContent = 'Goals ';
    goalsOpen = false;
  } else {
    goalsList.style.display = 'block';
    goalsTitle.textContent = 'Goals ';
    goalsOpen = true;
  }
});

const contactTitle = document.getElementById('contact-title');
const contactContent = document.getElementById('contact-content');

let contactOpen = false;

contactTitle.addEventListener('click', function () {
  if (contactOpen) {
    contactContent.style.display = 'none';
    contactTitle.textContent = 'Contact Me';
    contactOpen = false;
  } else {
    contactContent.style.display = 'inline';
    contactTitle.textContent = 'Contact Me ';
    contactOpen = true;
  }
});


