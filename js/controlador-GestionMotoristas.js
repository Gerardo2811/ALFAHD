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
        <td id="nombreCompleto2">${motoristasOficiales[i].nombreCompleto}</td>
        <td id="correoElectronico2">${motoristasOficiales[i].email}</td>
        <td id="fechaNacimiento2">${motoristasOficiales[i].fechaNacimiento}</td>
        <td id="departamentoLaboral2">${motoristasOficiales[i].departamentoLaboral}</td>
        <td>
       
        <button  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="seleccionar(${i.toString()})">Modificar</button>
        <button type="button" class="btn btn-danger" onclick="eliminar(${i})">Eliminar</button>
        
        </td>
    </tr>` ;
    }
}

function guardarMotoristaOficial(){

    motoristasOficiales = {
        nombreCompleto:document.getElementById('nombreCompleto').value,
        email:document.getElementById('correoElectronico').value,
        fechaNacimiento:document.getElementById('fechaNacimiento').value,
        numeroCelular:document.getElementById('numero').value,
        departamentoLaboral:document.getElementById('departamentoLaboral').value,
        password:document.getElementById('passsword').value,
      
    };
    axios({
        method:'POST',
        url:'../ALFHAD/api/motoristas-oficiales.php',
        responseType:'json',
        data: motoristasOficiales
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
                document.getElementById('correoElectronico').value=res.data.email,
                document.getElementById('fechaNacimiento').value=res.data.fechaNacimiento,
                document.getElementById('numero').value=res.data.numeroCelular,
                document.getElementById('departamentoLaboral').value=res.data.departamentoLaboral,
                document.getElementById('password').value=res.data.password,
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
        document.getElementById('numero').value=null,
        document.getElementById('departamentoLaboral').value=null,
        document.getElementById('password').value=null
        document.getElementById('guardar').style.display='inline';
        document.getElementById('actualizar').style.display= 'none'
    }




    

    function actualizarMotoristas(){
        motoristasOficiales ={
            nombreCompleto:document.getElementById('nombreCompleto').value,
            email:document.getElementById('correoElectronico').value,
            fechaNacimiento:document.getElementById('fechaNacimiento').value,
            numeroCelular:document.getElementById('numero').value,
            departamentoLaboral:document.getElementById('departamentoLaboral').value,
            password:document.getElementById('password').value
        };

        axios({
            method:'PUT',
            url:'../ALFHAD/api/motoristas-oficiales.php' +`?id=${motoristaOficialSeleccionado}` ,
            responseType:'json',
            data: motoristasOficiales
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

