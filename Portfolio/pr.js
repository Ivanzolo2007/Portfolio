// Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save user preference to localStorage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
});

// Check for saved user preference for dark mode
const isDarkMode = localStorage.getItem("dark-mode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}

// Filter Projects
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    const projectTitle = project.querySelector("a").textContent.toLowerCase();
    if (projectTitle.includes(searchTerm)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});

// Modal
const hireModal = document.getElementById("hireModal");
const hireButton = document.querySelector(".hire-button");
const closeButton = document.querySelector(".close");

hireButton.addEventListener("click", () => {
  hireModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  hireModal.style.display = "none";
});

window.addEventListener("click");

function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementsByClassName("content")[0].style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementsByClassName("content")[0].style.marginLeft = "0";
}
