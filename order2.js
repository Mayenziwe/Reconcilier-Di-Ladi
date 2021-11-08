/* const products = [
  "Be Fabulous Liquid Foundation - Sand",
  "SUN 669 UVLED Nail Lamp",
  "Dr. Rashel Vitamin C Brightening &amp; Anti-Aging Face Cream (Contains Hyaluronic Acid)",
  "Obey Your Body Dark &amp; Beauty Youth-Restoring Overnight Cream",
]; */

const url = "https://cosmeticsa.co.za/";
const puppeteer = require("puppeteer");

async function initBrowser() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  

  return page;

  //   await browser.close();
}
async function addToCart(page) {
  const product = [
    "Be Fabulous Liquid Foundation - Sand",
    "Max Factor Flawless Perfection Blush - 221 Classic Pink",
    "Safeguard Body Wash Touch of Aloe",
    "Obey Your Body Dark &amp; Beauty Youth-Restoring Overnight Cream",
  ];
  let qtys = ["2", "1", "1","1"];
  const client = [
    "someone",
    "secName",
    "28 Summer Place",
    "Woodlands",
    "Durban",
    "NL",
    "4004",
    "0673497001",
  ];

  for (let i = 0; i < qtys.length; i++) {
    if (i < 1) {
      await page.type("[name ='q']", product[i]);

      await page.click(".search-bar--submit");
      await page.waitFor(15000);
      await page.click("p");
      await page.click("p");
      await page.waitFor(3000);

      const input = await page.$("#quantity");
      await input.click({ clickCount: 3 });
      await input.type(qtys[i]);
      await page.click("#addToCart-product-template");
    } else {
      await page.waitFor(5000);
      await page.type("[name ='q']", product[i]);

      await page.click(".search-bar--submit");
      await page.waitFor(3000);
      await page.click("p");
      await page.waitFor(2000);

      const input = await page.$("#quantity");
      await input.click({ clickCount: 3 });
      await input.type(qtys[i]);
      await page.click("#addToCart-product-template");
    }
  }
  await page.waitFor(8000);
  await page.click(".btn");
  await page.waitFor(10000);
  await page.type("#checkout_email_or_phone", client[7]);
  await page.type("#checkout_shipping_address_first_name", client[0]);
  await page.type("#checkout_shipping_address_last_name", client[1]);
  await page.type("#checkout_shipping_address_address1", client[2]);
  await page.type("#checkout_shipping_address_address2", client[3]);
  await page.type("#checkout_shipping_address_city", client[4]);
  await page.$eval(
    "#checkout_shipping_address_province",
    (el) => (el.value = "NL")
  );
  await page.type("#checkout_shipping_address_zip", client[6]);
  //await page.type("#checkout_shipping_address_phone", client[7]);
  await page.waitFor(5000);
  await page.click("#continue_button");
}
async function checkout() {
  const page = await initBrowser();
  await addToCart(page);
  console.log("ran func");
}
checkout();
/*
----------------------For Mobile---------------------
let menubt = document.querySelector(".menu-toggle");
menubt.click();
-----------------------------------------------------

let hid = document.getElementsByName("type");
hid[1].value ="Be Fabulous Highlighter Powder - Golden Goddess";

let srch = document.getElementsByName('q');
srch.click();
srch[0].value = "Be Fabulous Highlighter Powder - Golden Goddess";

let srchbt = document.querySelector('.search-bar--submit');
srchbt.click();

let p = document.querySelector(".btn");
p.click();

let qty = document.querySelector("#quantity");
qty.value = 2;

let addbt = document.querySelector("#addToCart-product-template");
addbt.click();

let home = document.querySelector("a");
home.click();

*/
//---------------Sample---------------------
/* await page.evaluate(() =>
      Array.from(document.getElementsByName("q")).map(
        (product) => (product.value ="Be Fabulous Highlighter Powder - Golden Goddess")
      )
    ); */
//await page.type("#quantity", "2");
//await page.type("#quantity", qtys[0]);
//await page.$eval("#quantity", (el) => (el.value = qtys[0]));

/* await page.$eval(
    ("[name='q']"),
    (el) => (el.value = `${products[0]}`

    )); */

/*
await page.type("#checkout_shipping_address_first_name", product[i]);
await page.type("#checkout_shipping_address_last_name", product[i]);
await page.type("#checkout_shipping_address_address1", product[i]);
await page.type("#checkout_shipping_address_address2", product[i]);
await page.type("#checkout_shipping_address_city", product[i]);

await page.$eval("#checkout_shipping_address_province", (el) => (el.value = "NL"));


await page.type("#checkout_shipping_address_zip", product[i]);
await page.type("#checkout_shipping_address_phone", product[i]);
await page.click("#continue_button");

*/
/*
let inp0 = document.querySelector("#checkout_email_or_phone");
inp0.value = 0679197001;
let inp1 = document.querySelector("#checkout_shipping_address_first_name");
inp1.value = "Mayenziwe";
let inp2 = document.querySelector("#checkout_shipping_address_last_name");
inp2.value = "Vezi";
let inp3 = document.querySelector("#checkout_shipping_address_address1");
inp3.value = "28 Sedgemoor place";
let inp4 = document.querySelector("#checkout_shipping_address_address2");
inp4.value = "Woodlands";
let inp5 = document.querySelector("#checkout_shipping_address_city");
inp5.value = "Durban";
let qty = document.querySelector("#checkout_shipping_address_province");
qty.value = "NL";
let inp6 = document.querySelector("#checkout_shipping_address_zip");
inp6.value = "4004";
let inp7 = document.querySelector("#checkout_shipping_address_phone");
inp7.value = "0679197001";


function clibt(){
let addbt = document.querySelector("#continue_button"); 
addbt.click();
}
setTimeout(clibt,7000)
*/
