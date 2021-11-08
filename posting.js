let pimg = document.querySelector(".pimg");
let pname = document.querySelector(".pname");
let price1 = document.querySelector(".price");

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

let pimg7 = document.querySelector(".pimg7");
let pname7 = document.querySelector(".pname7");
let price7 = document.querySelector(".price7");

let pcdimg1 = document.querySelector(".pcdimg1");
let cc1pdimg = document.querySelector("#cc1pdimg");
let cc2pdimg = document.querySelector("#cc2pdimg");
let cc3pdimg = document.querySelector("#cc3pdimg");



fetch("./newDeals.json")
  .then((results) => results.json())
  .then((data) => {
    pname.innerText = data[0].title;
    pimg.src = data[0].image;
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

    pname7.innerText = data[6].title;
    pimg7.src = data[6].image;
    price7.innerHTML = data[6].Price;
});



fetch("./newProducts.json")
  .then((results) => results.json())
  .then((data) => {
    setInterval(function(){
        let random = Math.floor(Math.random() * 10);
        pcdimg1.src = data[random].image;
    }, 4000);
  });






fetch("./newMakeup.json")
  .then((results) => results.json())
  .then((data) => {
    setInterval(function(){
        let random = Math.floor(Math.random() * 40);
        cc1pdimg.src = data[random].image;
    }, 4000);
  });



fetch("./newNails.json")
  .then((results) => results.json())
  .then((data) => {
    setInterval(function(){
        let random = Math.floor(Math.random() * 28);
        cc2pdimg.src = data[random].image;
    }, 4000);
  });

fetch("./newSkin-care.json")
  .then((results) => results.json())
  .then((data) => {
    setInterval(function(){
        let random = Math.floor(Math.random() * 39);
        cc3pdimg.src = data[random].image;
    }, 4000);
  });
