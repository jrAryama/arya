function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let modeBtn = document.querySelector("#mode");
let currMode = "white";

modeBtn.addEventListener("click", () => {
  if (currMode === "white") {
    currMode = "colorful";
    document.body.style.background = "linear-gradient(#eefff9, #ffccc1, #dcdbff)";
  } else {
    currMode = "white";
    document.body.style.background = "white";
  }
});
