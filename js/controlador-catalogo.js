// function pintandoCategorias() {
//     //console.log('Works');
//     $.ajax({
//     url:'../ALFHAD/api/empresas.php',
//     method:'get',
//         data:'',
//         dataType:'json',
//         success:function(categorias){
//             document.getElementById('contenedor-categorias').innerHTML = ``;
//             for(let i=0;i<categorias.length;i++) {
//                 document.getElementById('contenedor-categorias').innerHTML += `
//                 <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
//                     <div class="card-item card" style="background: ${categorias[i].color};" onclick="infoCategorias(${categorias[i].idCategoria})">
//                         <div class="row">
//                             <div class="col mx-auto text-center m-3">
//                                 <i class="${categorias[i].icono} cat-icon"></i>
//                             </div>
//                             <div class="col">

//                             </div>
//                         </div>
//                         <div class="row m-3 mt-4">
//                             <section class="col">
//                                 <h3 class="text-white font-weight-bolder">${categorias[i].nombreCategoria}</h3>
//                                 <p class="text-white" style="font-size: 13px;">
//                                     ${categorias[i].empresas.length} Comercios
//                                 </p>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//             }
           
//             console.log(categorias);
//         },
//         error:function (error) {
//             console.error(error);
            
//         }

//     });

    
// }

// pintandoCategorias();
var categorias=[];

function obtenerCatalogo(){
    axios({
    method:'GET',
    url:'../ALFHAD/api/categorias.php',
    responseType:'json'
    }) .then(res=>{
        console.log(res.data);
        this.categorias=res.data;
        pintarCategorias();
    }) .catch(error=>{
        console.error(error);
    });
}

obtenerCatalogo();

function pintarCategorias(){
    document.getElementById('contenedor-categorias').innerHTML = ``;
            for(let i=0;i<categorias.length;i++) {
                document.getElementById('contenedor-categorias').innerHTML += `
                <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
                    <div class="card-item card" style="background: ${categorias[i].color};" onclick="infoCategorias(${categorias[i].idCategoria})">
                        <div class="row">
                            <div class="col mx-auto text-center m-3">
                                <i class="${categorias[i].icono} cat-icon"></i>
                            </div>
                            <div class="col">

                            </div>
                        </div>
                        <div class="row m-3 mt-4">
                            <section class="col">
                                <h3 class="text-white font-weight-bolder">${categorias[i].nombreCategoria}</h3>
                                <p class="text-white" style="font-size: 13px;">
                                    ${categorias[i].empresas.length} Comercios
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
                `;
            }
}


// Ver info sobre categorias
function infoCategorias(idCategoria) {
    console.log(idCategoria);
    document.getElementById('zona-categorias').innerHTML = ``;
    $('#modalCategorias').modal('show');
        //console.log(categorias[idCategoria].nombreCategoria);
        $.ajax({
            url:'../ALFHAD/api/categorias.php?id='+ idCategoria,
            method:'get',
            data:'',
            dataType:'json',
            success:function(categoria){
                document.getElementById('header-categorias').innerHTML = `${ categoria.nombreCategoria }`;
                $.ajax({
                    url:'../ALFHAD/api/empresas.php?idCategoria='+ idCategoria,
                    method:'get',
                    data:'',
                    dataType:'json',
                    success:function(empresas){
                        for(let i=0; i<empresas.length; i++) {
                            const productosPintar = empresas[i].productos;
                            console.log(productosPintar);
                            let productos = '';
                            
                            for(let j=0;j<productosPintar.length;j++) {
                                productos += `
                                    <div class="row p-2">
                                        <div class="col-lg-7">
                                            <h4 style="color:#563D7C;">${productosPintar[j].nombreProducto }</h4>
                                        </div>
                                        <div class="col-lg-5">
                                            <input type="button" class="btn btn-secondary" onclick="pedir(${ idCategoria } , ${empresas[i].idEmpresa } ,${ productosPintar[j].idProducto })" value="Pedir">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <p>${productosPintar[j].descripcion }</p>
                                        </div>
                                        <div class="col-lg-4 ml-auto">
                                            <b> ${ productosPintar[j].precio }</b>
                                        </div>
                                    </div>
                                    
                                `;
                            }
                            document.getElementById('zona-categorias').innerHTML += `
                                <div class="col-lg-6 col-sm-12 mt-2">
                                    <div class="card" style="border-radius:12px">
                                        <section>
                                            <img src="${empresas[i].imagen}" class="img-fluid" style="border-radius: 12px"/>
                                            <h3 style="color:  rgb(73, 53, 102); font-weight:bolder;">${empresas[i].nombreEmpresa }</h3>
                                        </section>
                                        <section class="p-3">
                                            ${ productos }
                                        </section>
                                    </div>
                                </div>
                            `;
                        }
                       
                    },
                    error:function (error) {
                        console.error(error);
                        
                    }
            
                });
                
                
               
            },
            error:function (error) {
                console.error(error);
                
            }
    
        });
        
};

