var motoristas=[];
function obtenerMotoristas(){
    axios({
    method:'GET',
    url:'../ALFHAD/api/motoristas.php',
    responseType:'json'
    }) .then(res=>{
        console.log(res.data);
        this.motoristas=res.data;
        llenarTablaMotoristas();
    }) .catch(error=>{
        console.error(error);
    });
}

obtenerMotoristas();

function llenarTablaMotoristas(){
    document.querySelector('#tabla-motoristas tbody').innerHTML ='';
    for(let i=0; i<motoristas.length;i++){
    document.querySelector('#tabla-motoristas tbody').innerHTML +=
    `<tr>
        <td id="nombre-motorista">${motoristas[i].nombreCompleto}</td>
        <td id="correo-motorista">${motoristas[i].correoElectronico}</td>
        <td id="fecha-motorista">${motoristas[i].fechaNacimiento}</td>
        <td id="departamento-motorista">${motoristas[i].departamentoLaboral}</td>
        <td>
        <button type="button" onclick="guardarMotoristaOficial(${i})">Aceptar</button>
        <button type="button" onclick="eliminarMotorista(${i})">Rechazar</button>
        </td>
    </tr>` ;
    }
}

function eliminarMotorista(indice){
    console.log('eliminar elemento con indiice: '+ indice);

    axios({
        method:'DELETE',
        url:'../ALFHAD/api/motoristas.php' + `?id=${indice}`,
        responseType:'json'
        }) .then(res=>{
            console.log(res.data);
           obtenerUsuarios();
        }) .catch(error=>{
            console.error(error);
        });
}

function guardarMotoristaOficial(){

    motoristaOficial ={
        nombreCompleto:document.getElementById('nombre-motorista').value,
        correoElectronico:document.getElementById('correo-motorista').value,
        fechaNacimiento:document.getElementById('fecha-motorista').value,
        departamentoLaboral:document.getElementById('departamento-motorista').value,
    };
    axios({
        method:'POST',
        url:'../ALFHAD/api/motorista-oficiales.php',
        responseType:'json',
        data: motorista
        }) .then(res=>{
            console.log(res.data);
            this.motorista=res.data;
        }) .catch(error=>{
            console.error(error);
        });
       


}