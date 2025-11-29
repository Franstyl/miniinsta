const input = document.getElementById("input");
const btn = document.getElementById("btn");
const mesaj_kutu = document.getElementById("mesaj_kutu");

btn.addEventListener("click", () => {
  const yazi = input.value.trim();
  if (yazi === "") return;

  const yeniMesaj = document.createElement("div");
  yeniMesaj.className = "mesaj";
  yeniMesaj.textContent = yazi;

  mesaj_kutu.appendChild(yeniMesaj);
  input.value = "";
});
