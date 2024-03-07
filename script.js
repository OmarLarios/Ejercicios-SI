const contenedorQR = document.getElementById('QR');
const formulario = document.getElementById('formulario')
const noCta=new QRCode(contenedorQR);

formulario.addEventListener('submit', function(e){
    e.preventDefault();  //
    noCta.makeCode(formulario.entradaD.value);
})