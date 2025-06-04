const adaugaFacturaBtn = document.getElementById("adaugaFacturaBtn");
const formularDiv = document.getElementById("formularDiv");
const formularFactura = document.getElementById("formularFactura");
const anuleazaBtn = document.getElementById("anuleazaBtn");
const facturiTable = document.getElementById("facturiTable");

adaugaFacturaBtn.addEventListener("click", function() {
  formularDiv.style.display = "block";
});

anuleazaBtn.addEventListener("click", function() {
  formularDiv.style.display = "none";
});

formularFactura.addEventListener("submit", function(e) {
  e.preventDefault();

  const numarFactura = document.getElementById("numarFactura").value;
  const furnizor = document.getElementById("furnizor").value;
  const suma = document.getElementById("suma").value;
  const dataScadenta = document.getElementById("dataScadenta").value;
  const status = document.getElementById("status").value;

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${numarFactura}</td>
    <td>${furnizor}</td>
    <td>${suma} SEK</td>
    <td>${dataScadenta}</td>
    <td>${status}</td>
    <td><button>Șterge</button></td>
  `;

  facturiTable.appendChild(tr);

  formularFactura.reset();
  formularDiv.style.display = "none";

  tr.querySelector("button").addEventListener("click", function() {
    tr.remove();
  });
});
