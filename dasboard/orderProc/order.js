const sentclient = JSON.parse(localStorage.getItem("sentclient"));
let mbtn = document.querySelector(".menbtn");
let drpmenu = document.querySelector("#drpmenu");
let togstat = false;
let mbtnev = function () {
  if (togstat === false) {
    drpmenu.style.visibility = "visible";
    drpmenu.style.opacity = "1";
    mbtn.style.transform = "rotate(90deg)";
    drpmenu.style.width = "50%";
    togstat = true;
  } else if (togstat === true) {
    drpmenu.style.visibility = "hidden";
    drpmenu.style.opacity = "0";
    mbtn.style.transform = "rotate(180deg)";
    drpmenu.style.width = "0";
    togstat = false;
  }
};
mbtn.addEventListener("click", mbtnev);

function mbtnevclo() {
  drpmenu.style.visibility = "hidden";
  drpmenu.style.opacity = "0";
  mbtn.style.transform = "rotate(180deg)";
  drpmenu.style.width = "0";
  togstat = false;
}

let sumord = document.querySelector(".orders");
if (localStorage.getItem("sentclient")) {
  let snti = JSON.parse(localStorage.getItem("sentclient"));
  sumord.innerHTML += `<div class="sumdiv"><span>Order placed</span><span>${snti.namee1}</span><span>TBC</span></div>`;
}