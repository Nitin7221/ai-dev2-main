function changeContent(contentType) {
  document.querySelectorAll(".nav-button").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active");
  });

  const activeButton = document.querySelector(
    `[data-content="${contentType}"]`
  );
  const activeContent = document.getElementById(`${contentType}-content`);

  if (activeButton && activeContent) {
    activeButton.classList.add("active");
    activeContent.classList.add("active");
  }
}

fetch("../navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch((error) => console.error("Error loading navbar:", error));