//---------------------------------

// // Generando Usuarios 
// function listaUsuarios() { 
//     $.ajax({
//         url:'../backend/api/usuarios.php',
//         method:'get',
//         data:'',
//         dataType:'json',
//         success:function(usuarios){
//             document.getElementById('usuarioActual').innerHTML = '';
//             for (let i=0;i<usuarios.length;i++) {
//                 document.getElementById('usuarioActual').innerHTML += 
//                 `<option value="${ i }">${ usuarios[i].nombre } ${ usuarios[i].apellido }</option>`;
//             }
//             document.getElementById('usuarioActual').value = null;
//             console.log(usuarios);
//         },
//         error:function (error) {
//             console.error(error);
            
//         }

//     });

    
// }

// listaUsuarios();
// var id='';
// // Onchange para seleccionar un usuario
// function cambiarUsuario () {
//     $.ajax({
//         url:'../backend/api/usuarios.php',
//         method:'get',
//         data:'',
//         dataType:'json',
//         success:function(usuarios){
//             let usuarioSeleccionado = document.querySelector('#usuarioActual').value;
//             document.getElementById('texto-hola').innerHTML = `¡Hola ${usuarios[usuarioSeleccionado].nombre}!`;
//             id =usuarios[usuarioSeleccionado].idUsuario;
            
            
//         },
//         error:function (error) {
//             console.error(error);
            
//         }

//     });
    
//     return id;
// }

// // Ver Ordenes de un usuario con el boton de ver ordenes
// function verOrdenes() {
//     let usuario = document.querySelector('#usuarioActual').value;
//     // Header Modal
//     $.ajax({
//         url:'../backend/api/usuarios.php',
//         method:'get',
//         data:'',
//         dataType:'json',
//         success:function(usuarios){
//             console.log(usuarios[usuario].nombre);
//             document.querySelector('#modalUserLabel').innerHTML = `${usuarios[usuario].nombre} , Estas Son Tus Ordenes.`;
//             // Zona de Productos
//             console.log(usuarios[usuario].ordenes.length);
//             document.querySelector('#zona-productos').innerHTML = '';
//             for(let i=0;i<usuarios[usuario].ordenes.length;i++) {
//                 document.querySelector('#zona-productos').innerHTML += `
//                     <p>
//                         <h3 style="color: #563D7C; font-weight: bold;">${ usuarios[usuario].ordenes[i].nombreProducto }</h3>
//                     </p>
//                     <p style="font-size: 18px;">
//                         ${usuarios[usuario].ordenes[i].descripcion}
//                     </p>
//                     <p class="ml-auto">
//                         <b style="font-size: 25px">$${usuarios[usuario].ordenes[i].precio}</b>
//                     </p>
//                     <hr>
//                 `;
//             }
           
            
//         },
//         error:function (error) {
//             console.error(error);
            
//         }

//     });
    
// }



// // Funcion para pedir orden a los usuarios
// function pedir (idCategoria , idEmpresa , idProducto) {
//     console.log(idCategoria)
//     console.log(idEmpresa)
//     console.log(idProducto)
//     $('#modalPedidos').modal('show');

