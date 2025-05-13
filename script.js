const themeButton = document.getElementById("toggleTheme");
const animationButton = document.getElementById("startAnimation");
const ball = document.getElementById("ball");

// Load preferences
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const isBouncing = localStorage.getItem("bounceActive");

  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    document.body.classList.add("light");
  }

  if (isBouncing === "true") {
    ball.classList.add("bounce");
  }
};

// Toggle theme and save preference
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

// Start/stop animation and save preference
animationButton.addEventListener("click", () => {
  ball.classList.toggle("bounce");

  const isActive = ball.classList.contains("bounce");
  localStorage.setItem("bounceActive", isActive);
});
