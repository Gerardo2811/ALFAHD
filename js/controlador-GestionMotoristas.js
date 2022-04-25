var motoristasOficiales = [];
var motoristaOficialSeleccionado;

function obtenerMotoristasOficiales(){
    axios({
    method:'GET',
    url:'../ALFHAD/api/motoristas-oficiales.php',
    responseType:'json'
    }) .then(res=>{
        console.log(res.data);
        this.motoristasOficiales=res.data;
        llenarTablaMotoristasOficiales();
    }) .catch(error=>{
        console.error(error);
    });
}

obtenerMotoristasOficiales();

function llenarTablaMotoristasOficiales(){
    document.querySelector('#tabla-motoristasOficiales tbody').innerHTML ='';
    for(let i=0; i<motoristasOficiales.length;i++){
    document.querySelector('#tabla-motoristasOficiales tbody').innerHTML +=
    `<tr>
        <td id="nombreCompleto">${motoristasOficiales[i].nombreCompleto}</td>
        <td id="correoElectronico">${motoristasOficiales[i].correoElectronico}</td>
        <td id="fechaNacimiento">${motoristasOficiales[i].fechaNacimiento}</td>
        <td id="departamentoLaboral">${motoristasOficiales[i].departamentoLaboral}</td>
        <td>
       
        <button  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="seleccionar(${i})">Modificar</button>
        <button type="button" class="btn btn-danger" onclick="eliminar(${i})">Eliminar</button>
        
        </td>
    </tr>` ;
    }
}

function guardarMotoristaOficial(){

    motoristasOficales = {
        nombreCompleto:document.getElementById('nombreCompleto').value,
        correoElectronico:document.getElementById('correoElectronico').value,
        fechaNacimiento:document.getElementById('fechaNacimiento').value,
        departamentoLaboral:document.getElementById('departamentoLaboral').value,
      
    };
    axios({
        method:'POST',
        url:'../ALFHAD/api/motoristas-oficiales.php',
        responseType:'json',
        data: motoristasOficales
        }) .then(res=>{
            console.log(res.data);
            this.motoristasOficales=res.data;
            limpiar();
            obtenerMotoristasOficiales();
        }) .catch(error=>{
            console.error(error);
        });

    }


    function seleccionar(indice){
        motoristaOficialSeleccionado=indice;
    console.log('se selecciono el elemento: '+ indice);

    axios({
        method:'GET',
        url:'../ALFHAD/api/motoristas-oficiales.php' + `?id=${indice}`,
        responseType:'json',
        }) .then(res=>{
            console.log(res);
            document.getElementById('nombreCompleto').value=res.data.nombreCompleto,
                document.getElementById('correoElectronico').value=res.data.correoElectronico,
                document.getElementById('fechaNacimiento').value=res.data.fechaNacimiento,
                document.getElementById('departamentoLaboral').value=res.data.departamentoLaboral,
                document.getElementById('guardar').style.display='none',
                document.getElementById('actualizar').style.display= 'inline'

        }) .catch(error=>{
            console.error(error);
        });
    }

    function limpiar(){
        document.getElementById('nombreCompleto').value=null,
        document.getElementById('correoElectronico').value=null,
        document.getElementById('fechaNacimiento').value=null,
        document.getElementById('departamentoLaboral').value=null,
        document.getElementById('email').value=null
        document.getElementById('guardar').style.display='inline';
        document.getElementById('actualizar').style.display= 'none'
    }




    

    function actualizarMotoristasOficiales(){
        motoristasOficales ={
            nombreCompleto:document.getElementById('nombreCompleto').value,
            correolectronico:document.getElementById('correoElectronico').value,
            fechaNacimiento:document.getElementById('fechaNacimiento').value,
            departamentoLaboral:document.getElementById('departamentoLaboral').value,
        };

        axios({
            method:'PUT',
            url:'../ALFHAD/api/motoristas-oficiales.php' +`?id=${motoristaOficialSeleccionado}` ,
            responseType:'json',
            data: motoristasOficales
            }) .then(res=>{
                console.log(res.data);
                limpiar();
                obtenerMotoristasOficiales();
            }) .catch(error=>{
                console.error(error);
            });

            
    }

    function eliminar(indice){
        console.log('eliminar elemento con indiice: '+ indice);

        axios({
            method:'DELETE',
            url:'../ALFHAD/api/motoristas-oficiales.php' + `?id=${indice}`,
            responseType:'json'
            }) .then(res=>{
                console.log(res.data);
                obtenerMotoristasOficiales();
            }) .catch(error=>{
                console.error(error);
            });
    }