//     $.ajax({
//         url:'../backend/api/empresas.php?idCategoria='+ idCategoria,
//         method:'get',
//         data:'',
//         dataType:'json',
//         success:function(empresas){
//             for(let i=0; i<empresas.length; i++) {
//                 if (empresas[i].idEmpresa==idEmpresa) {
//                     const productos = empresas[i].productos;
//                     for (let j = 0; j < productos.length; j++) {
//                         if (productos[j].idProducto==idProducto) {
//                             var nombreProduct = productos[j].nombreProducto;
//                             var description = productos[j].descripcion;
//                             var valor = productos[j].precio;
//                             document.getElementById('zona-pedidos').innerHTML =`
//                                 <h3>${ nombreProduct}</h3><br>
//                                 <p>${description}</p><br>
//                                 <div class="row">
//                                     <div class="col-lg-4">
//                                         Cantidad A Solicitar : 
//                                     </div>
//                                     <div class="col-lg-8">
//                                         <input type="text" class="form-control" id="txt-cantidad" />    
//                                     </div>
//                                 </div>
//                                 <div class="row">
//                                     <div class="col-lg-10 mr-auto">
                                        
//                                     </div>
//                                     <div class="col-lg-2"><br>
//                                     <b>$ ${valor}</b>
//                                     </div>
//                                 </div>
//                                 <div class="modal-footer">
//                                     <button type="button" onclick="agregarPedido('${nombreProduct}','${description}',${valor}, ${idProducto})" 
//                                     class="btn btn-secondary">
//                                     Procesar Orden</button>
//                                 </div>
//                             `;
//                             break;
//                         }
                        
//                     }
                  
                    
//                 }
               
                
//             }
           
//         },
//         error:function (error) {
//             console.error(error);
            
//         }

//     });
    
    
// }

// // Funcion para agregar un producto nuevo a un usuario 
// function agregarPedido(nombreProduct,description,valor, idProducto) {
//     let cantidad = document.getElementById('txt-cantidad').value;
//     console.log(cantidad);
//     console.log(nombreProduct);
//     console.log(description);
//     console.log(valor);
//     console.log(idProducto);
//     let usuario = cambiarUsuario();
//     console.log(usuario);
//     $.ajax({
//         url:'../backend/api/productos.php?id='+ usuario,
//         method:'put',
//         data:JSON.stringify({
//                 nombreProducto:nombreProduct,
//                 idProducto:idProducto,
//                 descripcion: description,
//                 cantidad: cantidad,
//                 precio: valor
//             }),
//         dataType:'json',
//         success:function(res){
//             pintandoCategoriasLugo();
//             //listaUsuarios();
//             $('#modalPedidos').modal('hide');
//             $('#modalCategorias').modal('hide');
//             console.log(res);
//         },
//         error:function (error) {
//             console.error(error);
            
//         }

    
//     });
// }

// // creando una nueva categoria
// function crearCategoria() {
//     $('#modalPedidos').modal('hide');
//     $('#modalCategorias').modal('hide');
//     $('#modalCreacionCategoria').modal('show');

// }

// function guardar() {
//     let txtnombre = document.getElementById('txt-nombre').value;
//     let txtid = document.getElementById('txt-id').value;
//     let txtdescripcion = document.getElementById('txt-descripcion').value;
//     let txtcolor = document.getElementById('txt-color').value;
//     let txticono = document.getElementById('txt-icono').value;
//     let empresa=[1,2,3];
//     $.ajax({
//         url:'../backend/api/categorias.php',
//         method:'post',
//         data:{
//                 nombreCategoria:txtnombre,
//                 idCategoria:txtid,
//                 descripcion:txtdescripcion,
//                 color:txtcolor,
//                 icono:txticono,
//                 empresas:empresa
//             },
//         dataType:'json',
//         success:function(res){
//             pintandoCategoriasLugo();
//             $('#modalCreacionCategoria').modal('hide');
//             console.log(res);
//         },
//         error:function (error) {
//             console.error(error);
            
//         }

//     });
    
//     $('#modalPedidos').modal('hide');
//     $('#modalCategorias').modal('hide');
    
// }