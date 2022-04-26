var usuarios=[];

//Variables de el modal registro
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const formR = document.getElementById("formR")
const parrafo = document.getElementById("warnings")

//Variables del modal Google y Facebook
const formGF = document.getElementById("formGF")
const emailg_GF = document.getElementById("email_GF")
const pass_GF = document.getElementById("password_GF")
const parrafo_GF = document.getElementById("warnings_GF")


//funcion para validar el registro
formR.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})


//funcion para vlidar el registro de google y facebook
formGF.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo_GF.innerHTML = ""
    if(!regexEmail.test(emailg_GF.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass_GF.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo_GF.innerHTML = warnings
    }else{
        parrafo_GF.innerHTML = "Enviado"
    }
})



const url = '../ALFHAD/api/usuarios.php';
function guardar(){

    usuario ={
        nombre:document.getElementById('nombre').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
    };
    axios({
        method:'POST',
        url:url,
        responseType:'json',
        data: usuario
        }) .then(res=>{
            console.log(res.data);
            this.usuario=res.data;
        }) .catch(error=>{
            console.error(error);
        });
        document.getElementById('nombre').value=null,
        document.getElementById('email').value=null,
        document.getElementById('password').value=null
}


 function guardar2(){

    usuario ={
        email:document.getElementById('email_GF').value,
        password:document.getElementById('password_GF').value,
    };
    axios({
        method:'POST',
        url:'../ALFHAD/api/usuariosGF.php',
        responseType:'json',
        data: usuario
        }) .then(res=>{
            console.log(res.data);
            this.usuario=res.data;
        }) .catch(error=>{
            console.error(error);
        });
       
        document.getElementById('email_GF').value=null,
        document.getElementById('password_GF').value=null
}

function login(){

    usuario ={
        email:document.getElementById('email_GF').value,
        password:document.getElementById('password_GF').value,
    };
    axios({
        method:"'POST'",
        url:'../ALFHAD/api/usuariosGF.php',
        responseType:'json',
        data: usuario
        }) .then(res=>{
            console.log(res.data);
            this.usuario=res.data;
        }) .catch(error=>{
            console.error(error);
        });
   
}