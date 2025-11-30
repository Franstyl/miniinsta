let a = 5;
let b = 3;

console.log(a + b);

if (a > b) {
    console.log("a büyük");
} else {
    console.log("B büyük");
}

function selamla() 
{
  console.log("Merhaba!");
}
selamla(); // çağırınca çalışır

const button = document.getElementById('btn');
button.textContent = "Basma Beni!";
