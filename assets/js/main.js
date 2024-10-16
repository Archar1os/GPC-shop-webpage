/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
	navToggle.addEventListener("click", () => {
		navToggle.classList.add("show-none");
	});
	navToggle.addEventListener("click", () => {
		navClose.classList.remove("show-none");
	});
}
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
	navClose.addEventListener("click", () => {
		navToggle.classList.remove("show-none");
	});
	navClose.addEventListener("click", () => {
		navClose.classList.add("show-none");
	});
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
