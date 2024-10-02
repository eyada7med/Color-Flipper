const color = ["red", "green", "blue", "yellow", "rgba(133 ,123 , 456)"];
const btn = document.getElementById("btn");
const color1 = document.querySelector("span");

btn.addEventListener("click", function () {
  const rondom1 = rondom();
  document.body.style.backgroundColor = color[rondom1];
  color1.textContent = color[rondom1];
});

function rondom() {
  return Math.floor(Math.random() * color.length);
}
