document.body.style.padding = "0px";
document.body.style.margin = "0px";
document.body.style.backgroundColor = "rgb(236, 236, 236)";
document.body.style.fontFamily = "Tahoma,Arial";

//declear varaibles Header
let header = document.createElement("header");
let menuTag = document.createElement("ul");
let menuItemsList = ["Home", "About", "Service", "Contact"];

//styling elhatab title
let elhatabTitleSpan = document.createElement("span");
elhatabTitleSpan.style.color = "gray";
elhatabTitleSpan.style.padding ="3px";
elhatabTitleSpan.style.borderRadius ="7px";
elhatabTitleSpan.style.fontWeight = "bold";
let elhatabTitle = document.createTextNode("Main web √");
elhatabTitleSpan.appendChild(elhatabTitle);

//Header
header.className = "website-head";
header.style.display = "flex";
header.style.padding = "22px";
header.style.backgroundColor = "#ffffe0";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

//header -> ul
menuItemsList.forEach(function (element) {
  let liMenu = document.createElement("li");
  liMenu.innerHTML = element;
  liMenu.style.display = "inline";
  liMenu.style.padding = "10px";
  liMenu.style.fontWeight = "bold";
  liMenu.style.color = "black";
  liMenu.style.opacity = "0,4"
  menuTag.appendChild(liMenu);
});

//set Heder items
header.appendChild(elhatabTitleSpan);
header.appendChild(menuTag);

//div Content
let contentDiv = document.createElement("div");
contentDiv.className = "content";
contentDiv.style.display = "flex";
contentDiv.style.padding = "20px";
contentDiv.style.flexWrap = "wrap";
contentDiv.style.justifyContent = "center";
contentDiv.style.gap = "20px";
contentDiv.style.minHeight = "calc(100vh-142px)";
contentDiv.style.boxSizing = "border-box";

//prodcut div
let productDiv = document.createElement("div");
productDiv.className = "product";
productDiv.style.padding = "20px";
productDiv.style.backgroundColor ="#fffaf0";
productDiv.style.border = "1px sold rgb(221, 221, 221)";
productDiv.style.width = "calc((100% - 40px) / 3)";
productDiv.style.boxSizing = "border-box";
productDiv.style.textAlign = "center";
productDiv.style.color = "#bdb76b";
productDiv.style.borderRadius = "6px";

//product->span
let productSpan = document.createElement("span");
productSpan.style.fontSize = "40px";
productSpan.style.color = "#bdb76b";
productSpan.style.fontWeight = "normal";
productSpan.style.display = "block";
productSpan.style.marginBottom = "10px";
productSpan.style.marginTop = "10px";

let copySpan = productSpan.cloneNode(true);
let spanText = document.createTextNode("product");
productDiv.appendChild(copySpan);
productDiv.appendChild(spanText);

for (let i = 1; i <= 15; i++) {
  copySpan.innerHTML = `${i}`;
  let copyProdcutDiv = productDiv.cloneNode(true);
  contentDiv.appendChild(copyProdcutDiv);
}

//footer
let footer = document.createElement("footer");
footer.className = "footer";
footer.style.backgroundColor = "black";
footer.style.color = "white";
footer.style.fontSize = "26px";
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.style.margin = "20px ,0px";
footer.style.color = "rgb(255,2#55,255)";
let footerContentText = document.createTextNode("Copyright 2023 fake it till you make it  !");

footer.appendChild(footerContentText);

//Body append
document.body.appendChild(header);
document.body.appendChild(contentDiv);
document.body.appendChild(footer);
