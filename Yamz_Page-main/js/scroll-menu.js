window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const menuLinks = document.querySelectorAll(".menu nav ul li a");
    
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      menuLinks.forEach(link => link.style.color = "#000"); // Set menu links to black on scroll
    } else {
      header.classList.remove("scrolled");
      menuLinks.forEach(link => link.style.color = "#fff"); // Set menu links to white at the top
    }
});