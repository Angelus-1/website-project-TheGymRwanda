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

    if (document.location.pathname != "/") {
      document
        .querySelector("#navbar #menu-btn img ")
        .setAttribute("src", "/src/assets/green-menu-icon.webp");
    }

    const mobileHeader = document.getElementById("mobile-header");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      mobileHeader.classList.add("hidden");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileHeader.classList.remove("hidden");
    });
  });

  loadComponents("footer", "./src/sections/footer.html");
});
