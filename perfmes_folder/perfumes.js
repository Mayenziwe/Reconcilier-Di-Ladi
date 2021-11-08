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

let pimg1 = document.querySelector(".pimg1");
let pname1 = document.querySelector(".pname1");
let price1 = document.querySelector(".price1");

let pimg2 = document.querySelector(".pimg2");
let pname2 = document.querySelector(".pname2");
let price2 = document.querySelector(".price2");

let pimg3 = document.querySelector(".pimg3");
let pname3 = document.querySelector(".pname3");
let price3 = document.querySelector(".price3");

let pimg4 = document.querySelector(".pimg4");
let pname4 = document.querySelector(".pname4");
let price4 = document.querySelector(".price4");

let pimg5 = document.querySelector(".pimg5");
let pname5 = document.querySelector(".pname5");
let price5 = document.querySelector(".price5");

let pimg6 = document.querySelector(".pimg6");
let pname6 = document.querySelector(".pname6");
let price6 = document.querySelector(".price6");


fetch("/newProducts.json")
  .then((results) => results.json())
  .then((data) => {
    
    pname1.innerText = data[0].title;
    pimg1.src = data[0].image;
    price1.innerHTML = data[0].Price;

    pname2.innerText = data[1].title;
    pimg2.src = data[1].image;
    price2.innerHTML = data[1].Price;

    pname3.innerText = data[2].title;
    pimg3.src = data[2].image;
    price3.innerHTML = data[2].Price;

    pname4.innerText = data[3].title;
    pimg4.src = data[3].image;
    price4.innerHTML = data[3].Price;

    pname5.innerText = data[4].title;
    pimg5.src = data[4].image;
    price5.innerHTML = data[4].Price;

    pname6.innerText = data[5].title;
    pimg6.src = data[5].image;
    price6.innerHTML = data[5].Price;
});

let notif = document.querySelector(".smallnot");

if (localStorage.length != 0) {
  notif.style.visibility = "visible";
}

/*for (let i = 0; i < data.length; i++) {
      answer = data[i].price;
      answer = answer.substring(1);
      answer = answer.replace(/<\/?[^>]+(>|$)/g, ".");
      let cutter = answer.length - 1;
      answer = answer.substring(0, cutter);
      answer = answer * 0.15;
      
    }

*/

