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



let pimg1 = document.querySelector(".pimg47");
let pname1 = document.querySelector(".pname47");
let price1 = document.querySelector(".price47");

let pimg2 = document.querySelector(".pimg48");
let pname2 = document.querySelector(".pname48");
let price2 = document.querySelector(".price48");

let pimg3 = document.querySelector(".pimg49");
let pname3 = document.querySelector(".pname49");
let price3 = document.querySelector(".price49");

let pimg4 = document.querySelector(".pimg50");
let pname4 = document.querySelector(".pname50");
let price4 = document.querySelector(".price50");

let pimg5 = document.querySelector(".pimg51");
let pname5 = document.querySelector(".pname51");
let price5 = document.querySelector(".price51");

let pimg6 = document.querySelector(".pimg52");
let pname6 = document.querySelector(".pname52");
let price6 = document.querySelector(".price52");

let pimg7 = document.querySelector(".pimg53");
let pname7 = document.querySelector(".pname53");
let price7 = document.querySelector(".price53");

let pimg8 = document.querySelector(".pimg54");
let pname8 = document.querySelector(".pname54");
let price8 = document.querySelector(".price54");

let pimg9 = document.querySelector(".pimg55");
let pname9 = document.querySelector(".pname55");
let price9 = document.querySelector(".price55");

let pimg10 = document.querySelector(".pimg56");
let pname10 = document.querySelector(".pname56");
let price10 = document.querySelector(".price56");

let pimg11 = document.querySelector(".pimg57");
let pname11 = document.querySelector(".pname57");
let price11 = document.querySelector(".price57");

let pimg12 = document.querySelector(".pimg58");
let pname12 = document.querySelector(".pname58");
let price12 = document.querySelector(".price58");

let pimg13 = document.querySelector(".pimg59");
let pname13 = document.querySelector(".pname59");
let price13 = document.querySelector(".price59");

let pimg14 = document.querySelector(".pimg60");
let pname14 = document.querySelector(".pname60");
let price14 = document.querySelector(".price60");

let pimg15 = document.querySelector(".pimg61");
let pname15 = document.querySelector(".pname61");
let price15 = document.querySelector(".price61");

let pimg16 = document.querySelector(".pimg62");
let pname16 = document.querySelector(".pname62");
let price16 = document.querySelector(".price62");

let pimg17 = document.querySelector(".pimg63");
let pname17 = document.querySelector(".pname63");
let price17 = document.querySelector(".price63");

let pimg18 = document.querySelector(".pimg64");
let pname18 = document.querySelector(".pname64");
let price18 = document.querySelector(".price64");

let pimg19 = document.querySelector(".pimg65");
let pname19 = document.querySelector(".pname65");
let price19 = document.querySelector(".price65");

let pimg20 = document.querySelector(".pimg66");
let pname20 = document.querySelector(".pname66");
let price20 = document.querySelector(".price66");

let pimg21 = document.querySelector(".pimg67");
let pname21 = document.querySelector(".pname67");
let price21 = document.querySelector(".price67");

let pimg22 = document.querySelector(".pimg68");
let pname22 = document.querySelector(".pname68");
let price22 = document.querySelector(".price68");

let pimg23 = document.querySelector(".pimg69");
let pname23 = document.querySelector(".pname69");
let price23 = document.querySelector(".price69");

let pimg24 = document.querySelector(".pimg70");
let pname24 = document.querySelector(".pname70");
let price24 = document.querySelector(".price70");

let pimg25 = document.querySelector(".pimg71");
let pname25 = document.querySelector(".pname71");
let price25 = document.querySelector(".price71");

let pimg26 = document.querySelector(".pimg72");
let pname26 = document.querySelector(".pname72");
let price26 = document.querySelector(".price72");

let pimg27 = document.querySelector(".pimg73");
let pname27 = document.querySelector(".pname73");
let price27 = document.querySelector(".price73");

let pimg28 = document.querySelector(".pimg74");
let pname28 = document.querySelector(".pname74");
let price28 = document.querySelector(".price74");

fetch("/newNails.json")
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

    pname7.innerText = data[6].title;
    pimg7.src = data[6].image;
    price7.innerHTML = data[6].Price;

    pname8.innerText = data[7].title;
    pimg8.src = data[7].image;
    price8.innerHTML = data[7].Price;

    pname9.innerText = data[8].title;
    pimg9.src = data[8].image;
    price9.innerHTML = data[8].Price;

    pname10.innerText = data[9].title;
    pimg10.src = data[9].image;
    price10.innerHTML = data[9].Price;

    pname11.innerText = data[10].title;
    pimg11.src = data[10].image;
    price11.innerHTML = data[10].Price;

    pname12.innerText = data[11].title;
    pimg12.src = data[11].image;
    price12.innerHTML = data[11].Price;

    pname13.innerText = data[12].title;
    pimg13.src = data[12].image;
    price13.innerHTML = data[12].Price;

    pname14.innerText = data[13].title;
    pimg14.src = data[13].image;
    price14.innerHTML = data[13].Price;

    pname15.innerText = data[14].title;
    pimg15.src = data[14].image;
    price15.innerHTML = data[14].Price;

    pname16.innerText = data[15].title;
    pimg16.src = data[15].image;
    price16.innerHTML = data[15].Price;

    pname17.innerText = data[16].title;
    pimg17.src = data[16].image;
    price17.innerHTML = data[16].Price;

    pname18.innerText = data[17].title;
    pimg18.src = data[17].image;
    price18.innerHTML = data[17].Price;

    pname19.innerText = data[18].title;
    pimg19.src = data[18].image;
    price19.innerHTML = data[18].Price;

    pname20.innerText = data[19].title;
    pimg20.src = data[19].image;
    price20.innerHTML = data[19].Price;

    pname21.innerText = data[20].title;
    pimg21.src = data[20].image;
    price21.innerHTML = data[20].Price;

    pname22.innerText = data[21].title;
    pimg22.src = data[21].image;
    price22.innerHTML = data[21].Price;

    pname23.innerText = data[22].title;
    pimg23.src = data[22].image;
    price23.innerHTML = data[22].Price;

    pname24.innerText = data[23].title;
    pimg24.src = data[23].image;
    price24.innerHTML = data[23].Price;

    pname25.innerText = data[24].title;
    pimg25.src = data[24].image;
    price25.innerHTML = data[24].Price;

    pname26.innerText = data[25].title;
    pimg26.src = data[25].image;
    price26.innerHTML = data[25].Price;

    pname27.innerText = data[26].title;
    pimg27.src = data[26].image;
    price27.innerHTML = data[26].Price;

    pname28.innerText = data[27].title;
    pimg28.src = data[27].image;
    price28.innerHTML = data[27].Price;

  });
  
  let notif = document.querySelector(".smallnot");

  if (localStorage.length != 0) {
    notif.style.visibility = "visible";
  }
