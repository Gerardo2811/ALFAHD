var empresas= [];
var empresaSeleccionada;

function obtenerEmpresas(){
    axios({
    method:'GET',
    url:'../ALFHAD/api/empresas.php',
    responseType:'json'
    }) .then(res=>{
        console.log(res.data);
        this.empresas=res.data;
        llenarTablaEmpresas();
    }) .catch(error=>{
        console.error(error);
    });
}

obtenerEmpresas();

function llenarTablaEmpresas(){
    document.querySelector('#tabla-empresas tbody').innerHTML ='';
    for(let i=0; i<empresas.length;i++){
    document.querySelector('#tabla-empresas tbody').innerHTML +=
    `<tr>
        <td id="nombre-empresa">${empresas[i].nombreEmpresa}</td>
        <td id="direccion-empresa">${empresas[i].direccion}</td>
        <td id="email-empresa">${empresas[i].correoElectronico}</td>
        <td id="numero-empresa">${empresas[i].numeroTelefono}</td>
        <td>
       
        <button  type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="seleccionar(${i})">Modificar</button>
        <button type="button" class="btn btn-danger" onclick="eliminar(${i})">Eliminar</button>
        
        </td>
    </tr>` ;
    }
}
function guardarEmpresas(){

    empresa ={
        nombreEmpresa:document.getElementById('empresaNombre').value,
        tiempo:document.getElementById('tiempo').value,
        direccion:document.getElementById('direccion').value,
        numeroTelefono:document.getElementById('numero').value,
        correoElectronico:document.getElementById('email').value,
      
    };
    axios({
        method:'POST',
        url:'../ALFHAD/api/empresas.php',
        responseType:'json',
        data: empresa
        }) .then(res=>{
            console.log(res.data);
            this.empresa=res.data;
            limpiar();
            obtenerEmpresas();
        }) .catch(error=>{
            console.error(error);
        });

    }


    function seleccionar(indice){
        empresaSeleccionada=indice;
    console.log('se selecciono el elemento: '+ indice);

    axios({
        method:'GET',
        url:'../ALFHAD/api/empresas.php' + `?id=${indice}`,
        responseType:'json',
        }) .then(res=>{
            console.log(res);
            document.getElementById('empresaNombre').value=res.data.nombreEmpresa,
                document.getElementById('tiempo').value=res.data.tiempo,
                document.getElementById('direccion').value=res.data.direccion,
                document.getElementById('numero').value=res.data.numeroTelefono,
                document.getElementById('email').value=res.data.correoElectronico,
                document.getElementById('guardar').style.display='none',
                document.getElementById('actualizar').style.display= 'inline'

        }) .catch(error=>{
            console.error(error);
        });
    }

    function limpiar(){
        document.getElementById('empresaNombre').value=null,
        document.getElementById('tiempo').value=null,
        document.getElementById('direccion').value=null,
        document.getElementById('numero').value=null,
        document.getElementById('email').value=null
        document.getElementById('guardar').style.display='inline';
        document.getElementById('actualizar').style.display= 'none'
    }




    

    function actualizarEmpresa(){
        empresa ={
            nombreEmpresa:document.getElementById('empresaNombre').value,
            tiempo:document.getElementById('tiempo').value,
            direccion:document.getElementById('direccion').value,
            numeroTelefono:document.getElementById('numero').value,
            correoElectronico:document.getElementById('email').value,  
        };

        axios({
            method:'PUT',
            url:'../ALFHAD/api/empresas.php' +`?id=${empresaSeleccionada}` ,
            responseType:'json',
            data: empresa
            }) .then(res=>{
                console.log(res.data);
                limpiar();
                obtenerEmpresas();
            }) .catch(error=>{
                console.error(error);
            });

            
    }

    function eliminar(indice){
        console.log('eliminar elemento con indiice: '+ indice);

        axios({
            method:'DELETE',
            url:'../ALFHAD/api/empresas.php' + `?id=${indice}`,
            responseType:'json'
            }) .then(res=>{
                console.log(res.data);
               obtenerEmpresas();
            }) .catch(error=>{
                console.error(error);
            });
    }