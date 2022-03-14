const email = document.getElementById('exampleInputEmail1');
const mensaje = document.getElementById('exampleInputText1');
const boton = document.getElementById('boton');

boton.onclick = Enviar

function Enviar(e) {
    e.preventDefault()
    alert('Mensaje enviado');
    console.log(e.target);
    infoFormulario()
}

function infoFormulario() {
    const email = document.getElementById('exampleInputEmail1');
    const mensaje = document.getElementById('exampleInputText1');

    console.log(email.value);
    console.log(mensaje.value);
}

boton.addEventListener('click', () => {
    console.log('Mensaje Enviado');
})
