// function localizacion(posicion){

//     var latitude = posicion.coords.latitude;
//     var longitude = posicion.coords.longitude;

//     var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=YOUR_API_KEY";

//     output.innerHTML ="<img src='"+imgURL+"'>";

    

// }

// function error(){
//     output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

// }

// navigator.geolocation.getCurrentPosition(localizacion,error);



var motoristas = [];
function obtenerMotoristas(){
    axios({
        method:'GET',
        url: '../api/motoristas.php',
        responseType: 'json'
    }).then(res=>{
        console.log(res.data);
        this.motoristas=res.data;
        llenarMotoristas();
    }).catch(error=>{
        console.log(error);
    })
}

obtenerMotoristas();

function llenarMotoristas(){
    document.querySelector('#tabla-usuarios tbody').innerHTML ='';
    for(let i=0; i<motoristas.length;i++){
        document.querySelector('#tabla-usuarios tbody').innerHTML +=
        `<tr>
<td>${motoristas[i].nombreCompleto}</td>
<td>${motoristas[i].numeroCelular}</td>
<td>${motoristas[i].departamentoLaboral}</td>
<td>${motoristas[i].fechaNacimiento}</td>
<td>
</tr>`
        ;
    }
}


// `
//         <a href="#" class="motoristas list-group-item list-group-item-action" id="solicitud-uno"></a>
//         <div class="d-flex w-100 justify-content-between">
//         <h5 class="mb-1">${motoristas[i].nombreCompleto}</h5>
//         <small>Hace 3 dias</small>
//         </div>
//         <p class="mb-1">${motoristas[i].numeroCelular}</p>
//         <p class="mb-1">${motoristas[i].departamentoLaboral}</p>
//         <small>${motoristas[i].fechaNacimiento}</small>             
//         </a>
//         `