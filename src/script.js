const loadComponents = (id, url, callback) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (callback) {
        callback();
      }
    });
};

window.addEventListener("load", () => {
  loadComponents("navbar", "./src/sections/navbar.html", () => {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      menuBtn.classList.add("hidden");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.classList.remove("hidden");
    });
  });

  loadComponents("footer", "./src/sections/footer.html");
});
