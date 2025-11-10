document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  Array.from(links).forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.innerText;

      history.pushState(null, null, `#${page.toLowerCase()}`);

      transitionalPages.forEach((pageElem) => {
        if (page === pageElem.dataset.page) {
          pageElem.classList.add("active-page");
        } else {
          pageElem.classList.remove("active-page");
        }
      });
    });
  });

  if (history.state.title) {
    const pageName = history.state.title.toLowerCase();
    document.querySelector(`#${pageName}`).classList.add("active-page");
  }
});
window.addEventListener("popstate", function (e) {
  const pageName = location.hash.slice(1);
  document.querySelector(`#${pageName}`).classList.add("active-page");
  // Update transitionalPages array for accessibility
  transitionalPages.forEach((pageElem) => {
    if (pageName === pageElem.dataset.page) {
      pageElem.classList.add("active-page");
    } else {
      pageElem.classList.remove("active-page");
    }
  });
});

