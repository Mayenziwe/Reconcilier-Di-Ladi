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

let notif = document.querySelector(".smallnot");

if (localStorage.length != 0) {
  notif.style.visibility = "visible";
}
/* let arrPackages = [];
let pkgname1 = document.querySelector(".servcont1head");
console.log(pkgname1.innerText);
let Package1 = function () {
  let pkgname1 = document.querySelector(".servcont1head");
  
  let tstatus = false;
  for (let i = 0; i < arrperfumes.length; i++) {
    if (arrperfumes[i].tname === pkgname1.innerText) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    
    let objpackage1 = {
      tname: pkgname1.innerText,
      tcontent:``
    };
    arrPackages[arrPackages.length] = objpackage1;
    runaf();
  } else if (tstatus === true) {
    var st_arrperfumes = JSON.parse(localStorage.getItem("prodperfumes"));
    for (let g = 0; g < st_arrperfumes.length; g++) {
      if (st_arrperfumes[g].tname != tname) {
        runaf();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
}; */
var selected = false;
let slst = false;
let contbt = document.querySelector(".servcontbtn");
let notif2 = document.querySelector("#notif");
let pkgs = document.querySelector(".packages");
let slbtnc = document.querySelector(".sltbtnc");
let vpnot = document.querySelector('.vpnot');
let dtwarn = document.querySelector('.dtwarn');
let flashmsg = document.querySelector('.flashmsg');
let servconthead = document.querySelectorAll(".servconthead");
let cloaprv = document.querySelector('.fa-times-circle');
var clt;
var booking;
let servcont1 = document.querySelector("#servcont1");
let servcont2 = document.querySelector("#servcont2");
let servcont3 = document.querySelector("#servcont3");
let servcont4 = document.querySelector("#servcont4");
let servcont5 = document.querySelector("#servcont5");
let servcont6 = document.querySelector("#servcont6");
let srvcnts = [
  servcont1,
  servcont2,
  servcont3,
  servcont4,
  servcont5,
  servcont6,
];
dtwarn.style.display = "none";
if (selected === false) {
  contbt.style.display = "none";
  slbtnc.style.display = "none";
  dtwarn.style.display = "none";
} else if (selected === true) {
  contbt.style.display = "flex";
  slbtnc.style.display = "flex";
}
flashmsg.style.display = "none";
function selproc(btn) {
  if (slst === false) {
    for (let i = 0; i < srvcnts.length; i++) {
      if (btn.id !== srvcnts[i].id) {
        slst = true;
        selected = true;
        srvcnts[i].style.display = "none";
        notif2.innerHTML = `<i class="fas fa-info-circle"></i> Click on service to unselect your option`;
        notif2.style.display = "flex";
      }
      else{
        clt = servconthead[i].innerText;
      }
    }
  } else {
    for (let i = 0; i < srvcnts.length; i++) {
      if (btn.id !== srvcnts[i].id) {
        slst = false;
        selected = false;
        srvcnts[i].style.display = "flex";
        notif2.style.display = "none";
      }
    }
  }
  if (selected === false) {
    contbt.style.display = "none";
    slbtnc.style.display = "none";
  } else if (selected === true) {
    contbt.style.display = "flex";
    slbtnc.style.display = "flex";
  }
}

function pridate(){
  if(!slbtnc.value) {
    console.log('empty');
    dtwarn.style.display = "flex";
  }
  else{
    dtwarn.style.display = "none";
    console.log('has value');
    let an = slbtnc.value;
    an = an.replace("T", " ");
    booking = {
      title: clt,
      date: an
    }
    sendBkg();
    flashmsg.style.display = "flex";
  }
}
function closemsg(){
  flashmsg.style.display = "none";
  window.location.reload(true);
}
cloaprv.addEventListener('click', closemsg);
function sendBkg() {
  localStorage.setItem("sentbooking", JSON.stringify(booking));
}