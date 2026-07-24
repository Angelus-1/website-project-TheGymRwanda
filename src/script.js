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
