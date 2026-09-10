export default function handleMenuHamburguer(hamburguer, menu) {
  hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") {
      menu.classList.remove("active");
    }
  });
}
