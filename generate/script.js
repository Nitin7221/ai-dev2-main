function changeContent(contentType) {
  // Remove active class from all buttons and content
  document.querySelectorAll(".nav-button").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active");
  });

  // Add active class to clicked button and corresponding content
  const activeButton = document.querySelector(
    `[data-content="${contentType}"]`
  );
  const activeContent = document.getElementById(`${contentType}-content`);

  if (activeButton && activeContent) {
    activeButton.classList.add("active");
    activeContent.classList.add("active");
  }
}

// Load navbar
fetch("../navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch((error) => console.error("Error loading navbar:", error));
