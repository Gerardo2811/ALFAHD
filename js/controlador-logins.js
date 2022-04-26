
function login(){

    
    axios({
        method:"post",
        url:'../ALFHAD/api/login.php',
        responseType:'json',
        data:{
            email:document.getElementById('email').value,
            password:document.getElementById('password').value
        }
        }) .then(res=>{
            console.log(res);
            if(res.data.codigoResultado == 1){
                window.location.href = "index-administracion.html"
        }else{
                document.getElementById('error').style.display ='block';
                document.getElementById('error').innerHTML = res.data.mensaje;
            }

           // this.administrador=res.data;
        }) .catch(error=>{
            console.error(error);
        });
   
}