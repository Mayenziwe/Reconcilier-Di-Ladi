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

let myform = document.querySelector("#myform");
let tpo = document.querySelector(".tpo");
let client;
function sendcli() {
  localStorage.setItem("sentclient", JSON.stringify(client));
  
}
let errors = [];
function getcli_i() {
  let namee = document.querySelector("#name").value;
  let surname = document.querySelector("#surname").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let address = document.querySelector("#address").value;
  let suburb = document.querySelector("#suburb").value;
  let city = document.querySelector("#city").value;
  let province = document.querySelector("#province").value;
  let phone2 = document.querySelector("#phone2").value;
  var custmod = JSON.parse(localStorage.getItem("custoder"));
  client = {
    namee1: namee,
    surname1: surname,
    email1: email,
    phone1: phone,
    address1: address,
    suburb1: suburb,
    city1: city,
    province1: province,
    phone21: phone2,
    custod: custmod,
  };
  // console.log(client.custod);
  sendcli();
}

function sclinfo() {
  /* if (!namee || !surname || !email || !phone) {
    errors.push({
      msg: "please fill in the all fields",
    });
  }
  if (!address || !suburb || !city || !province || !phone2) {
    errors.push({
      msg: "please fill in the all fields",
    });
  } */
  getcli_i();
}

tpo.addEventListener("click", sclinfo);
