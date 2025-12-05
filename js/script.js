// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
  navbarNav.classList.remove("active");
}
})

// cart section
const cartDrawer = document.querySelector(".cart-drawer");
const cartButton = document.querySelector("#shopping-cart");
const closeCart = document.querySelector("#close-cart");

// buka cart + scroll ke menu
cartButton.onclick = (e) => {
  e.preventDefault(); // biar tidak reload halaman

  // scroll halus ke section menu
  document.querySelector("#menu").scrollIntoView({
    behavior: "smooth"
  });

  // setelah scroll sedikit → buka drawer
  setTimeout(() => {
    cartDrawer.classList.add("active");
  }, 400);
};

// tombol tutup
closeCart.onclick = () => {
  cartDrawer.classList.remove("active");
};

