const express = require('express');
const app = express();
const PORT = 3000;

// Your portfolio data
const about = {
  text: 'Hii! I am a first-year B.Tech student in the Department of Engineering Design at IIT Madras. I am interested in web development, gaming, football, and building cool technical projects.'
};

const hobbies = [
  'Football',
  'Gaming',
  'Watching Anime',
  'Sketching',
  'Playing Guitar(Just a beginner)',
];

const goals = [
  'Get a good grasp about HTML, CSS, and JavaScript',
  'Learn to build cool web apps',
  'Develop innovative technical projects',
];

const contact = {
  linkedinText: 'Mounith K B',
  linkedinUrl: 'https://www.linkedin.com/in/mounith-k-b-09b613385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  instagramText: '_mounith_.11',
  instagramUrl: 'https://www.instagram.com/_mounith_.11?igsh=MTAwbzA0eGd6ejZwMw==',
};

// Allow browser to call this API from your HTML file
const cors = require('cors');
app.use(cors());

// About endpoint
app.get('/api/about', (req, res) => {
  res.status(200).json({ success: true, data: about });
});

// Hobbies endpoint
app.get('/api/hobbies', (req, res) => {
  res.status(200).json({ success: true, data: hobbies });
});

// Goals endpoint
app.get('/api/goals', (req, res) => {
  res.status(200).json({ success: true, data: goals });
});

// Contact endpoint
app.get('/api/contact', (req, res) => {
  res.status(200).json({ success: true, data: contact });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
