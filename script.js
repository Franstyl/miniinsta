alert("Merhaba!");

document.getElementById("btn").addEventListener("click", () => {
    
document.getElementById("sonra").textContent = "butona tıkladın.";
});

let sayi = 5;
sayi = sayi + 10;

const ad = "Eren";

console.log("Toplam", sayi);
console.log("İsim:", ad);

if (5>3) {
    console.log("5 3'ten büyük babacum");
}

let yas = 17;

if (yas>=18) {
    console.log("Girebilirsin")
} else {
    console.log("18 ol gel >.<");
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    alert("Butona tıkladın!");
})

const p =
document.getElementById("sonuc");
p.textContent = "Js ile yazıldı";

document.getElementById("btn").addEventListener("click", () => { document.getElementById("sonra").textContent = "butona tıladın2";});