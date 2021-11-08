/*Sending Perfumes*/
/*----------perfume1---------- */
let arrperfumes = [];
let arrmakeup = [];
let arrnails = [];
let arrskinc = [];
let arrtopd = [];
/*Top-Deals Start*/

let checktopd1 = function () {
  let pnametd1 = document.querySelector(".pnametd1");
  let pricetd1 = document.querySelector(".pricetd1");
  let pimgtd1 = document.querySelector(".pimgtd1");
  let tstatus = false;
  for (let i = 0; i < arrtopd.length; i++) {
    if (arrtopd[i].tname === pnametd1.innerHTML) {
      tstatus = true;
    } 
  };
  if (tstatus === false) {
    let pf1pl = "pf1pltd";
    let min1pl = "min1pltd";
    let pfqty1 = "pfqtytd1";
    let delt1 = "delttd1";
    let prtopd1 = {
      tname: pnametd1.innerHTML,
      tprice: pricetd1.innerHTML,
      timg: pimgtd1.src,
      plbtn: pf1pl,
      minbtn: min1pl,
      qty: pfqty1,
      del: delt1,
    };
    arrtopd[arrtopd.length] = prtopd1;
    runaftd();
  } else if (tstatus === true) {
    var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
    for (let g = 0; g < st_arrtopd.length; g++) {
      if (st_arrtopd[g].tname != tname) {
        runaftd();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

let checktopd2 = function () {
  let pnametd2 = document.querySelector(".pnametd2");
  let pricetd2 = document.querySelector(".pricetd2");
  let pimgtd2 = document.querySelector(".pimgtd2");
  let tstatus = false;
  for (let i = 0; i < arrtopd.length; i++) {
    if (arrtopd[i].tname === pnametd2.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf2pl = "pf2pltd";
    let min2pl = "min2pltd";
    let pfqty2 = "pfqtytd2";
    let delt2 = "delttd2";
    let prtopd2 = {
      tname: pnametd2.innerHTML,
      tprice: pricetd2.innerHTML,
      timg: pimgtd2.src,
      plbtn: pf2pl,
      minbtn: min2pl,
      qty: pfqty2,
      del: delt2,
    };
    arrtopd[arrtopd.length] = prtopd2;

    runaftd();
  } else if (tstatus === true) {
    var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
    for (let g = 0; g < st_arrtopd.length; g++) {
      if (st_arrtopd[g].tname != tname) {
        runaftd();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

let checktopd3 = function () {
  let pnametd3 = document.querySelector(".pnametd3");
  let pricetd3 = document.querySelector(".pricetd3");
  let pimgtd3 = document.querySelector(".pimgtd3");
  let tstatus = false;
  for (let i = 0; i < arrtopd.length; i++) {
    if (arrtopd[i].tname === pnametd3.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf3pl = "pf3pltd";
    let min3pl = "min3pltd";
    let pfqty3 = "pfqtytd3";
    let delt3 = "delttd3";
    let prtopd3 = {
      tname: pnametd3.innerHTML,
      tprice: pricetd3.innerHTML,
      timg: pimgtd3.src,
      plbtn: pf3pl,
      minbtn: min3pl,
      qty: pfqty3,
      del: delt3,
    };
    arrtopd[arrtopd.length] = prtopd3;
    runaftd();
  } else if (tstatus === true) {
    var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
    for (let g = 0; g < st_arrtopd.length; g++) {
      if (st_arrtopd[g].tname != tname) {
        runaftd();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

let checktopd4 = function () {
  let pnametd4 = document.querySelector(".pnametd4");
  let pricetd4 = document.querySelector(".pricetd4");
  let pimgtd4 = document.querySelector(".pimgtd4");
  let tstatus = false;
  for (let i = 0; i < arrtopd.length; i++) {
    if (arrtopd[i].tname === pnametd4.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf4pl = "pf4pltd";
    let min4pl = "min4pltd";
    let pfqty4 = "pfqtytd4";
    let delt4 = "delttd4";
    let prtopd4 = {
      tname: pnametd4.innerHTML,
      tprice: pricetd4.innerHTML,
      timg: pimgtd4.src,
      plbtn: pf4pl,
      minbtn: min4pl,
      qty: pfqty4,
      del: delt4,
    };
    arrtopd[arrtopd.length] = prtopd4;
    runaftd();
  } else if (tstatus === true) {
    var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
    for (let g = 0; g < st_arrtopd.length; g++) {
      if (st_arrtopd[g].tname != tname) {
        runaftd();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

let checktopd5 = function () {
  let pnametd5 = document.querySelector(".pnametd5");
  let pricetd5 = document.querySelector(".pricetd5");
  let pimgtd5 = document.querySelector(".pimgtd5");
  let tstatus = false;
  for (let i = 0; i < arrtopd.length; i++) {
    if (arrtopd[i].tname === pnametd5.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf5pl = "pf5pltd";
    let min5pl = "min5pltd";
    let pfqty5 = "pfqtytd5";
    let delt5 = "delttd5";
    let prtopd5 = {
      tname: pnametd5.innerHTML,
      tprice: pricetd5.innerHTML,
      timg: pimgtd5.src,
      plbtn: pf5pl,
      minbtn: min5pl,
      qty: pfqty5,
      del: delt5,
    };
    arrtopd[arrtopd.length] = prtopd5;
    runaftd();
  } else if (tstatus === true) {
    var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
    for (let g = 0; g < st_arrtopd.length; g++) {
      if (st_arrtopd[g].tname != tname) {
        runaftd();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

let checktopd6 = function () {
  let pnametd6 = document.querySelector(".pnametd6");
  let pricetd6 = document.querySelector(".pricetd6");
  let pimgtd6 = document.querySelector(".pimgtd6");
  let tstatus = false;
  for (let i = 0; i < arrtopd.length; i++) {
    if (arrtopd[i].tname === pnametd6.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf6pl = "pf6pltd";
    let min6pl = "min6pltd";
    let pfqty6 = "pfqtytd6";
    let delt6 = "delttd6";
    let prtopd6 = {
      tname: pnametd6.innerHTML,
      tprice: pricetd6.innerHTML,
      timg: pimgtd6.src,
      plbtn: pf6pl,
      minbtn: min6pl,
      qty: pfqty6,
      del: delt6,
    };
    arrtopd[arrtopd.length] = prtopd6;
    runaftd();
  } else if (tstatus === true) {
    var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
    for (let g = 0; g < st_arrtopd.length; g++) {
      if (st_arrtopd[g].tname != tname) {
        runaftd()
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};



let checktopd7 = function () {
  let pnametd7 = document.querySelector(".pnametd7");
  let pricetd7 = document.querySelector(".pricetd7");
  let pimgtd7 = document.querySelector(".pimgtd7");
  let tstatus = false;
  for (let i = 0; i < arrtopd.length; i++) {
    if (arrtopd[i].tname === pnametd7.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf7pl = "pf7pltd";
    let min7pl = "min7pltd";
    let pfqty7 = "pfqtytd7";
    let delt7 = "delttd7";
    let prtopd7 = {
      tname: pnametd7.innerHTML,
      tprice: pricetd7.innerHTML,
      timg: pimgtd7.src,
      plbtn: pf7pl,
      minbtn: min7pl,
      qty: pfqty7,
      del: delt7,
    };
    arrtopd[arrtopd.length] = prtopd7;
    runaftd();
  } 
  else if (tstatus === true) {
    var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
    for (let g = 0; g < st_arrtopd.length; g++) {
      if (st_arrtopd[g].tname != tname) {
        runaftd();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*Top-Deals End*/

let checkdlp1 = function () {
  let pname1 = document.querySelector(".pname1");
  let price1 = document.querySelector(".price1");
  let pimg1 = document.querySelector(".pimg1");
  let tstatus = false;
  for (let i = 0; i < arrperfumes.length; i++) {
    if (arrperfumes[i].tname === pname1.innerHTML) {
      tstatus = true;
    } 
  };
  if (tstatus === false) {
    let pf1pl = "pf1pl";
    let min1pl = "min1pl";
    let pfqty1 = "pfqty1";
    let delt1 = "delt1";
    let perfume1 = {
      tname: pname1.innerHTML,
      tprice: price1.innerHTML,
      timg: pimg1.src,
      plbtn: pf1pl,
      minbtn: min1pl,
      qty: pfqty1,
      del: delt1,
    };
    arrperfumes[arrperfumes.length] = perfume1;
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
};

/*----------perfume2---------- */
let checkdlp2 = function () {
  let pname2 = document.querySelector(".pname2");
  let price2 = document.querySelector(".price2");
  let pimg2 = document.querySelector(".pimg2");
  let tstatus = false;
  for (let i = 0; i < arrperfumes.length; i++) {
    if (arrperfumes[i].tname === pname2.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf2pl = "pf2pl";
    let min2pl = "min2pl";
    let pfqty2 = "pfqty2";
    let delt2 = "delt2";
    let perfume2 = {
      tname: pname2.innerHTML,
      tprice: price2.innerHTML,
      timg: pimg2.src,
      plbtn: pf2pl,
      minbtn: min2pl,
      qty: pfqty2,
      del: delt2,
    };
    arrperfumes[arrperfumes.length] = perfume2;

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
};

/*----------perfume3---------- */
let checkdlp3 = function () {
  let pname3 = document.querySelector(".pname3");
  let price3 = document.querySelector(".price3");
  let pimg3 = document.querySelector(".pimg3");
  let tstatus = false;
  for (let i = 0; i < arrperfumes.length; i++) {
    if (arrperfumes[i].tname === pname3.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf3pl = "pf3pl";
    let min3pl = "min3pl";
    let pfqty3 = "pfqty3";
    let delt3 = "delt3";
    let perfume3 = {
      tname: pname3.innerHTML,
      tprice: price3.innerHTML,
      timg: pimg3.src,
      plbtn: pf3pl,
      minbtn: min3pl,
      qty: pfqty3,
      del: delt3,
    };
    arrperfumes[arrperfumes.length] = perfume3;
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
};

/*----------perfume4---------- */
let checkdlp4 = function () {
  let pname4 = document.querySelector(".pname4");
  let price4 = document.querySelector(".price4");
  let pimg4 = document.querySelector(".pimg4");
  let tstatus = false;
  for (let i = 0; i < arrperfumes.length; i++) {
    if (arrperfumes[i].tname === pname4.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf4pl = "pf4pl";
    let min4pl = "min4pl";
    let pfqty4 = "pfqty4";
    let delt4 = "delt4";
    let perfume = {
      tname: pname4.innerHTML,
      tprice: price4.innerHTML,
      timg: pimg4.src,
      plbtn: pf4pl,
      minbtn: min4pl,
      qty: pfqty4,
      del: delt4,
    };
    arrperfumes[arrperfumes.length] = perfume;
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
};

/*----------perfume5---------- */
let checkdlp5 = function () {
  let pname5 = document.querySelector(".pname5");
  let price5 = document.querySelector(".price5");
  let pimg5 = document.querySelector(".pimg5");
  let tstatus = false;
  for (let i = 0; i < arrperfumes.length; i++) {
    if (arrperfumes[i].tname === pname5.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf5pl = "pf5pl";
    let min5pl = "min5pl";
    let pfqty5 = "pfqty5";
    let delt5 = "delt5";
    let perfume = {
      tname: pname5.innerHTML,
      tprice: price5.innerHTML,
      timg: pimg5.src,
      plbtn: pf5pl,
      minbtn: min5pl,
      qty: pfqty5,
      del: delt5,
    };
    arrperfumes[arrperfumes.length] = perfume;
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
};

/*----------perfume6---------- */
let checkdlp6 = function () {
  let pname6 = document.querySelector(".pname6");
  let price6 = document.querySelector(".price6");
  let pimg6 = document.querySelector(".pimg6");
  let tstatus = false;
  for (let i = 0; i < arrperfumes.length; i++) {
    if (arrperfumes[i].tname === pname6.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf6pl = "pf6pl";
    let min6pl = "min6pl";
    let pfqty6 = "pfqty6";
    let delt6 = "delt6";
    let perfume = {
      tname: pname6.innerHTML,
      tprice: price6.innerHTML,
      timg: pimg6.src,
      plbtn: pf6pl,
      minbtn: min6pl,
      qty: pfqty6,
      del: delt6,
    };
    arrperfumes[arrperfumes.length] = perfume;
    runaf();
  } else if (tstatus === true) {
    var st_arrperfumes = JSON.parse(localStorage.getItem("prodperfumes"));
    for (let g = 0; g < st_arrperfumes.length; g++) {
      if (st_arrperfumes[g].tname != tname) {
        runaf()
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*Sending Perfumes End*/
/*Sending Make-up start*/
/*--------makeup1-------*/
let checkdlp7 = function () {
  let pname7 = document.querySelector(".pname7");
  let price7 = document.querySelector(".price7");
  let pimg7 = document.querySelector(".pimg7");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname7.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf7pl = "pf7pl";
    let min7pl = "min7pl";
    let pfqty7 = "pfqty7";
    let delt7 = "delt7";
    let perfume = {
      tname: pname7.innerHTML,
      tprice: price7.innerHTML,
      timg: pimg7.src,
      plbtn: pf7pl,
      minbtn: min7pl,
      qty: pfqty7,
      del: delt7,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup2---------- */
let checkdlp8 = function () {
  let pname8 = document.querySelector(".pname8");
  let price8 = document.querySelector(".price8");
  let pimg8 = document.querySelector(".pimg8");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname8.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf8pl = "pf8pl";
    let min8pl = "min8pl";
    let pfqty8 = "pfqty8";
    let delt8 = "delt8";
    let perfume = {
      tname: pname8.innerHTML,
      tprice: price8.innerHTML,
      timg: pimg8.src,
      plbtn: pf8pl,
      minbtn: min8pl,
      qty: pfqty8,
      del: delt8,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup3---------- */
let checkdlp9 = function () {
  let pname9 = document.querySelector(".pname9");
  let price9 = document.querySelector(".price9");
  let pimg9 = document.querySelector(".pimg9");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname9.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf9pl = "pf9pl";
    let min9pl = "min9pl";
    let pfqty9 = "pfqty9";
    let delt9 = "delt9";
    let perfume = {
      tname: pname9.innerHTML,
      tprice: price9.innerHTML,
      timg: pimg9.src,
      plbtn: pf9pl,
      minbtn: min9pl,
      qty: pfqty9,
      del: delt9,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup4---------- */
let checkdlp10 = function () {
  let pname10 = document.querySelector(".pname10");
  let price10 = document.querySelector(".price10");
  let pimg10 = document.querySelector(".pimg10");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname10.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf10pl = "pf10pl";
    let min10pl = "min10pl";
    let pfqty10 = "pfqty10";
    let delt10 = "delt10";
    let perfume = {
      tname: pname10.innerHTML,
      tprice: price10.innerHTML,
      timg: pimg10.src,
      plbtn: pf10pl,
      minbtn: min10pl,
      qty: pfqty10,
      del: delt10,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup5---------- */
let checkdlp11 = function () {
  let pname11 = document.querySelector(".pname11");
  let price11 = document.querySelector(".price11");
  let pimg11 = document.querySelector(".pimg11");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname11.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf11pl = "pf11pl";
    let min11pl = "min11pl";
    let pfqty11 = "pfqty11";
    let delt11 = "delt11";
    let perfume = {
      tname: pname11.innerHTML,
      tprice: price11.innerHTML,
      timg: pimg11.src,
      plbtn: pf11pl,
      minbtn: min11pl,
      qty: pfqty11,
      del: delt11,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup6---------- */
let checkdlp12 = function () {
  let pname12 = document.querySelector(".pname12");
  let price12 = document.querySelector(".price12");
  let pimg12 = document.querySelector(".pimg12");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname12.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf12pl = "pf12pl";
    let min12pl = "min12pl";
    let pfqty12 = "pfqty12";
    let delt12 = "delt12";
    let perfume = {
      tname: pname12.innerHTML,
      tprice: price12.innerHTML,
      timg: pimg12.src,
      plbtn: pf12pl,
      minbtn: min12pl,
      qty: pfqty12,
      del: delt12,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------makeup7---------- */
let checkdlp13 = function () {
  let pname13 = document.querySelector(".pname13");
  let price13 = document.querySelector(".price13");
  let pimg13 = document.querySelector(".pimg13");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname13.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf13pl = "pf13pl";
    let min13pl = "min13pl";
    let pfqty13 = "pfqty13";
    let delt13 = "delt13";
    let perfume = {
      tname: pname13.innerHTML,
      tprice: price13.innerHTML,
      timg: pimg13.src,
      plbtn: pf13pl,
      minbtn: min13pl,
      qty: pfqty13,
      del: delt13,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup8---------- */
let checkdlp14 = function () {
  let pname14 = document.querySelector(".pname14");
  let price14 = document.querySelector(".price14");
  let pimg14 = document.querySelector(".pimg14");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname14.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf14pl = "pf14pl";
    let min14pl = "min14pl";
    let pfqty14 = "pfqty14";
    let delt14 = "delt14";
    let perfume = {
      tname: pname14.innerHTML,
      tprice: price14.innerHTML,
      timg: pimg14.src,
      plbtn: pf14pl,
      minbtn: min14pl,
      qty: pfqty14,
      del: delt14,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup9---------- */
let checkdlp15 = function () {
  let pname15 = document.querySelector(".pname15");
  let price15 = document.querySelector(".price15");
  let pimg15 = document.querySelector(".pimg15");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname15.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf15pl = "pf15pl";
    let min15pl = "min15pl";
    let pfqty15 = "pfqty15";
    let delt15 = "delt15";
    let perfume = {
      tname: pname15.innerHTML,
      tprice: price15.innerHTML,
      timg: pimg15.src,
      plbtn: pf15pl,
      minbtn: min15pl,
      qty: pfqty15,
      del: delt15,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup10----------*/
let checkdlp16 = function () {
  let pname16 = document.querySelector(".pname16");
  let price16 = document.querySelector(".price16");
  let pimg16 = document.querySelector(".pimg16");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname16.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf16pl = "pf16pl";
    let min16pl = "min16pl";
    let pfqty16 = "pfqty16";
    let delt16 = "delt16";
    let perfume = {
      tname: pname16.innerHTML,
      tprice: price16.innerHTML,
      timg: pimg16.src,
      plbtn: pf16pl,
      minbtn: min16pl,
      qty: pfqty16,
      del: delt16,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup11---------- */
let checkdlp17 = function () {
  let pname17 = document.querySelector(".pname17");
  let price17 = document.querySelector(".price17");
  let pimg17 = document.querySelector(".pimg17");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname17.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf17pl = "pf17pl";
    let min17pl = "min17pl";
    let pfqty17 = "pfqty17";
    let delt17 = "delt17";
    let perfume = {
      tname: pname17.innerHTML,
      tprice: price17.innerHTML,
      timg: pimg17.src,
      plbtn: pf17pl,
      minbtn: min17pl,
      qty: pfqty17,
      del: delt17,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------makeup12---------- */
let checkdlp18 = function () {
  let pname18 = document.querySelector(".pname18");
  let price18 = document.querySelector(".price18");
  let pimg18 = document.querySelector(".pimg18");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname18.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf18pl = "pf18pl";
    let min18pl = "min18pl";
    let pfqty18 = "pfqty18";
    let delt18 = "delt18";
    let perfume = {
      tname: pname18.innerHTML,
      tprice: price18.innerHTML,
      timg: pimg18.src,
      plbtn: pf18pl,
      minbtn: min18pl,
      qty: pfqty18,
      del: delt18,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup13----------*/
let checkdlp19 = function () {
  let pname19 = document.querySelector(".pname19");
  let price19 = document.querySelector(".price19");
  let pimg19 = document.querySelector(".pimg19");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname19.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf19pl = "pf19pl";
    let min19pl = "min19pl";
    let pfqty19 = "pfqty19";
    let delt19 = "delt19";
    let perfume = {
      tname: pname19.innerHTML,
      tprice: price19.innerHTML,
      timg: pimg19.src,
      plbtn: pf19pl,
      minbtn: min19pl,
      qty: pfqty19,
      del: delt19,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup14---------- */
let checkdlp20 = function () {
  let pname20 = document.querySelector(".pname20");
  let price20 = document.querySelector(".price20");
  let pimg20 = document.querySelector(".pimg20");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname20.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf20pl = "pf20pl";
    let min20pl = "min20pl";
    let pfqty20 = "pfqty20";
    let delt20 = "delt20";
    let perfume = {
      tname: pname20.innerHTML,
      tprice: price20.innerHTML,
      timg: pimg20.src,
      plbtn: pf20pl,
      minbtn: min20pl,
      qty: pfqty20,
      del: delt20,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------makeup15---------- */
let checkdlp21 = function () {
  let pname21 = document.querySelector(".pname21");
  let price21 = document.querySelector(".price21");
  let pimg21 = document.querySelector(".pimg21");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname21.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf21pl = "pf21pl";
    let min21pl = "min21pl";
    let pfqty21 = "pfqty21";
    let delt21 = "delt21";
    let perfume = {
      tname: pname21.innerHTML,
      tprice: price21.innerHTML,
      timg: pimg21.src,
      plbtn: pf21pl,
      minbtn: min21pl,
      qty: pfqty21,
      del: delt21,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup16---------- */
let checkdlp22 = function () {
  let pname22 = document.querySelector(".pname22");
  let price22 = document.querySelector(".price22");
  let pimg22 = document.querySelector(".pimg22");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname22.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf22pl = "pf22pl";
    let min22pl = "min22pl";
    let pfqty22 = "pfqty22";
    let delt22 = "delt22";
    let perfume = {
      tname: pname22.innerHTML,
      tprice: price22.innerHTML,
      timg: pimg22.src,
      plbtn: pf22pl,
      minbtn: min22pl,
      qty: pfqty22,
      del: delt22,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup17----------*/
let checkdlp23 = function () {
  let pname23 = document.querySelector(".pname23");
  let price23 = document.querySelector(".price23");
  let pimg23 = document.querySelector(".pimg23");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname23.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf23pl = "pf23pl";
    let min23pl = "min23pl";
    let pfqty23 = "pfqty23";
    let delt23 = "delt23";
    let perfume = {
      tname: pname23.innerHTML,
      tprice: price23.innerHTML,
      timg: pimg23.src,
      plbtn: pf23pl,
      minbtn: min23pl,
      qty: pfqty23,
      del: delt23,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------makeup18---------- */
let checkdlp24 = function () {
  let pname24 = document.querySelector(".pname24");
  let price24 = document.querySelector(".price24");
  let pimg24 = document.querySelector(".pimg24");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname24.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf24pl = "pf24pl";
    let min24pl = "min17pl";
    let pfqty24 = "pfqty24";
    let delt24 = "delt24";
    let perfume = {
      tname: pname24.innerHTML,
      tprice: price24.innerHTML,
      timg: pimg24.src,
      plbtn: pf24pl,
      minbtn: min24pl,
      qty: pfqty24,
      del: delt24,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------makeup19---------- */
let checkdlp25 = function () {
  let pname25 = document.querySelector(".pname25");
  let price25 = document.querySelector(".price25");
  let pimg25 = document.querySelector(".pimg25");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname25.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf25pl = "pf25pl";
    let min25pl = "min25pl";
    let pfqty25 = "pfqty25";
    let delt25 = "delt25";
    let perfume = {
      tname: pname25.innerHTML,
      tprice: price25.innerHTML,
      timg: pimg25.src,
      plbtn: pf25pl,
      minbtn: min25pl,
      qty: pfqty25,
      del: delt25,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------makeup20----------*/
let checkdlp26 = function () {
  let pname26 = document.querySelector(".pname26");
  let price26 = document.querySelector(".price26");
  let pimg26 = document.querySelector(".pimg26");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname26.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf26pl = "pf26pl";
    let min26pl = "min26pl";
    let pfqty26 = "pfqty26";
    let delt26 = "delt26";
    let perfume = {
      tname: pname26.innerHTML,
      tprice: price26.innerHTML,
      timg: pimg26.src,
      plbtn: pf26pl,
      minbtn: min26pl,
      qty: pfqty26,
      del: delt26,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*---------makeup21-------*/
let checkdlp27 = function () {
  let pname27 = document.querySelector(".pname27");
  let price27 = document.querySelector(".price27");
  let pimg27 = document.querySelector(".pimg27");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname27.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf27pl = "pf27pl";
    let min27pl = "min27pl";
    let pfqty27 = "pfqty27";
    let delt27 = "delt27";
    let perfume = {
      tname: pname27.innerHTML,
      tprice: price27.innerHTML,
      timg: pimg27.src,
      plbtn: pf27pl,
      minbtn: min27pl,
      qty: pfqty27,
      del: delt27,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup22---------- */
let checkdlp28 = function () {
  let pname28 = document.querySelector(".pname28");
  let price28 = document.querySelector(".price28");
  let pimg28 = document.querySelector(".pimg28");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname28.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf28pl = "pf28pl";
    let min28pl = "min28pl";
    let pfqty28 = "pfqty28";
    let delt28 = "delt28";
    let perfume = {
      tname: pname28.innerHTML,
      tprice: price28.innerHTML,
      timg: pimg28.src,
      plbtn: pf28pl,
      minbtn: min28pl,
      qty: pfqty28,
      del: delt28,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup23---------- */
let checkdlp29 = function () {
  let pname29 = document.querySelector(".pname29");
  let price29 = document.querySelector(".price29");
  let pimg29 = document.querySelector(".pimg29");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname29.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf29pl = "pf29pl";
    let min29pl = "min29pl";
    let pfqty29 = "pfqty29";
    let delt29 = "delt29";
    let perfume = {
      tname: pname29.innerHTML,
      tprice: price29.innerHTML,
      timg: pimg29.src,
      plbtn: pf29pl,
      minbtn: min29pl,
      qty: pfqty29,
      del: delt29,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup24---------- */
let checkdlp30 = function () {
  let pname30 = document.querySelector(".pname30");
  let price30 = document.querySelector(".price30");
  let pimg30 = document.querySelector(".pimg30");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname30.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf30pl = "pf30pl";
    let min30pl = "min30pl";
    let pfqty30 = "pfqty30";
    let delt30 = "delt30";
    let perfume = {
      tname: pname30.innerHTML,
      tprice: price30.innerHTML,
      timg: pimg30.src,
      plbtn: pf30pl,
      minbtn: min30pl,
      qty: pfqty30,
      del: delt30,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup25---------- */
let checkdlp31 = function () {
  let pname31 = document.querySelector(".pname31");
  let price31 = document.querySelector(".price31");
  let pimg31 = document.querySelector(".pimg31");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname31.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf31pl = "pf31pl";
    let min31pl = "min31pl";
    let pfqty31 = "pfqty31";
    let delt31 = "delt31";
    let perfume = {
      tname: pname31.innerHTML,
      tprice: price31.innerHTML,
      timg: pimg31.src,
      plbtn: pf31pl,
      minbtn: min31pl,
      qty: pfqty31,
      del: delt31,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup26---------- */
let checkdlp32 = function () {
  let pname32 = document.querySelector(".pname32");
  let price32 = document.querySelector(".price32");
  let pimg32 = document.querySelector(".pimg32");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname32.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf32pl = "pf32pl";
    let min32pl = "min32pl";
    let pfqty32 = "pfqty32";
    let delt32 = "delt32";
    let perfume = {
      tname: pname32.innerHTML,
      tprice: price32.innerHTML,
      timg: pimg32.src,
      plbtn: pf32pl,
      minbtn: min32pl,
      qty: pfqty32,
      del: delt32,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*--------makeup27-------*/
let checkdlp33 = function () {
  let pname33 = document.querySelector(".pname33");
  let price33 = document.querySelector(".price33");
  let pimg33 = document.querySelector(".pimg33");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname33.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf33pl = "pf33pl";
    let min33pl = "min33pl";
    let pfqty33 = "pfqty33";
    let delt33 = "delt33";
    let perfume = {
      tname: pname33.innerHTML,
      tprice: price33.innerHTML,
      timg: pimg33.src,
      plbtn: pf33pl,
      minbtn: min33pl,
      qty: pfqty33,
      del: delt33,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

 /*----------makeup28---------- */
let checkdlp34 = function () {
  let pname34 = document.querySelector(".pname34");
  let price34 = document.querySelector(".price34");
  let pimg34 = document.querySelector(".pimg34");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname34.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf34pl = "pf34pl";
    let min34pl = "min34pl";
    let pfqty34 = "pfqty34";
    let delt34 = "delt34";
    let perfume = {
      tname: pname34.innerHTML,
      tprice: price34.innerHTML,
      timg: pimg34.src,
      plbtn: pf34pl,
      minbtn: min34pl,
      qty: pfqty34,
      del: delt34,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------makeup29---------- */
let checkdlp35 = function () {
  let pname35 = document.querySelector(".pname35");
  let price35 = document.querySelector(".price35");
  let pimg35 = document.querySelector(".pimg35");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname35.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf35pl = "pf35pl";
    let min35pl = "min35pl";
    let pfqty35 = "pfqty35";
    let delt35 = "delt35";
    let perfume = {
      tname: pname35.innerHTML,
      tprice: price35.innerHTML,
      timg: pimg35.src,
      plbtn: pf35pl,
      minbtn: min35pl,
      qty: pfqty35,
      del: delt35,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------makeup30---------- */
let checkdlp36 = function () {
  let pname36 = document.querySelector(".pname36");
  let price36 = document.querySelector(".price36");
  let pimg36 = document.querySelector(".pimg36");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname36.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf36pl = "pf36pl";
    let min36pl = "min36pl";
    let pfqty36 = "pfqty36";
    let delt36 = "delt36";
    let perfume = {
      tname: pname36.innerHTML,
      tprice: price36.innerHTML,
      timg: pimg36.src,
      plbtn: pf36pl,
      minbtn: min36pl,
      qty: pfqty36,
      del: delt36,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------makeup31---------- */
let checkdlp37 = function () {
  let pname37 = document.querySelector(".pname37");
  let price37 = document.querySelector(".price37");
  let pimg37 = document.querySelector(".pimg37");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname37.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf37pl = "pf37pl";
    let min37pl = "min37pl";
    let pfqty37 = "pfqty37";
    let delt37 = "delt37";
    let perfume = {
      tname: pname37.innerHTML,
      tprice: price37.innerHTML,
      timg: pimg37.src,
      plbtn: pf37pl,
      minbtn: min37pl,
      qty: pfqty37,
      del: delt37,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

 /*----------makeup32---------- */
let checkdlp38 = function () {
  let pname38 = document.querySelector(".pname38");
  let price38 = document.querySelector(".price38");
  let pimg38 = document.querySelector(".pimg38");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname38.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf38pl = "pf38pl";
    let min38pl = "min38pl";
    let pfqty38 = "pfqty38";
    let delt38 = "delt38";
    let perfume = {
      tname: pname38.innerHTML,
      tprice: price38.innerHTML,
      timg: pimg38.src,
      plbtn: pf38pl,
      minbtn: min38pl,
      qty: pfqty38,
      del: delt38,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
// /*----------makeup33---------- */
let checkdlp39 = function () {
  let pname39 = document.querySelector(".pname39");
  let price39 = document.querySelector(".price39");
  let pimg39 = document.querySelector(".pimg39");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname39.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf39pl = "pf39pl";
    let min39pl = "min39pl";
    let pfqty39 = "pfqty39";
    let delt39 = "delt39";
    let perfume = {
      tname: pname39.innerHTML,
      tprice: price39.innerHTML,
      timg: pimg39.src,
      plbtn: pf39pl,
      minbtn: min39pl,
      qty: pfqty39,
      del: delt39,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup34---------- */
let checkdlp40 = function () {
  let pname40 = document.querySelector(".pname40");
  let price40 = document.querySelector(".price40");
  let pimg40 = document.querySelector(".pimg40");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname40.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf40pl = "pf40pl";
    let min40pl = "min40pl";
    let pfqty40 = "pfqty40";
    let delt40 = "delt40";
    let perfume = {
      tname: pname40.innerHTML,
      tprice: price40.innerHTML,
      timg: pimg40.src,
      plbtn: pf40pl,
      minbtn: min40pl,
      qty: pfqty40,
      del: delt40,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup35---------- */
let checkdlp41 = function () {
  let pname41 = document.querySelector(".pname41");
  let price41 = document.querySelector(".price41");
  let pimg41 = document.querySelector(".pimg41");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname41.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf41pl = "pf41pl";
    let min41pl = "min41pl";
    let pfqty41 = "pfqty41";
    let delt41 = "delt41";
    let perfume = {
      tname: pname41.innerHTML,
      tprice: price41.innerHTML,
      timg: pimg41.src,
      plbtn: pf41pl,
      minbtn: min41pl,
      qty: pfqty41,
      del: delt41,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------makeup36----------*/
let checkdlp42 = function () {
  let pname42 = document.querySelector(".pname42");
  let price42 = document.querySelector(".price42");
  let pimg42 = document.querySelector(".pimg42");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname42.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf42pl = "pf42pl";
    let min42pl = "min42pl";
    let pfqty42 = "pfqty42";
    let delt42 = "delt42";
    let perfume = {
      tname: pname42.innerHTML,
      tprice: price42.innerHTML,
      timg: pimg42.src,
      plbtn: pf42pl,
      minbtn: min42pl,
      qty: pfqty42,
      del: delt42,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } 
  else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------makeup37---------- */
let checkdlp43 = function () {
  let pname43 = document.querySelector(".pname43");
  let price43 = document.querySelector(".price43");
  let pimg43 = document.querySelector(".pimg43");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname43.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf17pl = "pf43pl";
    let min17pl = "min43pl";
    let pfqty17 = "pfqty43";
    let delt17 = "delt43";
    let perfume = {
      tname: pname43.innerHTML,
      tprice: price43.innerHTML,
      timg: pimg43.src,
      plbtn: pf17pl,
      minbtn: min17pl,
      qty: pfqty17,
      del: delt17,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
// /*----------makeup38---------- */
let checkdlp44 = function () {
  let pname18 = document.querySelector(".pname44");
  let price18 = document.querySelector(".price44");
  let pimg18 = document.querySelector(".pimg44");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname18.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf18pl = "pf44pl";
    let min18pl = "min44pl";
    let pfqty18 = "pfqty44";
    let delt18 = "delt44";
    let perfume = {
      tname: pname18.innerHTML,
      tprice: price18.innerHTML,
      timg: pimg18.src,
      plbtn: pf18pl,
      minbtn: min18pl,
      qty: pfqty18,
      del: delt18,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup39----------*/
let checkdlp45 = function () {
  let pname19 = document.querySelector(".pname45");
  let price19 = document.querySelector(".price45");
  let pimg19 = document.querySelector(".pimg45");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname19.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf19pl = "pf45pl";
    let min19pl = "min45pl";
    let pfqty19 = "pfqty45";
    let delt19 = "delt45";
    let perfume = {
      tname: pname19.innerHTML,
      tprice: price19.innerHTML,
      timg: pimg19.src,
      plbtn: pf19pl,
      minbtn: min19pl,
      qty: pfqty19,
      del: delt19,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup40---------- */
let checkdlp46 = function () {
  let pname20 = document.querySelector(".pname46");
  let price20 = document.querySelector(".price46");
  let pimg20 = document.querySelector(".pimg46");
  let tstatus = false;
  for (let i = 0; i < arrmakeup.length; i++) {
    if (arrmakeup[i].tname === pname20.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf20pl = "pf46pl";
    let min20pl = "min46pl";
    let pfqty20 = "pfqty46";
    let delt20 = "delt46";
    let perfume = {
      tname: pname20.innerHTML,
      tprice: price20.innerHTML,
      timg: pimg20.src,
      plbtn: pf20pl,
      minbtn: min20pl,
      qty: pfqty20,
      del: delt20,
    };
    arrmakeup[arrmakeup.length] = perfume;
    runaf2();
  } else if (tstatus === true) {
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let g = 0; g < st_arrmakeup.length; g++) {
      if (st_arrmakeup[g].tname != tname) {
        runaf2();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------nail1---------- */
let checkdlp47 = function () {
  let pname21 = document.querySelector(".pname47");
  let price21 = document.querySelector(".price47");
  let pimg21 = document.querySelector(".pimg47");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname21.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf21pl = "pf47pl";
    let min21pl = "min47pl";
    let pfqty21 = "pfqty47";
    let delt21 = "delt47";
    let perfume = {
      tname: pname21.innerHTML,
      tprice: price21.innerHTML,
      timg: pimg21.src,
      plbtn: pf21pl,
      minbtn: min21pl,
      qty: pfqty21,
      del: delt21,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail2---------- */
let checkdlp48 = function () {
  let pname22 = document.querySelector(".pname48");
  let price22 = document.querySelector(".price48");
  let pimg22 = document.querySelector(".pimg48");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname22.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf22pl = "pf48pl";
    let min22pl = "min48pl";
    let pfqty22 = "pfqty48";
    let delt22 = "delt48";
    let perfume = {
      tname: pname22.innerHTML,
      tprice: price22.innerHTML,
      timg: pimg22.src,
      plbtn: pf22pl,
      minbtn: min22pl,
      qty: pfqty22,
      del: delt22,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail3----------*/
let checkdlp49 = function () {
  let pname23 = document.querySelector(".pname49");
  let price23 = document.querySelector(".price49");
  let pimg23 = document.querySelector(".pimg49");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname23.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf23pl = "pf49pl";
    let min23pl = "min49pl";
    let pfqty23 = "pfqty49";
    let delt23 = "delt49";
    let perfume = {
      tname: pname23.innerHTML,
      tprice: price23.innerHTML,
      timg: pimg23.src,
      plbtn: pf23pl,
      minbtn: min23pl,
      qty: pfqty23,
      del: delt23,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail4---------- */
let checkdlp50 = function () {
  let pname24 = document.querySelector(".pname50");
  let price24 = document.querySelector(".price50");
  let pimg24 = document.querySelector(".pimg50");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname24.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf24pl = "pf50pl";
    let min24pl = "min50pl";
    let pfqty24 = "pfqty50";
    let delt24 = "delt50";
    let perfume = {
      tname: pname24.innerHTML,
      tprice: price24.innerHTML,
      timg: pimg24.src,
      plbtn: pf24pl,
      minbtn: min24pl,
      qty: pfqty24,
      del: delt24,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------nail5---------- */
let checkdlp51 = function () {
  let pname25 = document.querySelector(".pname51");
  let price25 = document.querySelector(".price51");
  let pimg25 = document.querySelector(".pimg51");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname25.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf25pl = "pf51pl";
    let min25pl = "min51pl";
    let pfqty25 = "pfqty51";
    let delt25 = "delt51";
    let perfume = {
      tname: pname25.innerHTML,
      tprice: price25.innerHTML,
      timg: pimg25.src,
      plbtn: pf25pl,
      minbtn: min25pl,
      qty: pfqty25,
      del: delt25,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } 
  else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail6----------*/
let checkdlp52 = function () {
  let pname26 = document.querySelector(".pname52");
  let price26 = document.querySelector(".price52");
  let pimg26 = document.querySelector(".pimg52");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname26.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf26pl = "pf52pl";
    let min26pl = "min52pl";
    let pfqty26 = "pfqty52";
    let delt26 = "delt52";
    let perfume = {
      tname: pname26.innerHTML,
      tprice: price26.innerHTML,
      timg: pimg26.src,
      plbtn: pf26pl,
      minbtn: min26pl,
      qty: pfqty26,
      del: delt26,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*------nail7-------*/
let checkdlp53 = function () {
  let pname1 = document.querySelector(".pname53");
  let price1 = document.querySelector(".price53");
  let pimg1 = document.querySelector(".pimg53");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname1.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf1pl = "pf53pl";
    let min1pl = "min53pl";
    let pfqty1 = "pfqty53";
    let delt1 = "delt53";
    let perfume = {
      tname: pname1.innerHTML,
      tprice: price1.innerHTML,
      timg: pimg1.src,
      plbtn: pf1pl,
      minbtn: min1pl,
      qty: pfqty1,
      del: delt1,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail8---------- */
let checkdlp54 = function () {
  let pname2 = document.querySelector(".pname54");
  let price2 = document.querySelector(".price54");
  let pimg2 = document.querySelector(".pimg54");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname2.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf2pl = "pf54pl";
    let min2pl = "min54pl";
    let pfqty2 = "pfqty54";
    let delt2 = "delt54";
    let perfume = {
      tname: pname2.innerHTML,
      tprice: price2.innerHTML,
      timg: pimg2.src,
      plbtn: pf2pl,
      minbtn: min2pl,
      qty: pfqty2,
      del: delt2,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail9---------- */
let checkdlp55 = function () {
  let pname3 = document.querySelector(".pname55");
  let price3 = document.querySelector(".price55");
  let pimg3 = document.querySelector(".pimg55");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname3.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf3pl = "pf55pl";
    let min3pl = "min55pl";
    let pfqty3 = "pfqty55";
    let delt3 = "delt55";
    let perfume = {
      tname: pname3.innerHTML,
      tprice: price3.innerHTML,
      timg: pimg3.src,
      plbtn: pf3pl,
      minbtn: min3pl,
      qty: pfqty3,
      del: delt3,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail10---------- */
let checkdlp56 = function () {
  let pname4 = document.querySelector(".pname56");
  let price4 = document.querySelector(".price56");
  let pimg4 = document.querySelector(".pimg56");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname4.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf4pl = "pf56pl";
    let min4pl = "min56pl";
    let pfqty4 = "pfqty56";
    let delt4 = "delt56";
    let perfume = {
      tname: pname4.innerHTML,
      tprice: price4.innerHTML,
      timg: pimg4.src,
      plbtn: pf4pl,
      minbtn: min4pl,
      qty: pfqty4,
      del: delt4,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } 
  else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail11---------- */
let checkdlp57 = function () {
  let pname5 = document.querySelector(".pname57");
  let price5 = document.querySelector(".price57");
  let pimg5 = document.querySelector(".pimg57");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname5.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf5pl = "pf57pl";
    let min5pl = "min57pl";
    let pfqty5 = "pfqty57";
    let delt5 = "delt57";
    let perfume = {
      tname: pname5.innerHTML,
      tprice: price5.innerHTML,
      timg: pimg5.src,
      plbtn: pf5pl,
      minbtn: min5pl,
      qty: pfqty5,
      del: delt5,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail12---------- */
let checkdlp58 = function () {
  let pname6 = document.querySelector(".pname58");
  let price6 = document.querySelector(".price58");
  let pimg6 = document.querySelector(".pimg58");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname6.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf6pl = "pf58pl";
    let min6pl = "min58pl";
    let pfqty6 = "pfqty58";
    let delt6 = "delt58";
    let perfume = {
      tname: pname6.innerHTML,
      tprice: price6.innerHTML,
      timg: pimg6.src,
      plbtn: pf6pl,
      minbtn: min6pl,
      qty: pfqty6,
      del: delt6,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*--------nail13-------*/
let checkdlp59 = function () {
  let pname7 = document.querySelector(".pname59");
  let price7 = document.querySelector(".price59");
  let pimg7 = document.querySelector(".pimg59");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname7.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf7pl = "pf59pl";
    let min7pl = "min59pl";
    let pfqty7 = "pfqty59";
    let delt7 = "delt59";
    let perfume = {
      tname: pname7.innerHTML,
      tprice: price7.innerHTML,
      timg: pimg7.src,
      plbtn: pf7pl,
      minbtn: min7pl,
      qty: pfqty7,
      del: delt7,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail14---------- */
let checkdlp60 = function () {
  let pname8 = document.querySelector(".pname60");
  let price8 = document.querySelector(".price60");
  let pimg8 = document.querySelector(".pimg60");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname8.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf8pl = "pf60pl";
    let min8pl = "min60pl";
    let pfqty8 = "pfqty60";
    let delt8 = "delt60";
    let perfume = {
      tname: pname8.innerHTML,
      tprice: price8.innerHTML,
      timg: pimg8.src,
      plbtn: pf8pl,
      minbtn: min8pl,
      qty: pfqty8,
      del: delt8,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail15---------- */
let checkdlp61 = function () {
  let pname9 = document.querySelector(".pname61");
  let price9 = document.querySelector(".price61");
  let pimg9 = document.querySelector(".pimg61");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname9.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf9pl = "pf61pl";
    let min9pl = "min61pl";
    let pfqty9 = "pfqty61";
    let delt9 = "delt61";
    let perfume = {
      tname: pname9.innerHTML,
      tprice: price9.innerHTML,
      timg: pimg9.src,
      plbtn: pf9pl,
      minbtn: min9pl,
      qty: pfqty9,
      del: delt9,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail16---------- */
let checkdlp62 = function () {
  let pname10 = document.querySelector(".pname62");
  let price10 = document.querySelector(".price62");
  let pimg10 = document.querySelector(".pimg62");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname10.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf10pl = "pf62pl";
    let min10pl = "min62pl";
    let pfqty10 = "pfqty62";
    let delt10 = "delt62";
    let perfume = {
      tname: pname10.innerHTML,
      tprice: price10.innerHTML,
      timg: pimg10.src,
      plbtn: pf10pl,
      minbtn: min10pl,
      qty: pfqty10,
      del: delt10,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------makeup17---------- */
let checkdlp63 = function () {
  let pname11 = document.querySelector(".pname63");
  let price11 = document.querySelector(".price63");
  let pimg11 = document.querySelector(".pimg63");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname11.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf11pl = "pf63pl";
    let min11pl = "min63pl";
    let pfqty11 = "pfqty63";
    let delt11 = "delt63";
    let perfume = {
      tname: pname11.innerHTML,
      tprice: price11.innerHTML,
      timg: pimg11.src,
      plbtn: pf11pl,
      minbtn: min11pl,
      qty: pfqty11,
      del: delt11,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail18---------- */
let checkdlp64 = function () {
  let pname12 = document.querySelector(".pname64");
  let price12 = document.querySelector(".price64");
  let pimg12 = document.querySelector(".pimg64");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname12.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf12pl = "pf64pl";
    let min12pl = "min64pl";
    let pfqty12 = "pfqty64";
    let delt12 = "delt64";
    let perfume = {
      tname: pname12.innerHTML,
      tprice: price12.innerHTML,
      timg: pimg12.src,
      plbtn: pf12pl,
      minbtn: min12pl,
      qty: pfqty12,
      del: delt12,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } 
  else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------nail19---------- */
let checkdlp65 = function () {
  let pname13 = document.querySelector(".pname65");
  let price13 = document.querySelector(".price65");
  let pimg13 = document.querySelector(".pimg65");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname13.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf13pl = "pf65pl";
    let min13pl = "min65pl";
    let pfqty13 = "pfqty65";
    let delt13 = "delt65";
    let perfume = {
      tname: pname13.innerHTML,
      tprice: price13.innerHTML,
      timg: pimg13.src,
      plbtn: pf13pl,
      minbtn: min13pl,
      qty: pfqty13,
      del: delt13,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } 
  else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail20---------- */
let checkdlp66 = function () {
  let pname14 = document.querySelector(".pname66");
  let price14 = document.querySelector(".price66");
  let pimg14 = document.querySelector(".pimg66");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname14.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf14pl = "pf66pl";
    let min14pl = "min66pl";
    let pfqty14 = "pfqty66";
    let delt14 = "delt66";
    let perfume = {
      tname: pname14.innerHTML,
      tprice: price14.innerHTML,
      timg: pimg14.src,
      plbtn: pf14pl,
      minbtn: min14pl,
      qty: pfqty14,
      del: delt14,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail21---------- */
let checkdlp67 = function () {
  let pname15 = document.querySelector(".pname67");
  let price15 = document.querySelector(".price67");
  let pimg15 = document.querySelector(".pimg67");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname15.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf15pl = "pf67pl";
    let min15pl = "min67pl";
    let pfqty15 = "pfqty67";
    let delt15 = "delt67";
    let perfume = {
      tname: pname15.innerHTML,
      tprice: price15.innerHTML,
      timg: pimg15.src,
      plbtn: pf15pl,
      minbtn: min15pl,
      qty: pfqty15,
      del: delt15,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail22----------*/
let checkdlp68 = function () {
  let pname16 = document.querySelector(".pname68");
  let price16 = document.querySelector(".price68");
  let pimg16 = document.querySelector(".pimg68");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname16.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf16pl = "pf68pl";
    let min16pl = "min68pl";
    let pfqty16 = "pfqty68";
    let delt16 = "delt68";
    let perfume = {
      tname: pname16.innerHTML,
      tprice: price16.innerHTML,
      timg: pimg16.src,
      plbtn: pf16pl,
      minbtn: min16pl,
      qty: pfqty16,
      del: delt16,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail23---------- */
let checkdlp69 = function () {
  let pname17 = document.querySelector(".pname69");
  let price17 = document.querySelector(".price69");
  let pimg17 = document.querySelector(".pimg69");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname17.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf17pl = "pf69pl";
    let min17pl = "min69pl";
    let pfqty17 = "pfqty69";
    let delt17 = "delt69";
    let perfume = {
      tname: pname17.innerHTML,
      tprice: price17.innerHTML,
      timg: pimg17.src,
      plbtn: pf17pl,
      minbtn: min17pl,
      qty: pfqty17,
      del: delt17,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } 
  else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------nail24---------- */
let checkdlp70 = function () {
  let pname18 = document.querySelector(".pname70");
  let price18 = document.querySelector(".price70");
  let pimg18 = document.querySelector(".pimg70");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname18.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf18pl = "pf70pl";
    let min18pl = "min70pl";
    let pfqty18 = "pfqty70";
    let delt18 = "delt70";
    let perfume = {
      tname: pname18.innerHTML,
      tprice: price18.innerHTML,
      timg: pimg18.src,
      plbtn: pf18pl,
      minbtn: min18pl,
      qty: pfqty18,
      del: delt18,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } 
  else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail25----------*/
let checkdlp71 = function () {
  let pname19 = document.querySelector(".pname71");
  let price19 = document.querySelector(".price71");
  let pimg19 = document.querySelector(".pimg71");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname19.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf19pl = "pf71pl";
    let min19pl = "min71pl";
    let pfqty19 = "pfqty71";
    let delt19 = "delt71";
    let perfume = {
      tname: pname19.innerHTML,
      tprice: price19.innerHTML,
      timg: pimg19.src,
      plbtn: pf19pl,
      minbtn: min19pl,
      qty: pfqty19,
      del: delt19,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail26---------- */
let checkdlp72 = function () {
  let pname20 = document.querySelector(".pname72");
  let price20 = document.querySelector(".price72");
  let pimg20 = document.querySelector(".pimg72");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname20.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf20pl = "pf72pl";
    let min20pl = "min72pl";
    let pfqty20 = "pfqty72";
    let delt20 = "delt72";
    let perfume = {
      tname: pname20.innerHTML,
      tprice: price20.innerHTML,
      timg: pimg20.src,
      plbtn: pf20pl,
      minbtn: min20pl,
      qty: pfqty20,
      del: delt20,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------nail27---------- */
let checkdlp73 = function () {
  let pname21 = document.querySelector(".pname73");
  let price21 = document.querySelector(".price73");
  let pimg21 = document.querySelector(".pimg73");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname21.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf21pl = "pf73pl";
    let min21pl = "min73pl";
    let pfqty21 = "pfqty73";
    let delt21 = "delt73";
    let perfume = {
      tname: pname21.innerHTML,
      tprice: price21.innerHTML,
      timg: pimg21.src,
      plbtn: pf21pl,
      minbtn: min21pl,
      qty: pfqty21,
      del: delt21,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------nail28---------- */
let checkdlp74 = function () {
  let pname22 = document.querySelector(".pname74");
  let price22 = document.querySelector(".price74");
  let pimg22 = document.querySelector(".pimg74");
  let tstatus = false;
  for (let i = 0; i < arrnails.length; i++) {
    if (arrnails[i].tname === pname22.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf22pl = "pf74pl";
    let min22pl = "min74pl";
    let pfqty22 = "pfqty74";
    let delt22 = "delt74";
    let perfume = {
      tname: pname22.innerHTML,
      tprice: price22.innerHTML,
      timg: pimg22.src,
      plbtn: pf22pl,
      minbtn: min22pl,
      qty: pfqty22,
      del: delt22,
    };
    arrnails[arrnails.length] = perfume;
    runaf4();
  } else if (tstatus === true) {
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let g = 0; g < st_arrnails.length; g++) {
      if (st_arrnails[g].tname != tname) {
        runaf4();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin1----------*/
let checkdlp75 = function () {
  let pname23 = document.querySelector(".pname75");
  let price23 = document.querySelector(".price75");
  let pimg23 = document.querySelector(".pimg75");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname23.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf23pl = "pf75pl";
    let min23pl = "min75pl";
    let pfqty23 = "pfqty75";
    let delt23 = "delt75";
    let perfume = {
      tname: pname23.innerHTML,
      tprice: price23.innerHTML,
      timg: pimg23.src,
      plbtn: pf23pl,
      minbtn: min23pl,
      qty: pfqty23,
      del: delt23,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------skin2---------- */
let checkdlp76 = function () {
  let pname24 = document.querySelector(".pname76");
  let price24 = document.querySelector(".price76");
  let pimg24 = document.querySelector(".pimg76");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname24.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf24pl = "pf76pl";
    let min24pl = "min76pl";
    let pfqty24 = "pfqty76";
    let delt24 = "delt76";
    let perfume = {
      tname: pname24.innerHTML,
      tprice: price24.innerHTML,
      timg: pimg24.src,
      plbtn: pf24pl,
      minbtn: min24pl,
      qty: pfqty24,
      del: delt24,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } 
  else if(tstatus === true){
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
        if (st_arrskinc[g].tname != tname) {
            runaf3();
        }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------skin3---------- */
let checkdlp77 = function () {
  let pname25 = document.querySelector(".pname77");
  let price25 = document.querySelector(".price77");
  let pimg25 = document.querySelector(".pimg77");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname25.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf25pl = "pf77pl";
    let min25pl = "min77pl";
    let pfqty25 = "pfqty77";
    let delt25 = "delt77";
    let perfume = {
      tname: pname25.innerHTML,
      tprice: price25.innerHTML,
      timg: pimg25.src,
      plbtn: pf25pl,
      minbtn: min25pl,
      qty: pfqty25,
      del: delt25,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } 
  else if(tstatus === true){
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
        if (st_arrskinc[g].tname != tname) {
            runaf3();
        }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------skin4----------*/
let checkdlp78 = function () {
  let pname26 = document.querySelector(".pname78");
  let price26 = document.querySelector(".price78");
  let pimg26 = document.querySelector(".pimg78");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname26.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf26pl = "pf78pl";
    let min26pl = "min78pl";
    let pfqty26 = "pfqty78";
    let delt26 = "delt78";
    let perfume = {
      tname: pname26.innerHTML,
      tprice: price26.innerHTML,
      timg: pimg26.src,
      plbtn: pf26pl,
      minbtn: min26pl,
      qty: pfqty26,
      del: delt26,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*---------skin5-------*/
let checkdlp79 = function () {
  let pname27 = document.querySelector(".pname79");
  let price27 = document.querySelector(".price79");
  let pimg27 = document.querySelector(".pimg79");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname27.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf27pl = "pf79pl";
    let min27pl = "min79pl";
    let pfqty27 = "pfqty79";
    let delt27 = "delt79";
    let perfume = {
      tname: pname27.innerHTML,
      tprice: price27.innerHTML,
      timg: pimg27.src,
      plbtn: pf27pl,
      minbtn: min27pl,
      qty: pfqty27,
      del: delt27,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin6---------- */
let checkdlp80 = function () {
  let pname28 = document.querySelector(".pname80");
  let price28 = document.querySelector(".price80");
  let pimg28 = document.querySelector(".pimg80");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname28.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf28pl = "pf80pl";
    let min28pl = "min80pl";
    let pfqty28 = "pfqty80";
    let delt28 = "delt80";
    let perfume = {
      tname: pname28.innerHTML,
      tprice: price28.innerHTML,
      timg: pimg28.src,
      plbtn: pf28pl,
      minbtn: min28pl,
      qty: pfqty28,
      del: delt28,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin7---------- */
let checkdlp81 = function () {
  let pname29 = document.querySelector(".pname81");
  let price29 = document.querySelector(".price81");
  let pimg29 = document.querySelector(".pimg81");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname29.innerHTML) {
      tstatus = true;
    } 
    
  }
  if (tstatus === false) {
    let pf29pl = "pf81pl";
    let min29pl = "min81pl";
    let pfqty29 = "pfqty81";
    let delt29 = "delt81";
    let perfume = {
      tname: pname29.innerHTML,
      tprice: price29.innerHTML,
      timg: pimg29.src,
      plbtn: pf29pl,
      minbtn: min29pl,
      qty: pfqty29,
      del: delt29,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin8---------- */
let checkdlp82 = function () {
  let pname30 = document.querySelector(".pname82");
  let price30 = document.querySelector(".price82");
  let pimg30 = document.querySelector(".pimg82");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname30.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf30pl = "pf82pl";
    let min30pl = "min82pl";
    let pfqty30 = "pfqty82";
    let delt30 = "delt82";
    let perfume = {
      tname: pname30.innerHTML,
      tprice: price30.innerHTML,
      timg: pimg30.src,
      plbtn: pf30pl,
      minbtn: min30pl,
      qty: pfqty30,
      del: delt30,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } 
  else if(tstatus === true){
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
        if (st_arrskinc[g].tname != tname) {
            runaf3();
        }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin9---------- */
let checkdlp83 = function () {
  let pname31 = document.querySelector(".pname83");
  let price31 = document.querySelector(".price83");
  let pimg31 = document.querySelector(".pimg83");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname31.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf31pl = "pf83pl";
    let min31pl = "min83pl";
    let pfqty31 = "pfqty83";
    let delt31 = "delt83";
    let perfume = {
      tname: pname31.innerHTML,
      tprice: price31.innerHTML,
      timg: pimg31.src,
      plbtn: pf31pl,
      minbtn: min31pl,
      qty: pfqty31,
      del: delt31,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } 
  else if(tstatus === true){
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
        if (st_arrskinc[g].tname != tname) {
            runaf3();
        }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin10---------- */
let checkdlp84 = function () {
  let pname32 = document.querySelector(".pname84");
  let price32 = document.querySelector(".price84");
  let pimg32 = document.querySelector(".pimg84");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname32.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf32pl = "pf84pl";
    let min32pl = "min84pl";
    let pfqty32 = "pfqty84";
    let delt32 = "delt84";
    let perfume = {
      tname: pname32.innerHTML,
      tprice: price32.innerHTML,
      timg: pimg32.src,
      plbtn: pf32pl,
      minbtn: min32pl,
      qty: pfqty32,
      del: delt32,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*--------skin11-------*/
let checkdlp85 = function () {
  let pname33 = document.querySelector(".pname85");
  let price33 = document.querySelector(".price85");
  let pimg33 = document.querySelector(".pimg85");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname33.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf33pl = "pf85pl";
    let min33pl = "min85pl";
    let pfqty33 = "pfqty85";
    let delt33 = "delt85";
    let perfume = {
      tname: pname33.innerHTML,
      tprice: price33.innerHTML,
      timg: pimg33.src,
      plbtn: pf33pl,
      minbtn: min33pl,
      qty: pfqty33,
      del: delt33,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } 
  else if(tstatus === true){
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
        if (st_arrskinc[g].tname != tname) {
            runaf3();
        }
    }
  }
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin12---------- */
let checkdlp86 = function () {
  let pname34 = document.querySelector(".pname86");
  let price34 = document.querySelector(".price86");
  let pimg34 = document.querySelector(".pimg86");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname34.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf34pl = "pf86pl";
    let min34pl = "min86pl";
    let pfqty34 = "pfqty86";
    let delt34 = "delt86";
    let perfume = {
      tname: pname34.innerHTML,
      tprice: price34.innerHTML,
      timg: pimg34.src,
      plbtn: pf34pl,
      minbtn: min34pl,
      qty: pfqty34,
      del: delt34,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------skin13---------- */
let checkdlp87 = function () {
  let pname35 = document.querySelector(".pname87");
  let price35 = document.querySelector(".price87");
  let pimg35 = document.querySelector(".pimg87");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname35.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf35pl = "pf87pl";
    let min35pl = "min87pl";
    let pfqty35 = "pfqty87";
    let delt35 = "delt87";
    let perfume = {
      tname: pname35.innerHTML,
      tprice: price35.innerHTML,
      timg: pimg35.src,
      plbtn: pf35pl,
      minbtn: min35pl,
      qty: pfqty35,
      del: delt35,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------skin14---------- */
let checkdlp88 = function () {
  let pname36 = document.querySelector(".pname88");
  let price36 = document.querySelector(".price88");
  let pimg36 = document.querySelector(".pimg88");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname36.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf36pl = "pf88pl";
    let min36pl = "min88pl";
    let pfqty36 = "pfqty88";
    let delt36 = "delt88";
    let perfume = {
      tname: pname36.innerHTML,
      tprice: price36.innerHTML,
      timg: pimg36.src,
      plbtn: pf36pl,
      minbtn: min36pl,
      qty: pfqty36,
      del: delt36,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------skin15---------- */
let checkdlp89 = function () {
  let pname37 = document.querySelector(".pname89");
  let price37 = document.querySelector(".price89");
  let pimg37 = document.querySelector(".pimg89");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname37.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf37pl = "pf89pl";
    let min37pl = "min89pl";
    let pfqty37 = "pfqty89";
    let delt37 = "delt89";
    let perfume = {
      tname: pname37.innerHTML,
      tprice: price37.innerHTML,
      timg: pimg37.src,
      plbtn: pf37pl,
      minbtn: min37pl,
      qty: pfqty37,
      del: delt37,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin16---------- */
let checkdlp90 = function () {
  let pname38 = document.querySelector(".pname90");
  let price38 = document.querySelector(".price90");
  let pimg38 = document.querySelector(".pimg90");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname38.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf38pl = "pf90pl";
    let min38pl = "min90pl";
    let pfqty38 = "pfqty90";
    let delt38 = "delt90";
    let perfume = {
      tname: pname38.innerHTML,
      tprice: price38.innerHTML,
      timg: pimg38.src,
      plbtn: pf38pl,
      minbtn: min38pl,
      qty: pfqty38,
      del: delt38,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
// /*----------skin17---------- */
let checkdlp91 = function () {
  let pname39 = document.querySelector(".pname91");
  let price39 = document.querySelector(".price91");
  let pimg39 = document.querySelector(".pimg91");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname39.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf39pl = "pf91pl";
    let min39pl = "min91pl";
    let pfqty39 = "pfqty91";
    let delt39 = "delt91";
    let perfume = {
      tname: pname39.innerHTML,
      tprice: price39.innerHTML,
      timg: pimg39.src,
      plbtn: pf39pl,
      minbtn: min39pl,
      qty: pfqty39,
      del: delt39,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin18---------- */
let checkdlp92 = function () {
  let pname40 = document.querySelector(".pname92");
  let price40 = document.querySelector(".price92");
  let pimg40 = document.querySelector(".pimg92");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname40.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf40pl = "pf92pl";
    let min40pl = "min92pl";
    let pfqty40 = "pfqty92";
    let delt40 = "delt92";
    let perfume = {
      tname: pname40.innerHTML,
      tprice: price40.innerHTML,
      timg: pimg40.src,
      plbtn: pf40pl,
      minbtn: min40pl,
      qty: pfqty40,
      del: delt40,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin19---------- */
let checkdlp93 = function () {
  let pname41 = document.querySelector(".pname93");
  let price41 = document.querySelector(".price93");
  let pimg41 = document.querySelector(".pimg93");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname41.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf41pl = "pf93pl";
    let min41pl = "min93pl";
    let pfqty41 = "pfqty93";
    let delt41 = "delt93";
    let perfume = {
      tname: pname41.innerHTML,
      tprice: price41.innerHTML,
      timg: pimg41.src,
      plbtn: pf41pl,
      minbtn: min41pl,
      qty: pfqty41,
      del: delt41,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------skin20----------*/
let checkdlp94 = function () {
  let pname42 = document.querySelector(".pname94");
  let price42 = document.querySelector(".price94");
  let pimg42 = document.querySelector(".pimg94");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname42.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf42pl = "pf94pl";
    let min42pl = "min94pl";
    let pfqty42 = "pfqty94";
    let delt42 = "delt94";
    let perfume = {
      tname: pname42.innerHTML,
      tprice: price42.innerHTML,
      timg: pimg42.src,
      plbtn: pf42pl,
      minbtn: min42pl,
      qty: pfqty42,
      del: delt42,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------skin21---------- */
let checkdlp95 = function () {
  let pname43 = document.querySelector(".pname95");
  let price43 = document.querySelector(".price95");
  let pimg43 = document.querySelector(".pimg95");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname43.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf17pl = "pf95pl";
    let min17pl = "min95pl";
    let pfqty17 = "pfqty95";
    let delt17 = "delt95";
    let perfume = {
      tname: pname43.innerHTML,
      tprice: price43.innerHTML,
      timg: pimg43.src,
      plbtn: pf17pl,
      minbtn: min17pl,
      qty: pfqty17,
      del: delt17,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
// /*----------skin22---------- */
let checkdlp96 = function () {
  let pname18 = document.querySelector(".pname96");
  let price18 = document.querySelector(".price96");
  let pimg18 = document.querySelector(".pimg96");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname18.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf18pl = "pf96pl";
    let min18pl = "min96pl";
    let pfqty18 = "pfqty96";
    let delt18 = "delt96";
    let perfume = {
      tname: pname18.innerHTML,
      tprice: price18.innerHTML,
      timg: pimg18.src,
      plbtn: pf18pl,
      minbtn: min18pl,
      qty: pfqty18,
      del: delt18,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin23----------*/
let checkdlp97 = function () {
  let pname19 = document.querySelector(".pname97");
  let price19 = document.querySelector(".price97");
  let pimg19 = document.querySelector(".pimg97");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname19.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf19pl = "pf97pl";
    let min19pl = "min97pl";
    let pfqty19 = "pfqty97";
    let delt19 = "delt97";
    let perfume = {
      tname: pname19.innerHTML,
      tprice: price19.innerHTML,
      timg: pimg19.src,
      plbtn: pf19pl,
      minbtn: min19pl,
      qty: pfqty19,
      del: delt19,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if(tstatus === true){
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
        if (st_arrskinc[g].tname != tname) {
            runaf3();
        }
    }
  }
  
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin24---------- */
let checkdlp98 = function () {
  let pname20 = document.querySelector(".pname98");
  let price20 = document.querySelector(".price98");
  let pimg20 = document.querySelector(".pimg98");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname20.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf20pl = "pf98pl";
    let min20pl = "min98pl";
    let pfqty20 = "pfqty98";
    let delt20 = "delt98";
    let perfume = {
      tname: pname20.innerHTML,
      tprice: price20.innerHTML,
      timg: pimg20.src,
      plbtn: pf20pl,
      minbtn: min20pl,
      qty: pfqty20,
      del: delt20,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------skin25---------- */
let checkdlp99 = function () {
  let pname21 = document.querySelector(".pname99");
  let price21 = document.querySelector(".price99");
  let pimg21 = document.querySelector(".pimg99");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname21.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf21pl = "pf99pl";
    let min21pl = "min99pl";
    let pfqty21 = "pfqty99";
    let delt21 = "delt99";
    let perfume = {
      tname: pname21.innerHTML,
      tprice: price21.innerHTML,
      timg: pimg21.src,
      plbtn: pf21pl,
      minbtn: min21pl,
      qty: pfqty21,
      del: delt21,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin26---------- */
let checkdlp100 = function () {
  let pname22 = document.querySelector(".pname100");
  let price22 = document.querySelector(".price100");
  let pimg22 = document.querySelector(".pimg100");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname22.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf22pl = "pf100pl";
    let min22pl = "min100pl";
    let pfqty22 = "pfqty100";
    let delt22 = "delt100";
    let perfume = {
      tname: pname22.innerHTML,
      tprice: price22.innerHTML,
      timg: pimg22.src,
      plbtn: pf22pl,
      minbtn: min22pl,
      qty: pfqty22,
      del: delt22,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin27----------*/
let checkdlp101 = function () {
  let pname23 = document.querySelector(".pname101");
  let price23 = document.querySelector(".price101");
  let pimg23 = document.querySelector(".pimg101");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname23.innerHTML) {
      tstatus = true;
    }
    
  }
  if (tstatus === false) {
    let pf23pl = "pf101pl";
    let min23pl = "min101pl";
    let pfqty23 = "pfqty101";
    let delt23 = "delt101";
    let perfume = {
      tname: pname23.innerHTML,
      tprice: price23.innerHTML,
      timg: pimg23.src,
      plbtn: pf23pl,
      minbtn: min23pl,
      qty: pfqty23,
      del: delt23,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin28---------- */
let checkdlp102 = function () {
  let pname24 = document.querySelector(".pname102");
  let price24 = document.querySelector(".price102");
  let pimg24 = document.querySelector(".pimg102");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname24.innerHTML) {
      tstatus = true;
    }
    
  }
  if (tstatus === false) {
    let pf24pl = "pf50pl";
    let min24pl = "min50pl";
    let pfqty24 = "pfqty50";
    let delt24 = "delt50";
    let perfume = {
      tname: pname24.innerHTML,
      tprice: price24.innerHTML,
      timg: pimg24.src,
      plbtn: pf24pl,
      minbtn: min24pl,
      qty: pfqty24,
      del: delt24,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } 
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------skin29---------- */
let checkdlp103 = function () {
  let pname25 = document.querySelector(".pname103");
  let price25 = document.querySelector(".price103");
  let pimg25 = document.querySelector(".pimg103");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname25.innerHTML) {
      tstatus = true;
    } 
    
  }
  if (tstatus === false) {
    let pf25pl = "pf103pl";
    let min25pl = "min103pl";
    let pfqty25 = "pfqty103";
    let delt25 = "delt103";
    let perfume = {
      tname: pname25.innerHTML,
      tprice: price25.innerHTML,
      timg: pimg25.src,
      plbtn: pf25pl,
      minbtn: min25pl,
      qty: pfqty25,
      del: delt25,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } 
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin30----------*/
let checkdlp104 = function () {
  let pname26 = document.querySelector(".pname104");
  let price26 = document.querySelector(".price104");
  let pimg26 = document.querySelector(".pimg104");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname26.innerHTML) {
      tstatus = true;
    }
    
  }
  if (tstatus === false) {
    let pf26pl = "pf104pl";
    let min26pl = "min104pl";
    let pfqty26 = "pfqty104";
    let delt26 = "delt104";
    let perfume = {
      tname: pname26.innerHTML,
      tprice: price26.innerHTML,
      timg: pimg26.src,
      plbtn: pf26pl,
      minbtn: min26pl,
      qty: pfqty26,
      del: delt26,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

// /*----------skin31---------- */
let checkdlp105 = function () {
  let pname18 = document.querySelector(".pname105");
  let price18 = document.querySelector(".price105");
  let pimg18 = document.querySelector(".pimg105");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname18.innerHTML) {
      tstatus = true;
    }
    
  }
  if (tstatus === false) {
    let pf18pl = "pf105pl";
    let min18pl = "min105pl";
    let pfqty18 = "pfqty105";
    let delt18 = "delt105";
    let perfume = {
      tname: pname18.innerHTML,
      tprice: price18.innerHTML,
      timg: pimg18.src,
      plbtn: pf18pl,
      minbtn: min18pl,
      qty: pfqty18,
      del: delt18,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin32----------*/
let checkdlp106 = function () {
  let pname19 = document.querySelector(".pname106");
  let price19 = document.querySelector(".price106");
  let pimg19 = document.querySelector(".pimg106");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname19.innerHTML) {
      tstatus = true;
    } 
    
  }
  if (tstatus === false) {
    let pf19pl = "pf106pl";
    let min19pl = "min106pl";
    let pfqty19 = "pfqty106";
    let delt19 = "delt106";
    let perfume = {
      tname: pname19.innerHTML,
      tprice: price19.innerHTML,
      timg: pimg19.src,
      plbtn: pf19pl,
      minbtn: min19pl,
      qty: pfqty19,
      del: delt19,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } 
  
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin33---------- */
let checkdlp107 = function () {
  let pname20 = document.querySelector(".pname107");
  let price20 = document.querySelector(".price107");
  let pimg20 = document.querySelector(".pimg107");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname20.innerHTML) {
      tstatus = true;
    }
    
  }
  if (tstatus === false) {
    let pf20pl = "pf107pl";
    let min20pl = "min107pl";
    let pfqty20 = "pfqty107";
    let delt20 = "delt107";
    let perfume = {
      tname: pname20.innerHTML,
      tprice: price20.innerHTML,
      timg: pimg20.src,
      plbtn: pf20pl,
      minbtn: min20pl,
      qty: pfqty20,
      del: delt20,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------skin34---------- */
let checkdlp108 = function () {
  let pname21 = document.querySelector(".pname108");
  let price21 = document.querySelector(".price108");
  let pimg21 = document.querySelector(".pimg108");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname21.innerHTML) {
      tstatus = true;
    }
    
  }
  if (tstatus === false) {
    let pf21pl = "pf108pl";
    let min21pl = "min108pl";
    let pfqty21 = "pfqty108";
    let delt21 = "delt108";
    let perfume = {
      tname: pname21.innerHTML,
      tprice: price21.innerHTML,
      timg: pimg21.src,
      plbtn: pf21pl,
      minbtn: min21pl,
      qty: pfqty21,
      del: delt21,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } 
    else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin35---------- */
let checkdlp109 = function () {
  let pname22 = document.querySelector(".pname109");
  let price22 = document.querySelector(".price109");
  let pimg22 = document.querySelector(".pimg109");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname22.innerHTML) {
      tstatus = true;
    }
    
  }
  if (tstatus === false) {
    let pf22pl = "pf109pl";
    let min22pl = "min109pl";
    let pfqty22 = "pfqty109";
    let delt22 = "delt109";
    let perfume = {
      tname: pname22.innerHTML,
      tprice: price22.innerHTML,
      timg: pimg22.src,
      plbtn: pf22pl,
      minbtn: min22pl,
      qty: pfqty22,
      del: delt22,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin36----------*/
let checkdlp110 = function () {
  let pname23 = document.querySelector(".pname110");
  let price23 = document.querySelector(".price110");
  let pimg23 = document.querySelector(".pimg110");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname23.innerHTML) {
      tstatus = true;
    } 
    
  }
  if (tstatus === false) {
    let pf23pl = "pf110pl";
    let min23pl = "min110pl";
    let pfqty23 = "pfqty110";
    let delt23 = "delt110";
    let perfume = {
      tname: pname23.innerHTML,
      tprice: price23.innerHTML,
      timg: pimg23.src,
      plbtn: pf23pl,
      minbtn: min23pl,
      qty: pfqty23,
      del: delt23,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin37---------- */
let checkdlp111 = function () {
  let pname24 = document.querySelector(".pname111");
  let price24 = document.querySelector(".price111");
  let pimg24 = document.querySelector(".pimg111");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname24.innerHTML) {
      tstatus = true;
    }
  }
  if (tstatus === false) {
    let pf24pl = "pf111pl";
    let min24pl = "min111pl";
    let pfqty24 = "pfqty111";
    let delt24 = "delt111";
    let perfume = {
      tname: pname24.innerHTML,
      tprice: price24.innerHTML,
      timg: pimg24.src,
      plbtn: pf24pl,
      minbtn: min24pl,
      qty: pfqty24,
      del: delt24,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};
/*----------skin38---------- */
let checkdlp112 = function () {
  let pname25 = document.querySelector(".pname112");
  let price25 = document.querySelector(".price112");
  let pimg25 = document.querySelector(".pimg112");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname25.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf25pl = "pf112pl";
    let min25pl = "min112pl";
    let pfqty25 = "pfqty112";
    let delt25 = "delt112";
    let perfume = {
      tname: pname25.innerHTML,
      tprice: price25.innerHTML,
      timg: pimg25.src,
      plbtn: pf25pl,
      minbtn: min25pl,
      qty: pfqty25,
      del: delt25,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if (tstatus === true) {
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
      if (st_arrskinc[g].tname != tname) {
        runaf3();
      }
    }
  } else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};

/*----------skin39----------*/
let checkdlp113 = function () {
  let pname26 = document.querySelector(".pname113");
  let price26 = document.querySelector(".price113");
  let pimg26 = document.querySelector(".pimg113");
  let tstatus = false;
  for (let i = 0; i < arrskinc.length; i++) {
    if (arrskinc[i].tname === pname26.innerHTML) {
      tstatus = true;
    } 
  }
  if (tstatus === false) {
    let pf26pl = "pf113pl";
    let min26pl = "min113pl";
    let pfqty26 = "pfqty113";
    let delt26 = "delt113";
    let perfume = {
      tname: pname26.innerHTML,
      tprice: price26.innerHTML,
      timg: pimg26.src,
      plbtn: pf26pl,
      minbtn: min26pl,
      qty: pfqty26,
      del: delt26,
    };
    arrskinc[arrskinc.length] = perfume;
    runaf3();
  } else if(tstatus === true){
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let g = 0; g < st_arrskinc.length; g++) {
        if (st_arrskinc[g].tname != tname) {
            runaf3();
        }
    }
  }
  
  else if (tstatus === true) {
    alert("Item has already been added to cart!");
  }
};


function runaftd() {
  localStorage.setItem("prodtopd", JSON.stringify(arrtopd));
}
function runaf() {
  localStorage.setItem("prodperfumes", JSON.stringify(arrperfumes));
}
function runaf2() {
  localStorage.setItem("prodmakeup", JSON.stringify(arrmakeup));
}
function runaf4() {
  localStorage.setItem("prodnails", JSON.stringify(arrnails));
}
function runaf3() {
  localStorage.setItem("prodskinc", JSON.stringify(arrskinc));
}

function getIdtd(btn) {
  let clickid = btn.id;
  var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
  for (let i = 0; i < st_arrtopd.length; i++) {
    if (st_arrtopd[i].del === clickid) {
      st_arrtopd.splice(i, 1);
      arrtopd = st_arrtopd;
      runaftd();
    }
    localStorage.setItem("prodtopd", JSON.stringify(st_arrtopd));
    window.location.reload(true);
  }
}
if (localStorage.getItem('prodtopd') != null) {
  let trollpro1 = document.querySelector(".trollpro");
  var st_arrtopd = JSON.parse(localStorage.getItem("prodtopd"));
  for (let i = 0; i < st_arrtopd.length; i++) {
    trollpro1.innerHTML += `<div class="box">
          <div class="tccont2">
           <img src="${st_arrtopd[i].timg}" alt="" class="pimg pimg1" />
            <p class="pname pname1">${st_arrtopd[i].tname}</p>
            <div class="binbt"><i class="far fa-trash-alt"id="${st_arrtopd[i].del}" onclick="getIdtd(this)" ></i></div>
            <div class="pinfo">
              <div class="pinfosbx"><span class="price price1 pinfos">${st_arrtopd[i].tprice}</span> <div class="pipe pinfos"></div> <div class="qtycalc"><select class="selector qtyperfumes"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div></div>
            </div>
          </div>
        </div>`;
  }
  
  let checoutbtn = document.querySelector(".checkoutbtn");
  checoutbtn.style.visibility = "visible";
  let checkqtys2 = function () {
    let qtysarr = document.querySelectorAll(".qty1");
    let prices = document.querySelectorAll(".price");
  }
  checoutbtn.addEventListener("click", checkqtys2);
}

function getId4(btn) {
  let clickid = btn.id;
  var st_arrperfumes = JSON.parse(localStorage.getItem("prodperfumes"));
  for (let i = 0; i < st_arrperfumes.length; i++) {
    if (st_arrperfumes[i].del === clickid) {
      st_arrperfumes.splice(i, 1);
      arrperfumes = st_arrperfumes;
      runaf();
    }
    localStorage.setItem("prodperfumes", JSON.stringify(st_arrperfumes));
    window.location.reload(true);
  }
}
if (localStorage.getItem('prodperfumes') != null) {
  let trollpro1 = document.querySelector(".trollpro");
  var st_arrperfumes = JSON.parse(localStorage.getItem("prodperfumes"));
  for (let i = 0; i < st_arrperfumes.length; i++) {
    trollpro1.innerHTML += `<div class="box">
          <div class="tccont2">
           <img src="${st_arrperfumes[i].timg}" alt="" class="pimg pimg1" />
            <p class="pname pname1">${st_arrperfumes[i].tname}</p>
            <div class="binbt"><i class="far fa-trash-alt"id="${st_arrperfumes[i].del}" onclick="getId4(this)" ></i></div>
            <div class="pinfo">
              <div class="pinfosbx"><span class="price price1 pinfos">${st_arrperfumes[i].tprice}</span> <div class="pipe pinfos"></div> <div class="qtycalc"><select class="selector qtyperfumes"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div></div>
            </div>
          </div>
        </div>`;
  }
  
  let checoutbtn = document.querySelector(".checkoutbtn");
  checoutbtn.style.visibility = "visible";
  let checkqtys2 = function () {
    let qtysarr = document.querySelectorAll(".qty1");
    let prices = document.querySelectorAll(".price");
  }
  checoutbtn.addEventListener("click", checkqtys2);
}
function getId3(btn){
    let clickid = btn.id;
    var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
    for (let i = 0; i < st_arrmakeup.length; i++) {
         if(st_arrmakeup[i].del === clickid){
             st_arrmakeup.splice(i, 1);
             arrmakeup = st_arrmakeup;
             runaf2();
         }
        localStorage.setItem("prodmakeup", JSON.stringify(st_arrmakeup));
        window.location.reload(true);
    }
}
if (localStorage.getItem("prodmakeup") != null) {
  let trollpro1 = document.querySelector(".trollpro");
  var st_arrmakeup = JSON.parse(localStorage.getItem("prodmakeup"));
  for (let i = 0; i < st_arrmakeup.length; i++) {
    trollpro1.innerHTML += `<div class="box">
          <div class="tccont2">
           <img src="${st_arrmakeup[i].timg}" alt="" class="pimg pimg1" />
            <p class="pname pname1">${st_arrmakeup[i].tname}</p>
            <div class="binbt"><i class="far fa-trash-alt"id="${st_arrmakeup[i].del}" onclick="getId3(this)" ></i></div>
            <div class="pinfo">
              <div class="pinfosbx"><span class="price price1 pinfos">${st_arrmakeup[i].tprice}</span> <div class="pipe pinfos"></div> <div class="qtycalc"><select class="selector qtymakeup"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div></div>
            </div>
          </div>
        </div>`;
  }

  let checoutbtn = document.querySelector(".checkoutbtn");
  checoutbtn.style.visibility = "visible";
  let checkqtys2 = function () {
    let qtysarr = document.querySelectorAll(".qty1");
    let prices = document.querySelectorAll(".price");
  }
  checoutbtn.addEventListener("click", checkqtys2);
}
function getId2(btn){
    let clickid = btn.id;
    var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
    for (let i = 0; i < st_arrnails.length; i++) {
         if(st_arrnails[i].del === clickid){
             st_arrnails.splice(i, 1);
             arrnails = st_arrnails;
             runaf4();
         }
        localStorage.setItem("prodnails", JSON.stringify(st_arrnails));
        window.location.reload(true);
    }
}
if (localStorage.getItem("prodnails") != null) {
  let trollpro1 = document.querySelector(".trollpro");
  var st_arrnails = JSON.parse(localStorage.getItem("prodnails"));
  for (let i = 0; i < st_arrnails.length; i++) {
    trollpro1.innerHTML += `<div class="box">
          <div class="tccont2">
           <img src="${st_arrnails[i].timg}" alt="" class="pimg pimg1" />
            <p class="pname pname1">${st_arrnails[i].tname}</p>
            <div class="binbt"><i class="far fa-trash-alt"id="${st_arrnails[i].del}" onclick="getId2(this)" ></i></div>
            <div class="pinfo">
              <div class="pinfosbx"><span class="price price1 pinfos">${st_arrnails[i].tprice}</span> <div class="pipe pinfos"></div> <div class="qtycalc"><select class="selector qtynails"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div></div>
            </div>
          </div>
        </div>`;
  }

  let checoutbtn = document.querySelector(".checkoutbtn");
  checoutbtn.style.visibility = "visible";
  let checkqtys2 = function () {
    let qtysarr = document.querySelectorAll(".qty1");
    let prices = document.querySelectorAll(".price");
  }
  checoutbtn.addEventListener("click", checkqtys2);
}
function getId(btn){
    let clickid = btn.id;
    var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
    for (let i = 0; i < st_arrskinc.length; i++) {
         if(st_arrskinc[i].del === clickid){
             st_arrskinc.splice(i, 1);
             arrskinc = st_arrskinc;
             runaf3();
         }
        localStorage.setItem("prodskinc", JSON.stringify(st_arrskinc));
        window.location.reload(true);
    }
}
if (localStorage.getItem("prodskinc") != null) {
  let trollpro1 = document.querySelector(".trollpro");
  var st_arrskinc = JSON.parse(localStorage.getItem("prodskinc"));
  for (let i = 0; i < st_arrskinc.length; i++) {
    trollpro1.innerHTML += `<div class="box">
          <div class="tccont2">
           <img src="${st_arrskinc[i].timg}" alt="" class="pimg pimg1" />
            <p class="pname pname1 ">${st_arrskinc[i].tname}</p>
            <div class="binbt"><i class="far fa-trash-alt" id="${st_arrskinc[i].del}" onclick="getId(this)"></i></div>
            <div class="pinfo">
              <div class="pinfosbx"><span class="price price1 pinfos">${st_arrskinc[i].tprice}</span> <div class="pipe pinfos"></div> <div class="qtycalc"><select class="selector qtyskinc"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div></div>
            </div>
          </div>
        </div>`;
  }
//   let deleteitm = function(obj){
//       console.log(obj.id);
//   }
//   st_arrskinc.forEach(skin => {
//       addEventListener('click',deleteitm(this));
//   });
  let checoutbtn = document.querySelector(".checkoutbtn");
  checoutbtn.style.visibility = "visible";
  let checkqtys2 = function () {
    let qtysarr = document.querySelectorAll(".qty1");
    let prices = document.querySelectorAll(".price");
  };
  checoutbtn.addEventListener("click", checkqtys2);
}
