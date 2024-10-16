let startEle = document.getElementById("start");
let readyEle = document.getElementById("ready");
let goEle = document.getElementById("go");

let lightEle = document.getElementById("light_img");

function start()
{
  lightEle.src = "img/grn.jpg";
  startEle.style.backgroundColor = "red";
  goEle.style.backgroundColor = "white";
  readyEle.style.backgroundColor = "white";
}

function ready()
{
  lightEle.src = "img/yel.jpg";
  readyEle.style.backgroundColor = "yellow";
  startEle.style.backgroundColor = "white";
  goEle.style.backgroundColor = "white";
}
function go()
{
  lightEle.src = "img/grn.jpg";
  goEle.style.backgroundColor = "green";
  startEle.style.backgroundColor = "white";
  readyEle.style.backgroundColor = "white";
}
