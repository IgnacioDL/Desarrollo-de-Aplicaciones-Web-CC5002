/**
 * Imprime error
 * @param {string|number} msg
 */

function mostrarError(msg) {

    let contenedor = document.getElementById('error');

    contenedor.innerHTML = msg;
    contenedor.style.display = 'block';
    contenedor.style.fontWeight = '800';

}

/**
 * Borra mensaje de  error
 */
function borrarError() {

    let contenedor = document.getElementById('error');
    contenedor.style.display = 'none';

}

/**
 Validacion del formulario
 */
function myValFunction() {

    /** @type {string}*/ let nombre = document.getElementById('nombre').value;
    /** @type {string}*/ let password = document.getElementById('password').value;
    /** @type {number}*/ let autodestruirNumber = document.getElementById('autodestruir').value;
    /** @type {string}*/ let comentario = document.getElementById('comentario').value;
    /** @type {string}*/ let privacidad = document.getElementById('privacidad').value;
    /** @type {string}*/ let archivo = document.getElementById('archivo').value;

    let regex = /^[a-zA-Z ]*$/;
    let regexNum = /^[0-9]*$/;
    let bannedPasswords = ["password", "1234", "pass", "user", "hackbox"]
    let errorList = [];
    /** @type {string}*/ let mensajeError = '';

    if (nombre.length < 10) {
        mensajeError += 'El nombre es demasiado corto (no menos de 10 caracteres)<br>';
        if (!errorList.includes('Nombre')){
            errorList.push('Nombre');
        }
    }
    if (nombre.length > 100) {
        mensajeError += 'El nombre es demasiado largo (no más de 100 caracteres)<br>';
        if (!errorList.includes('Nombre')){
            errorList.push('Nombre');
        }
    }
    if (!regex.test(nombre)) {
        mensajeError += 'El nombre debe estar escrito sólo con letras sin tildes ni guiones<br>';
        if (!errorList.includes('Nombre')){
            errorList.push('Nombre');
        }
    }
    if (archivo.length <1) {
        mensajeError += 'Debe seleccionar un archivo<br>';
        if (!errorList.includes('Archivo')){
            errorList.push('Archivo');
        }
    }

    if (privacidad.length <1) {
        mensajeError += 'Debe ser seleccionada una opción de privacidad<br>';
        if (!errorList.includes('Privacidad')){
            errorList.push('Privacidad');
        }
    }

    if (password.length > 10) {
        mensajeError += 'La contraseña debe tener entre 1 y 10 caracteres<br>';
        if (!errorList.includes('Password')){
            errorList.push('Password');
        }
    }

    if (bannedPasswords.includes(password)) {
        mensajeError += 'La contraseña es muy simple, debe escoger otra<br>';
        if (!errorList.includes('Password')){
            errorList.push('Password');
        }
    }

    if (!regexNum.test(autodestruirNumber)) {
        mensajeError += 'El campo Autodestruir sólo debe tener números<br>';
        if (!errorList.includes('Autodestruir')){
            errorList.push('Autodestruir');
        }
    }
    if (autodestruirNumber ===0) {
        mensajeError += 'El número de Autodestruir debe ser mayor a 0<br>';
        if (!errorList.includes('Autodestruir')){
            errorList.push('Autodestruir');
        }
    }
    if (autodestruirNumber > 3153600) {
        mensajeError += 'El número de Autodestruir debe ser menor a 3153600<br>';
        if (!errorList.includes('Autodestruir')){
            errorList.push('Autodestruir');
        }
    }

    if (comentario.length > 1000) {
        mensajeError += 'El comentario debe tener menos de 1000 caracteres<br>';
        if (!errorList.includes('Comentario')){
            errorList.push('Comentario');
        }
    }

    if (errorList.length>0) {

        let errorSummary = 'Su formulario falló en: '

        for (let i=0; i<errorList.length; i++){
            if (i===0){
                errorSummary = errorSummary + errorList[i];
            }
            else if (i===(errorList.length-1)){
                errorSummary = errorSummary + ' y ' + errorList[i];
            }
            else {
                errorSummary = errorSummary + ', ' + errorList[i];
            }
        }

        mostrarError(errorSummary + '<br>' + mensajeError);
        return false;
    }

    return true;

}

console.log('app v1.0'); // stack trace