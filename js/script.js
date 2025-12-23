const items = document.querySelectorAll(".product-card, .testi-card");

window.addEventListener("scroll", () => {
  items.forEach((item) => {
    const pos = item.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }
  });
});

items.forEach((item) => {
  item.style.opacity = 0;
  item.style.transform = "translateY(40px)";
  item.style.transition = "0.8s ease";
});

// =============
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ===============
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));

// =====================

let cartTotal = 0;
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    cartTotal++;
    if (cartCount) cartCount.innerText = cartTotal;
  });
});

// ======================

const cartCountEl = document.getElementById("cartCount");
let dummyCartCount = 0;

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Naikkan angka dummy
    dummyCartCount++;
    cartCountEl.innerText = dummyCartCount;

    // UX: ubah tombol
    btn.classList.add("added");
    btn.querySelector(".btn-text").innerText = "Added";
    btn.querySelector(".btn-icon").innerText = "✓";
  });
});
