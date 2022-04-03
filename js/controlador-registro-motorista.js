const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const password = document.getElementById('password')
const numero = document.getElementById ('numero')
const departamentos = document.getElementById('departamentos')
const fecha = document.getElementById('fecha')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    warnings.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `*El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `*El email no es valido <br>`
        entrar = true
    }
    if(numero.value.length <8){
        warnings += `*El numero de telefono no es valido <br>`
        entrar = true
    }
    if(fecha.value == "2004-12-31"){
        warnings += `*Seleccione una fecha <br>`
        entrar = true;
    }
    if(departamentos.value == "Departamento a laborar"){
        warnings += `*Seleccione un departamento <br>`
        entrar = true;
    }
    if(password.value.length < 8){
        warnings += `*La contrasena no es valida <br>`
        entrar = true
    }

        if(entrar){
            parrafo.innerHTML = warnings
            console.log('no da')
        }else{
            parrafo.innerHTML = "Enviado"
            console.log('si da')
        } 
})
