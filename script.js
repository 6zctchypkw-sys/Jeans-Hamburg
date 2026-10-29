document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "SCHLIESSEN ×" : "MENÜ ☰";
    });
  }
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll("form[data-demo-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const note = form.querySelector("[data-form-note]");
      if (note) note.textContent = "Vielen Dank! Dieses Formular ist eine Design-Demo und noch nicht mit einem E-Mail-System verbunden.";
    });
  });
});
