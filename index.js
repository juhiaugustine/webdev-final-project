const header = document.querySelector("header");
const menu = document.getElementById("menu-icon");
const navlist = document.querySelector(".navlist");
const form = document.getElementById("contact-us-form");

function handleForm(event) {
  event.preventDefault();
}

function submitContactUsForm() {
  const name = form.elements.name;
  const email = form.elements.email;
  const feedback = form.elements.feedback;
  if (name != "" && email != "" && feedback != "") {
    const snackBar = document.getElementById("snackbar");
    snackBar.className = "show";
    setTimeout(function () {
      snackBar.className = snackBar.className.replace("show", "");
    }, 3000);
    form.reset();
  }
}

form.addEventListener("submit", handleForm);

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};
