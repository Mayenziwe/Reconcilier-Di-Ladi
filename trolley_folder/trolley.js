let mbtn = document.querySelector(".menbtn");
let drpmenu = document.querySelector("#drpmenu");
let drmenuimg = document.querySelector(".drmenuimg");
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



let checkoutbtn = document.querySelector(".checkoutbtn");

let prices = document.querySelectorAll(".price");
let qtys = document.querySelectorAll(".selector");
let imgs = document.querySelectorAll(".pimg");
let names = document.querySelectorAll(".pname");
let arrprices = [];
let tstys2 = [];
let arrnames = [];
for (let i = 0; i < names.length; i++) {
  arrnames[arrnames.length] = names[i].innerHTML;
  
}

function checkout(){
  let prices = document.querySelectorAll(".price");
  let qtys = document.querySelectorAll(".selector");
  let ordsumm = document.querySelector('.ordsumm');
  let displtot = document.querySelector(".sumtot");
  ordsumm.style.visibility = 'visible';
  ordsumm.style.opacity = '1';
  var total = 0;
  for (let i = 0; i < prices.length; i++) {
    let answer = prices[i].innerHTML;
    answer = answer.substring(1);
    answer = answer.replace(/<\/?[^>]+(>|$)/g, ".");
    let cutter = answer.length - 1;
    answer = answer.substring(0,cutter);
    arrprices[arrprices.length] = answer;
    answer = answer * qtys[i].value;
    tstys2[tstys2.length] = qtys[i].value;
    total += answer;
    total = Math.round(total * 100) / 100;
  }
  displtot.innerHTML = `<span>Amount Due: R ${total} <span class="ammsg"><strong>(Excl. delivery)</strong></span></span> <span class="stinfo"><i class="fas fa-info-circle"></i> Delivery amount to be calculated in next steps</span>`;
  if(total >= 850){
    let ammsg = document.querySelector('.ammsg');
    let stinfo = document.querySelector('.stinfo');
    ammsg.innerHTML = '<strong>(Incl. delivery)</strong>';
    stinfo.style.visibility = 'hidden';
    
  }
  sumdispl();
  let custod = {
    prodpr: arrprices,
    prodnm: arrnames,
    prodqty: tstys2,
    prodtot: total,
  };
  localStorage.setItem("custoder", JSON.stringify(custod));
  window.scrollTo(0,0);
  
}
checkoutbtn.addEventListener('click', checkout);

let fillprod = document.querySelector('.ordcont');
function sumdispl(){
for (let j = 0; j < prices.length; j++) {
  fillprod.innerHTML += `<div class="orditem">
              <span class="itimg"><img src="${imgs[j].src}" alt=""></span>
              <span class="itname">${names[j].innerHTML}</span>
              <span class="itqty">${qtys[j].value}</span>
              <span class="itprice">${prices[j].innerHTML}</span>
            </div>`;
}

}
let cross = document.querySelector('.cross');

function crclick(){
  let ordsumm = document.querySelector(".ordsumm");
  ordsumm.style.visibility = "hidden";
  ordsumm.style.opacity = "0";
  fillprod.innerHTML = `<div class="orditem">
              <span class="itimg">Product</span>
              <span class="itname">Item Name</span>
              <span class="itqty">Qty</span>
              <span class="itprice">Price</span>
            </div>`;
}
cross.addEventListener('click', crclick);

let prev = document.querySelector('.backbtn');
function goback(){
  window.history.back();
}
prev.addEventListener('click',goback);

let emptbask = document.querySelector('.emptbask');
let trollprod = document.querySelector(".trollpro");
if(trollprod.innerHTML.length === 649){
  trollprod.innerHTML += `<div class="emptbask">
          <span class="oops"><i class="far fa-sad-tear"></i> Looks like your basket is currently empty</span>
          <div class="opbtns">
          <a href="/perfmes_folder/perfumes.html" class="perfop opbtn">Browse Perfumes</a>
          <a href="/makup_folder/makeup.html" class="makop opbtn">Browse Make-up</a>
          <a href="/nails_folder/nails.html" class="nailfop opbtn">Browse Nails</a>
          <a href="/skin-care_folder/skinc.html" class="skinfop opbtn">Browse Skin-care</a>
          </div>
        </div>`;

}
// else if(localStorage.length != 0){
//   emptbask.style.visibility ='hidden';
// }
if(localStorage.length != 0){
let prodskinc = localStorage.getItem('prodskinc');
let prodnails = localStorage.getItem('prodnails');
let prodmakeup = localStorage.getItem('prodmakeup');
let prodperfumes = localStorage.getItem('prodperfumes');
if(localStorage.getItem('prodskinc') != null && prodskinc.length === 2){
  localStorage.removeItem('prodskinc');
  window.location.reload(true);
}
if (localStorage.getItem("prodnails") != null && prodnails.length === 2) {
  localStorage.removeItem("prodnails");
  window.location.reload(true);
}
if (localStorage.getItem('prodmakeup') != null && prodmakeup.length === 2) {
  localStorage.removeItem("prodmakeup");
  window.location.reload(true);
}
if (localStorage.getItem('prodperfumes') != null && prodperfumes.length === 2) {
  localStorage.removeItem("prodperfumes");
  window.location.reload(true);
}
}

