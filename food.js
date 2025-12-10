// Highlight "Food" link in the nav when on this page
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === "food.html") {
      link.classList.add("active");
    }
  });

  console.log("Philadelphia Food Spots page loaded!");
});
