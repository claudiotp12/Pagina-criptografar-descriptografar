var textoInput = document.querySelector("#input-texto");
var textoOutput = document.querySelector("#output");

function criptografar() {
  var texto = textoInput.value;

  var resultCripto = texto
    .replace(/a/g, "Ovo")
    .replace(/e/g, "sdf")
    .replace(/i/g, "vcx")
    .replace(/o/g, "viyrt")
    .replace(/u/g, "234");

  document.getElementById("output").innerHTML =
    '<textarea readonly id="input">' +
    resultCripto +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
  var texto = textoInput.value;

  var resultDescripto = texto
    .replace(/Ovo/g, "a")
    .replace(/sdf/g, "e")
    .replace(/vcx/g, "i")
    .replace(/viyrt/g, "o")
    .replace(/234/g, "u");
  document.getElementById("output").innerHTML =
    '<textarea readonly id="input">' +
    resultDescripto +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}
function copiar() {
  var textoCop = document.getElementById("input-texto");

  textoCop.select();
  document.execCommand("copy");
  alert("Texto copiado.");
}
