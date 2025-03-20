// Grab the input element and buttons by their IDs
const dynamicInput = document.getElementById('dynamic-input');
const titleBtn = document.getElementById('title-btn');
const articleBtn = document.getElementById('article-btn');
const chatBtn = document.getElementById('chat-btn');

// Add click event listeners to update the placeholder text
titleBtn.addEventListener('click', () => {
  dynamicInput.placeholder = 'Enter your title request...';
});

articleBtn.addEventListener('click', () => {
  dynamicInput.placeholder = 'Enter article topic...';
});

chatBtn.addEventListener('click', () => {
  dynamicInput.placeholder = 'Enter your chat message...';
});

// Load navbar
fetch("../navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch((error) => console.error("Error loading navbar:", error));
