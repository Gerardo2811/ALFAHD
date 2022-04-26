var producto = [];
var productoSeleccionado;

function obtenerCarrito(){
    axios({
    method:'GET',
    url:'../ALFHAD/api/carrito.php',
    responseType:'json'
    }) .then(res=>{
        console.log(res.data);
        this.carrito=res.data;
        llenarCarrrito();
    }) .catch(error=>{
        console.error(error);
    });
}

obtenerCarrito();

function llenarCarrrito(){
    document.querySelector('#tabla tbody').innerHTML = '';
    for(let i=0; i<producto.length;i++){
    document.querySelector('#tabla tbody').innerHTML += 
    `<tr>
    <th scope="row">${i}</th>
    <td><img id="pequeño" src="img/HamburguesaMilanesa.png"></td>
    <td>Combo #${producto[i].nombreProducto}</td>
    <td>${producto[i].precio}</td>
    <td>${producto[i].cantidad}</td>
    <td><i class="fa-solid fa-delete-left"></i></td>
    </tr>
    ` 
    
  }
}


    function eliminar(indice){
        console.log('eliminar elemento con indiice: '+ indice);

        axios({
            method:'DELETE',
            url:'../ALFHAD/api/carrito.php' + `?id=${indice}`,
            responseType:'json'
            }) .then(res=>{
                console.log(res.data);
                obtenerCarrito();
            }) .catch(error=>{
                console.error(error);
            });
    }