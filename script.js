const buton2 = document.getElementById("buton2");
const button = document.getElementById("buton1");
const p = document.getElementById("Deneme");
const degis = document.getElementById("degis");
const isim = prompt("Adını yaz tatlım 💖:");

button.addEventListener("click", () => {
    p.textContent = "DEĞİŞTİM!";    
});

buton2.addEventListener("click", () => {
    degis.textContent = "BY SEFER BEN DEGİSTİM";
    const yenip = document.createElement('p');
    yenip.textContent = "Ben yeni eklendim!"; // önce yazıyı ekle
    document.body.appendChild(yenip); // sonra sayfaya ekle
});
alert("Hoşgeldin " + isim + " 😻");

const devam = confirm("Devam etmek istiyor musun? 🌸");
if (devam) {
    alert("Süper, devam ediyoruz!! 🎉");
} else {
    alert("Tamam, ara veriyoruz.");
}