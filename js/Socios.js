document.getElementById("iniciar").addEventListener("click",iniciarSesion);
document.getElementById("registro").addEventListener("click",register);
window.addEventListener("resize",anchoPagina);


// Declaración de variables
var contenedor_login_register = document.querySelector(".form_login-regis");
var formulario_login = document.querySelector(".form_login");
var formulario_register = document.querySelector(".form_regis");
var caja_trasera_login = document.querySelector(".caja-login");
var caja_trasera_register = document.querySelector(".caja-registro");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display= "block";
        caja_trasera_register.style.display= "block";
    }
    else{
        caja_trasera_register.style.display= "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display= "none";
        formulario_login.style.display= "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}
anchoPagina();


function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display ="none";
        contenedor_login_register.style.left= "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }
    else{
        formulario_register.style.display ="none";
        contenedor_login_register.style.left= "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }

}


function register(){

    if(window.innerWidth > 850){
    formulario_register.style.display ="block";
    contenedor_login_register.style.left= "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
    }
    else{
        formulario_register.style.display ="block";
        contenedor_login_register.style.left= "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

// efecto de imagen
function agrandar(x) {
    x.style.transform = "scale(1.15)";
    x.style.transition = "transform 0.3s ease";
}

function normal(x) {
    x.style.transform = "scale(1)";
}

const log = document.getElementsByClassName("logo");
for (let i = 0; i < log.length; i++) {
    log[i].onmouseover = function() { agrandar(this); };
    log[i].onmouseout = function() { normal(this); };
}

const imagen = document.querySelector('.logo');
imagen.style.display = "block";
imagen.style.marginLeft = "auto";
imagen.style.marginRight = "auto";