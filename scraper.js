const puppeteer = require("puppeteer");
const fs = require("fs");
/*Perfumes-start*/
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  const url = "https://cosmeticsa.co.za/collections/perfumes-women";
  await page.goto(url);
  const products = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".product-grid-item")).map(
      (product) => ({
        title: product.querySelector("p").innerText.trim(),
        Price: product.querySelector("small").innerHTML.trim(),
        image: product.querySelector(".product-grid-image img").srcset,
      })
    )
  );
  fs.writeFile(
    "./newProducts.json",
    JSON.stringify(products, null, 2),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file1 sucessfully written");
      }
    }
  );

  await browser.close();
})();
/*Perfumes-End*/
/*make-up start*/
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  const url = "https://cosmeticsa.co.za/collections/makeup";
  await page.goto(url);
  const products = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".product-grid-item")).map(
      (product) => ({
        title: product.querySelector("p").innerText.trim(),
        Price: product.querySelector("small").innerHTML.trim(),
        image: product.querySelector(".product-grid-image img").srcset,
      })
    )
  );
  fs.writeFile("./newMakeup.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file2 sucessfully written");
    }
  });

  await browser.close();
})();
/*make-up end*/
/*Nails-start*/
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  const url = "https://cosmeticsa.co.za/collections/nails";
  await page.goto(url);
  const products = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".product-grid-item")).map(
      (product) => ({
        title: product.querySelector("p").innerText.trim(),
        Price: product.querySelector("small").innerHTML.trim(),
        image: product.querySelector(".product-grid-image img").srcset,
      })
    )
  );
  fs.writeFile("./newNails.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file3 sucessfully written");
    }
  });

  await browser.close();
})();
/*Nails-End*/
/*skin-care start*/
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  const url = "https://cosmeticsa.co.za/collections/face-body";
  await page.goto(url);
  const products = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".product-grid-item")).map(
      (product) => ({
        title: product.querySelector("p").innerText.trim(),
        Price: product.querySelector("small").innerHTML.trim(),
        image: product.querySelector(".product-grid-image img").srcset,
      })
    )
  );
  fs.writeFile("./newSkin-care.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file4 sucessfully written");
    }
  });

  await browser.close();
})();
/*skin-care End*/
/*Deals-start*/
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  const url = "https://cosmeticsa.co.za/collections/bargain-box/bargain-box";
  await page.goto(url);
  const products = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".product-grid-item")).map(
      (product) => ({
        title: product.querySelector("p").innerText.trim(),
        Price: product.querySelector("small").innerHTML.trim(),
        image: product.querySelector(".product-grid-image img").srcset,
      })
    )
  );
  fs.writeFile("./newDeals.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file5 sucessfully written");
    }
  });

  await browser.close();
})();
/*Deals-End*/