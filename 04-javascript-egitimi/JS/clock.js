let names = prompt("Adınız nedir?");
let selamla = document.querySelector("#myName");
selamla.innerHTML =`${names}`;

function saatGetir(){
    let day = new Date();
    let hours = new Date().toLocaleTimeString('tr-TR');
    let clocks = document.querySelector("#myClock");
    var dates = new Array();
    dates[0] = "Pazar";
    dates[1] = "Pazartesi";
    dates[2] = "Salı";
    dates[3] = "Çarşamba";
    dates[4] = "Perşembe";
    dates[5] = "Cuma";
    dates[6] = "Cumartesi";
    clocks.innerHTML = `${hours} ${dates[day.getDay()]}`;
    //clocks.innerHTML = `${hours.getHours()} : ${hours.getMinutes()} : ${hours.getSeconds()} ${dates[hours.getDay()]}`;
}
/*
function Hours() {
    var date = new Date().toLocaleTimeString('tr-TR'); //Saati al
    document.getElementById("myClock").innerHTML = date; // clock id li elemente yazdır
}*/
setInterval(saatGetir,1000);