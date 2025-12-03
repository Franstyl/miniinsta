const buton2 = document.getElementById("buton2");
const button = document.getElementById("buton1");
const p = document.getElementById("Deneme");
const degis = document.getElementById("degis");
const mesaj = document.getElementById("mesaj");
const kutu = document.getElementById("kutu");

const isim = prompt("Adını yaz:");

// BUTON 1
button.addEventListener("click", () => {
    p.textContent = "Değişti";    
});

// BUTON 2
buton2.addEventListener("click", () => {
    degis.textContent = "Değiştirilen yazı";
    const yenip = document.createElement('p');
    yenip.textContent = "Yeni <p>";
    document.body.appendChild(yenip);
});

alert("Hoşgeldin " + isim);

// 1. CONFIRM
const devammi = confirm("Devam etmek istiyor musun? " + isim + " 🌸");

if (devammi) {
    alert("Süper, devam ediyoruz.");
} else {
    alert("Tamam, ara veriyoruz.");
}

// setTimeout
setTimeout(() => {
    alert("4 saniye geçti (setTimeout).");
}, 4000);

// setInterval
let sayac = 0;
const intervalID = setInterval(() => {
    sayac++;
    console.log("Sayaç:" + sayac);
    if (sayac >= 5) clearInterval(intervalID);
}, 1000);

// 2. CONFIRM
const devam = confirm("Devam mı?");

// MESAJ DEĞİŞTİRME
if (devam) {
    mesaj.textContent = "Devam.";
} else {
    mesaj.textContent = "Ara veriyoruz.";
}

// KUTU RENGİ
if (devam) {
    kutu.style.backgroundColor = "pink";
    kutu.textContent = "Devam ediyoruz 💖";
} else {
    kutu.style.backgroundColor = "red";
    kutu.textContent = "Ara verelim 💤";
}
