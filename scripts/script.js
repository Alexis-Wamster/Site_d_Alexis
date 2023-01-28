const menu = document.querySelector(".raccourcisContainer");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", function() {
	console.log("open");
	menu.style.display = 'flex';
	menu.style.top = '0';
});

closeMenu.addEventListener("click", function() {
	console.log("close");
	menu.style.top = '-100%';
});