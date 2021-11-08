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

let pimg1 = document.querySelector(".pimg75");
let pname1 = document.querySelector(".pname75");
let price1 = document.querySelector(".price75");

let pimg2 = document.querySelector(".pimg76");
let pname2 = document.querySelector(".pname76");
let price2 = document.querySelector(".price76");

let pimg3 = document.querySelector(".pimg77");
let pname3 = document.querySelector(".pname77");
let price3 = document.querySelector(".price77");

let pimg4 = document.querySelector(".pimg78");
let pname4 = document.querySelector(".pname78");
let price4 = document.querySelector(".price78");

let pimg5 = document.querySelector(".pimg79");
let pname5 = document.querySelector(".pname79");
let price5 = document.querySelector(".price79");

let pimg6 = document.querySelector(".pimg80");
let pname6 = document.querySelector(".pname80");
let price6 = document.querySelector(".price80");

let pimg7 = document.querySelector(".pimg81");
let pname7 = document.querySelector(".pname81");
let price7 = document.querySelector(".price81");

let pimg8 = document.querySelector(".pimg82");
let pname8 = document.querySelector(".pname82");
let price8 = document.querySelector(".price82");

let pimg9 = document.querySelector(".pimg83");
let pname9 = document.querySelector(".pname83");
let price9 = document.querySelector(".price83");

let pimg10 = document.querySelector(".pimg84");
let pname10 = document.querySelector(".pname84");
let price10 = document.querySelector(".price84");

let pimg11 = document.querySelector(".pimg85");
let pname11 = document.querySelector(".pname85");
let price11 = document.querySelector(".price85");

let pimg12 = document.querySelector(".pimg86");
let pname12 = document.querySelector(".pname86");
let price12 = document.querySelector(".price86");

let pimg13 = document.querySelector(".pimg87");
let pname13 = document.querySelector(".pname87");
let price13 = document.querySelector(".price87");

let pimg14 = document.querySelector(".pimg88");
let pname14 = document.querySelector(".pname88");
let price14 = document.querySelector(".price88");

let pimg15 = document.querySelector(".pimg89");
let pname15 = document.querySelector(".pname89");
let price15 = document.querySelector(".price89");

let pimg16 = document.querySelector(".pimg90");
let pname16 = document.querySelector(".pname90");
let price16 = document.querySelector(".price90");

let pimg17 = document.querySelector(".pimg91");
let pname17 = document.querySelector(".pname91");
let price17 = document.querySelector(".price91");

let pimg18 = document.querySelector(".pimg92");
let pname18 = document.querySelector(".pname92");
let price18 = document.querySelector(".price92");

let pimg19 = document.querySelector(".pimg93");
let pname19 = document.querySelector(".pname93");
let price19 = document.querySelector(".price93");

let pimg20 = document.querySelector(".pimg94");
let pname20 = document.querySelector(".pname94");
let price20 = document.querySelector(".price94");

let pimg21 = document.querySelector(".pimg95");
let pname21 = document.querySelector(".pname95");
let price21 = document.querySelector(".price95");

let pimg22 = document.querySelector(".pimg96");
let pname22 = document.querySelector(".pname96");
let price22 = document.querySelector(".price96");

let pimg23 = document.querySelector(".pimg97");
let pname23 = document.querySelector(".pname97");
let price23 = document.querySelector(".price97");

let pimg24 = document.querySelector(".pimg98");
let pname24 = document.querySelector(".pname98");
let price24 = document.querySelector(".price98");

let pimg25 = document.querySelector(".pimg99");
let pname25 = document.querySelector(".pname99");
let price25 = document.querySelector(".price99");

let pimg26 = document.querySelector(".pimg100");
let pname26 = document.querySelector(".pname100");
let price26 = document.querySelector(".price100");

let pimg27 = document.querySelector(".pimg101");
let pname27 = document.querySelector(".pname101");
let price27 = document.querySelector(".price101");

let pimg28 = document.querySelector(".pimg102");
let pname28 = document.querySelector(".pname102");
let price28 = document.querySelector(".price102");

let pimg29 = document.querySelector(".pimg103");
let pname29 = document.querySelector(".pname103");
let price29 = document.querySelector(".price103");

let pimg30 = document.querySelector(".pimg104");
let pname30 = document.querySelector(".pname104");
let price30 = document.querySelector(".price104");

let pimg31 = document.querySelector(".pimg105");
let pname31 = document.querySelector(".pname105");
let price31 = document.querySelector(".price105");

let pimg32 = document.querySelector(".pimg106");
let pname32 = document.querySelector(".pname106");
let price32 = document.querySelector(".price106");

let pimg33 = document.querySelector(".pimg107");
let pname33 = document.querySelector(".pname107");
let price33 = document.querySelector(".price107");

let pimg34 = document.querySelector(".pimg108");
let pname34 = document.querySelector(".pname108");
let price34 = document.querySelector(".price108");

let pimg35 = document.querySelector(".pimg109");
let pname35 = document.querySelector(".pname109");
let price35 = document.querySelector(".price109");

let pimg36 = document.querySelector(".pimg110");
let pname36 = document.querySelector(".pname110");
let price36 = document.querySelector(".price110");

let pimg37 = document.querySelector(".pimg111");
let pname37 = document.querySelector(".pname111");
let price37 = document.querySelector(".price111");

let pimg38 = document.querySelector(".pimg112");
let pname38 = document.querySelector(".pname112");
let price38 = document.querySelector(".price112");

let pimg39 = document.querySelector(".pimg113");
let pname39 = document.querySelector(".pname113");
let price39 = document.querySelector(".price113");

fetch("/newSkin-care.json")
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

    pname29.innerText = data[28].title;
    pimg29.src = data[28].image;
    price29.innerHTML = data[28].Price;

    pname30.innerText = data[29].title;
    pimg30.src = data[29].image;
    price30.innerHTML = data[29].Price;

    pname31.innerText = data[30].title;
    pimg31.src = data[30].image;
    price31.innerHTML = data[30].Price;

    pname32.innerText = data[31].title;
    pimg32.src = data[31].image;
    price32.innerHTML = data[31].Price;

    pname33.innerText = data[32].title;
    pimg33.src = data[32].image;
    price33.innerHTML = data[32].Price;

    pname34.innerText = data[33].title;
    pimg34.src = data[33].image;
    price34.innerHTML = data[33].Price;

    pname35.innerText = data[34].title;
    pimg35.src = data[34].image;
    price35.innerHTML = data[34].Price;

    pname36.innerText = data[35].title;
    pimg36.src = data[35].image;
    price36.innerHTML = data[35].Price;

    pname37.innerText = data[36].title;
    pimg37.src = data[36].image;
    price37.innerHTML = data[36].Price;

    pname38.innerText = data[37].title;
    pimg38.src = data[37].image;
    price38.innerHTML = data[37].Price;

    pname39.innerText = data[38].title;
    pimg39.src = data[38].image;
    price39.innerHTML = data[38].Price;

});

let notif = document.querySelector(".smallnot");

if (localStorage.length != 0) {
  notif.style.visibility = "visible";
}

