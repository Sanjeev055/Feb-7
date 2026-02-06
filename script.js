// Create falling rose petals
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = "🌹";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 3 + 3) + "s";
  petal.style.fontSize = (Math.random() * 20 + 15) + "px";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 7000);
}

// Generate petals continuously
setInterval(createPetal, 300);

// Button click magic
document.getElementById("magicBtn").addEventListener("click", () => {
  alert("Some emotions are too quiet for words, so I send them to you as a rose🌹");
});
