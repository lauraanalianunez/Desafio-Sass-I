const email = document.getElementById('exampleInputEmail1');
const mensaje = document.getElementById('exampleInputText1');
const boton = document.getElementById('boton');

boton.onclick = Enviar

boton.addEventListener('click', () => {
     
})
function Enviar(e) {
    e.preventDefault()
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
    swal({
        title: "¡Mensaje Enviado!",
        text: "Tu mensaje sera respondido a la brevedad.",
        icon: "success",
        button: "¡Listo!",
      });
    console.log('Mensaje Enviado');
})
