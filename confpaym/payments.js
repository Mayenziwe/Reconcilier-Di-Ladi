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

let dsmry = document.querySelector(".dsmry");
let am = document.querySelector(".am");
let spfadress = document.querySelector(".spfadress");
let spemail = document.querySelector(".spemail");
var sentclient = JSON.parse(localStorage.getItem("sentclient"));
/*For testing Reasons
console.log(sentclient);*/

if (sentclient.custod.prodtot < 850) {
  dsmry.innerHTML = `<span class="dsmrys"><i class="fas fa-dot-circle"></i> National Delivery SA</span>
          <span class="dlam">R 99.00</span>`;
  let tsum = sentclient.custod.prodtot + 99;
  am.innerHTML = `R ${tsum}`;
} else {
  dsmry.innerHTML = `<span class="dsmrys"><i class="fas fa-truck"></i> You Qualify for Free Delivery</span>`;

  let tsum = sentclient.custod.prodtot;
  am.innerHTML = `R ${tsum}`;
}
spemail.innerHTML = `${sentclient.email1}`;
spfadress.innerHTML = `${sentclient.address1} ${sentclient.suburb1} ${sentclient.city1} ${sentclient.province1}`;
