let mbtn = document.querySelector(".menbtn");
let drpmenu = document.querySelector("#drpmenu");
let vmbt = document.querySelector(".vmbt");
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

let vmbtstat = false;

function vmbtcl(){
    if(vmbtstat === false){
        vmbt.innerHTML = "View less";
        vmbtstat = true;
    }
    else{
        vmbt.innerHTML = "View more";
        vmbtstat = false;
    }
}
let bknum = document.querySelector('.bknum');
if (localStorage.getItem("sentbooking")){
  let snti = JSON.parse(localStorage.getItem("sentbooking"));
  bknum.innerHTML = "1";
}
let order = document.querySelector('.ordnum');
if (localStorage.getItem("sentclient")){
  let snto = JSON.parse(localStorage.getItem("sentclient"));
  order.innerHTML = "1";
}