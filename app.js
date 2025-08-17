11/* Created by Tivotal */

const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open");
});

function createHearts() {
  const heartsContainer = document.querySelector(".hearts");
  for (let i = 0; i < 15; i++) {
      let heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      heartsContainer.appendChild(heart);
      setTimeout(() => { heart.remove(); }, 5000);
  }
}

setInterval(createHearts, 1000);
