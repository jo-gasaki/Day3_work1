function clickHandler() {
  const box = document.getElementById("box");
  const p = document.createElement("p");
  p.innerHTML = "Added by JS";
  box.appendChild(p);
}