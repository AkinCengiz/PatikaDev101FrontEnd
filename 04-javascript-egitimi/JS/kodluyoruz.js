/*
let title = document.getElementById('title');
title.innerHTML = "Merhaba Akın CENGİZ";
console.log(title.innerHTML);

let link = document.querySelector("ul#list>li>a");
link.innerHTML += " değişti...";
link.style.color="red";
link.classList.add('btn'); 

let fullName = prompt("Lütfen adınızı giriniz : ");
console.log(fullName);

let greeting = document.querySelector("#greeting");

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red;">${fullName}</small>` 


let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML="Son eleman değişti..."
//console.log(lastChild);
let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "İlk elemanın değeride değiştirildi...";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement('li');

liDOM.innerHTML = "Kendi yarattığımız element";
ulDOM.prepend(liDOM);*/
//ulDOM.append(liDOM);
let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)
>> false

console.log(boolean)

let age = 24;
       let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

       console.log(permission);

       let firstCity = "Ankara";

       let secondCity = "İstanbul";

       const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

       console.log(isEqual)
       
       var money;
    var canBuy = 
        (money < 17) ? "Satın alamazsın..":
        (money > 30) ? "Satın alabilirsin..":
        "Para miktarını girmen gerekmektedir..";

    console.log(canBuy) 