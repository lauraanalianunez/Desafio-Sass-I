const clickBoton = document.querySelectorAll('.boton-producto');
const tbody = document.querySelector('.tbody')
let carrito = []

clickBoton.forEach(btn => {
    btn.addEventListener('click', añadirAlCarrito)
})

function añadirAlCarrito(e) {
    const button = e.target
    const item = button.closest('.figure')
    const itemProducto = item.querySelector('.figure-caption').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.figure-img').src;

    const newItem = {
        producto: itemProducto,
        precio: itemPrecio,
        imgen: itemImg,
        cantidad: 1
    }
    addItemCarrito(newItem)
}

function addItemCarrito(newItem){
    const inputElemento = tbody.getElementsByClassName('input-elemento')
    for(let i=0; i < carrito.length ; i++) {
        if (carrito[i].producto.trim() === newItem.producto.trim()){
            carrito[i].cantidad ++;
            const inputValor= inputElemento[i]
            inputValor.value++;
            carritoTotal()
            return null
        }
    }
    
    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito () {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const Content = `
        <th scope="row">1</th>
        <td class="tabla-productos">
            <img class="img-carrito"
                src=${item.img}
                alt="">
            <h6 class="producto">${item.producto}</h6>
        </td>
        <td class="tabla-precio"><p>${item.precio}</p></td>
        <td class="tabla-cantidad">
            <input type="number" min="1" ${item.cantidad} class="input-elemento">
            <button class="delete btn btn-danger">X</button>
        </td>
        `
        tr.innerHTML = Content
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)

    })
    carritoTotal()
}

function carritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal') 
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ""))
        Total= Total + precio*item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${Total}`
}

function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".itemCarrito")
    const producto = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length ; i++){
  
      if(carrito[i].producto.trim() === producto.trim()){
        carrito.splice(i, 1)
      }
    }
  
    const alert = document.querySelector('.remove')
  
    setTimeout( function(){
      alert.classList.add('remove')
    }, 2000)
      alert.classList.remove('remove')
  
    tr.remove()
    carritoTotal()
}
