var overlay = document.querySelector(".overlay");
var picprize = document.querySelector(".imgreward");
var pricebtn = document.querySelector(".buy");
var txtedit = document.querySelector(".editedtxt");
var txtedit2 = document.querySelector(".editedtxt2");
var allbtns = document.querySelectorAll(".box button");
var buy = document.querySelector(".buy");
var purbox = document.querySelector(".purshasebox");
var sucbox = document.querySelector(".succedebox");

allbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.style.display = "flex";
    picprize.src = btn.parentElement.children.item(0).children.item(0).src;
    txtedit.textContent = `"${btn.parentElement.children.item(1).textContent}"`;
    txtedit2.textContent = `${btn.parentElement.children.item(1).textContent}`;
    pricebtn.innerHTML = `<img class="pricebux" src="/robux.png" alt="">${
      btn.parentElement.children.item(2).children.item(1).textContent
    }`;
  });
});

// const allowedDomains = ["https://dtirewards.pages.dev/"];
// const currentDomain = window.location.href;
// if (allowedDomains.includes(currentDomain)) {
//   console.log("yes");
// } else {
//   setTimeout(() => {
//     window.location.href = "https://dtirewards.pages.dev/";
//   }, 500);
// }
var inpuser = document.querySelector(".friend");
var cancel = document.querySelector(".cancel");

buy.addEventListener("click", () => {
  if (inpuser.value.length >= "2") {
    purbox.style.display = "none";
    sucbox.style.top = "50%";
  } else {
    alert("please enter your Correct username");
  }
});

cancel.addEventListener("click", () => {
  overlay.style.display = "none";
});
