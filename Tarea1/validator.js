var regionesConComunas = {
    "Región Metropolitana de Santiago": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
    "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
    "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
    "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
    "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
    "Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
    "Región del Libertador Gral. Bernardo O Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
    "Región del Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
    "Región de Ñuble": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
    "Región del Biobío": ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Álamos", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"],
    "Región de la Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
    "Región de Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
    "Región de Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
    "Región Aisén del Gral. Carlos Ibáñez del Campo": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
    "Región de Magallanes y de la Antártica Chilena": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
}

let regionContainer = document.getElementById('region');
for (region in regionesConComunas) {
    regionContainer.innerHTML += `
    <option value="${region}">${region}</option>
    `
}

/**
 Adds "Comunas" as options for a select tag
 */
function addComunas() {
    let regionValue = document.getElementById('region').value;
    let comunaContainer = document.getElementById('comuna');
    if (!(regionValue === "")) {
        comunaContainer.innerHTML = `<option value="" selected="selected">Seleccione una opción</option>`;
        for (comuna in regionesConComunas[regionValue]) {
            comunaContainer.innerHTML += `
        <option value="${comuna}">${regionesConComunas[regionValue][comuna]}</option>
        `
        }
    } else if (regionValue === "") {
        comunaContainer.innerHTML = `<option value="" selected="selected">Seleccione una opción</option>`;
    }
}

/** @type {number}*/ let numberOfMascots = 1;
let addedMascots = [];

/**
 Form validator
 */
function myValidator() {
    /** @type {string}*/ let region = document.getElementById('region').value;
    /** @type {string}*/ let comuna = document.getElementById('comuna').value;
    /** @type {string}*/ let calle = document.getElementById('calle').value;
    /** @type {string}*/ let numero = document.getElementById('numero').value;
    /** @type {string}*/ let sector = document.getElementById('sector').value;
    /** @type {string}*/ let nombre = document.getElementById('nombre').value;
    /** @type {string}*/ let email = document.getElementById('email').value;
    /** @type {string}*/ let celular = document.getElementById('celular').value;
    /** @type {string}*/ let tipoMascota = document.getElementById('tipo-mascota').value;
    /** @type {string}*/ let edadMascota = document.getElementById('edad-mascota').value;
    /** @type {string}*/ let colorMascota = document.getElementById('color-mascota').value;
    /** @type {string}*/ let razaMascota = document.getElementById('raza-mascota').value;
    /** @type {string}*/ let esterilizadoMascota = document.getElementById('esterilizado-mascota').value;
    /** @type {string}*/ let vacunasMascota = document.getElementById('vacunas-mascota').value;
    /** @type {string}*/ let fotoMascota = document.getElementById('foto-mascota').value;
    /** @type {string}*/ let errorMessage = '';
    /** @type {number}*/ let errorCounter = 0;

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regexCelular = /^(\+56|56|\+ 56|\+5 6|\+5 6 |\+ 5 6|56 |\+56 |\+ 56 |\+ 5 6 )?(9|9 )[\d]{8}$/;
    let regexInt = /^[123456789]\d{0,4}$/;
    let errorList = [];


    if (region.length === 0) {
        errorMessage += 'No se ha seleccionado ninguna Región<br>'
        if (!errorList.includes('Región')) {
            errorList.push('Región');
        }
        errorCounter++;
    }
    if (comuna.length === 0) {
        errorMessage += 'No se ha seleccionado ninguna Comuna<br>'
        if (!errorList.includes('Comuna')) {
            errorList.push('Comuna');
        }
        errorCounter++;
    }
    if (calle.length === 0) {
        errorMessage += 'No se ha escrito ningún nombre de Calle<br>';
        if (!errorList.includes('Calle')) {
            errorList.push('Calle');
        }
        errorCounter++;
    }
    if (calle.length > 250) {
        errorMessage += 'El nombre de Calle es demasiado largo (no más de 250 caracteres)<br>';
        if (!errorList.includes('Calle')) {
            errorList.push('Calle');
        }
        errorCounter++;
    }
    if (numero.length === 0) {
        errorMessage += 'No se ha escrito ningún Número de Calle<br>';
        if (!errorList.includes('Número de Calle')) {
            errorList.push('Número de Calle');
        }
        errorCounter++;
    }
    if (numero.length > 20) {
        errorMessage += 'El Número de Calle es demasiado largo (no más de 20 caracteres)<br>';
        if (!errorList.includes('Número de Calle')) {
            errorList.push('Número de Calle');
        }
        errorCounter++;
    }
    if (sector.length > 100) {
        errorMessage += 'El Sector es demasiado largo (no más de 100 caracteres)<br>';
        if (!errorList.includes('Sector')) {
            errorList.push('Sector');
        }
        errorCounter++;
    }
    if (nombre.length === 0) {
        errorMessage += 'No se ha escrito ningún Nombre de Contacto<br>';
        if (!errorList.includes('Nombre')) {
            errorList.push('Nombre');
        }
        errorCounter++;
    }
    if (nombre.length > 200) {
        errorMessage += 'El Nombre de contacto es demasiado largo (no más de 200 caracteres)<br>';
        if (!errorList.includes('Nombre')) {
            errorList.push('Nombre');
        }
        errorCounter++;
    }
    if (email.length === 0) {
        errorMessage += 'No se ha escrito ningún Email<br>';
        if (!errorList.includes('Email')) {
            errorList.push('Email');
        }
        errorCounter++;
    }
    if (!regexEmail.test(email)) {
        errorMessage += 'El campo Email no contiene un email válido<br>';
        if (!errorList.includes('Email')) {
            errorList.push('Email');
        }
        errorCounter++;
    }
    if (!(celular.length === 0)) {
        if (!regexCelular.test(celular)) {
            errorMessage += 'El número Celular no contiene un número móvil válido. Recuerde que son 9 números<br>';
            if (!errorList.includes('Celular')) {
                errorList.push('Celular');
            }
        }
        errorCounter++;
    }
    if (tipoMascota.length === 0) {
        errorMessage += 'No se ha seleccionado ningún Tipo de mascota<br>';
        if (!errorList.includes('Tipo')) {
            errorList.push('Tipo');
        }
        errorCounter++;
    }
    if (tipoMascota === "otro") {
        /** @type {string}*/ let otroTipoMascota = document.getElementById('otro-tipo').value;
        if (otroTipoMascota.length === 0) {
            errorMessage += 'Se ha seleccionado "otro" en tipo de mascota pero no se ha escrito ningún tipo<br>';
            if (!errorList.includes('Tipo')) {
                errorList.push('Tipo');
            }
        }
        errorCounter++;
    }
    if (tipoMascota === "otro") {
        /** @type {string}*/ let otroTipoMascota = document.getElementById('otro-tipo').value;
        if (otroTipoMascota.length > 40) {
            errorMessage += 'El Color de mascota es demasiado largo (no más de 40 caracteres)<br>';
            if (!errorList.includes('Tipo')) {
                errorList.push('Tipo');
            }
        }
        errorCounter++;
    }
    if (edadMascota.length === 0) {
        errorMessage += 'No se ha escrito ninguna Edad de mascota<br>';
        if (!errorList.includes('Edad')) {
            errorList.push('Edad');
        }
        errorCounter++;
    }
    if (!(edadMascota === "0") && !regexInt.test(edadMascota)) {
        errorMessage += 'La Edad de mascota no es válida (escriba sólo números)<br>';
        if (!errorList.includes('Edad')) {
            errorList.push('Edad');
        }
        errorCounter++;
    }
    if (colorMascota.length === 0) {
        errorMessage += 'No se ha escrito ningún Color de mascota<br>';
        if (!errorList.includes('Color')) {
            errorList.push('Color');
        }
        errorCounter++;
    }
    if (colorMascota.length > 30) {
        errorMessage += 'El Color de mascota es demasiado largo (no más de 30 caracteres)<br>';
        if (!errorList.includes('Color')) {
            errorList.push('Color');
        }
        errorCounter++;
    }
    if (razaMascota.length === 0) {
        errorMessage += 'No se ha escrito ninguna Raza de mascota<br>';
        if (!errorList.includes('Raza')) {
            errorList.push('Raza');
        }
        errorCounter++;
    }
    if (razaMascota.length > 30) {
        errorMessage += 'La Raza de mascota es demasiado larga (no más de 30 caracteres)<br>';
        if (!errorList.includes('Raza')) {
            errorList.push('Raza');
        }
        errorCounter++;
    }
    if (esterilizadoMascota.length === 0) {
        errorMessage += 'No se ha seleccionado ninguna opción de Esterilizado de mascota<br>';
        if (!errorList.includes('Esterilizado')) {
            errorList.push('Esterilizado');
        }
        errorCounter++;
    }
    if (vacunasMascota.length === 0) {
        errorMessage += 'No se ha seleccionado ninguna opción de Vacunas al día de mascota<br>';
        if (!errorList.includes('Vacunas al día')) {
            errorList.push('Vacunas al día');
        }
        errorCounter++;
    }
    if (fotoMascota.length === 0) {
        errorMessage += 'No se ha seleccionado ninguna Foto de mascota<br>';
        if (!errorList.includes('Foto')) {
            errorList.push('Foto');
        }
        errorCounter++;
    }
    let fileInputContainer = document.getElementById("file-input-container");
    if (fileInputContainer.childElementCount > 14) {
        errorMessage += 'Sólo se pueden agregar un máximo de 5 Fotos por mascota<br>';
        if (!errorList.includes('Foto')) {
            errorList.push('Foto');
        }
        errorCounter++;
    }

    for (mascota in addedMascots) {
        /** @type {string}*/ let tipoMascotaN = document.getElementById(`tipo-mascota${addedMascots[mascota]}`).value;
        /** @type {string}*/ let edadMascotaN = document.getElementById(`edad-mascota${addedMascots[mascota]}`).value;
        /** @type {string}*/ let colorMascotaN = document.getElementById(`color-mascota${addedMascots[mascota]}`).value;
        /** @type {string}*/ let razaMascotaN = document.getElementById(`raza-mascota${addedMascots[mascota]}`).value;
        /** @type {string}*/ let esterilizadoMascotaN = document.getElementById(`esterilizado-mascota${addedMascots[mascota]}`).value;
        /** @type {string}*/ let vacunasMascotaN = document.getElementById(`vacunas-mascota${addedMascots[mascota]}`).value;
        /** @type {string}*/ let fotoMascotaN = document.getElementById(`foto-mascota${addedMascots[mascota]}`).value;

        if (tipoMascotaN.length === 0) {
            errorMessage += `No se ha seleccionado ningún Tipo de mascota #${addedMascots[mascota]}<br>`;
            if (!errorList.includes(`Tipo #${addedMascots[mascota]}`)) {
                errorList.push(`Tipo #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (tipoMascotaN === "otro") {
            /** @type {string}*/ let otroTipoMascotaN = document.getElementById(`otro-tipo${addedMascots[mascota]}`).value;
            if (otroTipoMascotaN.length === 0) {
                errorMessage += `Se ha seleccionado "otro" en tipo de mascota #${addedMascots[mascota]} pero no se ha escrito ningún tipo<br>`;
                if (!errorList.includes(`Tipo #${addedMascots[mascota]}`)) {
                    errorList.push(`Tipo #${addedMascots[mascota]}`);
                }
            }
            errorCounter++;
        }
        if (tipoMascotaN === "otro") {
            /** @type {string}*/ let otroTipoMascotaN = document.getElementById(`otro-tipo${addedMascots[mascota]}`).value;
            if (otroTipoMascotaN.length > 40) {
                errorMessage += `El Color de mascota #${addedMascots[mascota]} es demasiado largo (no más de 40 caracteres)<br>`;
                if (!errorList.includes(`Tipo #${addedMascots[mascota]}`)) {
                    errorList.push(`Tipo #${addedMascots[mascota]}`);
                }
            }
            errorCounter++;
        }
        if (edadMascotaN.length === 0) {
            errorMessage += `No se ha escrito ninguna Edad de mascota #${addedMascots[mascota]}<br>`;
            if (!errorList.includes(`Edad #${addedMascots[mascota]}`)) {
                errorList.push(`Edad #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (!(edadMascotaN === "0") && !regexInt.test(edadMascota)) {
            errorMessage += `La Edad de mascota #${addedMascots[mascota]} no es válida (escriba sólo números)<br>`;
            if (!errorList.includes(`Edad #${addedMascots[mascota]}`)) {
                errorList.push(`Edad #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (colorMascotaN.length === 0) {
            errorMessage += `No se ha escrito ningún Color de mascota #${addedMascots[mascota]}<br>`;
            if (!errorList.includes(`Color #${addedMascots[mascota]}`)) {
                errorList.push(`Color #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (colorMascotaN.length > 30) {
            errorMessage += `El Color de mascota #${addedMascots[mascota]} es demasiado largo (no más de 30 caracteres)<br>`;
            if (!errorList.includes(`Color #${addedMascots[mascota]}`)) {
                errorList.push(`Color #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (razaMascotaN.length === 0) {
            errorMessage += `No se ha escrito ninguna Raza de mascota #${addedMascots[mascota]}<br>`;
            if (!errorList.includes(`Raza #${addedMascots[mascota]}`)) {
                errorList.push(`Raza #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (razaMascotaN.length > 30) {
            errorMessage += `La Raza de mascota #${addedMascots[mascota]} es demasiado larga (no más de 30 caracteres)<br>`;
            if (!errorList.includes(`Raza #${addedMascots[mascota]}`)) {
                errorList.push(`Raza #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (esterilizadoMascotaN.length === 0) {
            errorMessage += `No se ha seleccionado ninguna opción de Esterilizado de mascota #${addedMascots[mascota]}<br>`;
            if (!errorList.includes(`Esterilizado #${addedMascots[mascota]}`)) {
                errorList.push(`Esterilizado #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (vacunasMascotaN.length === 0) {
            errorMessage += `No se ha seleccionado ninguna opción de Vacunas al día de mascota #${addedMascots[mascota]}<br>`;
            if (!errorList.includes(`Vacunas al día #${addedMascots[mascota]}`)) {
                errorList.push(`Vacunas al día #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        if (fotoMascotaN.length === 0) {
            errorMessage += `No se ha seleccionado ninguna Foto de mascota #${addedMascots[mascota]}<br>`;
            if (!errorList.includes(`Foto mascota #${addedMascots[mascota]}`)) {
                errorList.push(`Foto mascota #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
        let fileInputContainerN = document.getElementById(`file-input-container${addedMascots[mascota]}`);
        if (fileInputContainerN.childElementCount > 14) {
            errorMessage += `Sólo se pueden agregar un máximo de 5 Fotos por mascota #${addedMascots[mascota]}<br>`;
            if (!errorList.includes(`Foto mascota #${addedMascots[mascota]}`)) {
                errorList.push(`Foto mascota #${addedMascots[mascota]}`);
            }
            errorCounter++;
        }
    }

    if (errorList.length > 0) {

        let errorSummary = 'Su formulario falló en: ';

        for (let i = 0; i < errorList.length; i++) {
            if (i === 0) {
                errorSummary = errorSummary + errorList[i];
            } else if (i === (errorList.length - 1)) {
                errorSummary = errorSummary + ' y ' + errorList[i];
            } else {
                errorSummary = errorSummary + ', ' + errorList[i];
            }
        }
        if (errorCounter > 3) {
            let listError = errorMessage.split("<br>");
            showError(errorSummary + '<br>' + "Podrías partir por lo siguiente: " + listError[0] + '<br>' + listError[1] + '<br>' + listError[2]);
        } else {
            showError(errorSummary + '<br>' + errorMessage);
        }

        return false;
    }

    return true;
}

let fileCounter = [1];

/**
 Adds a file input with a limit of 5
 */
function addFile(n) {
    if (n === 1) {
        if (fileCounter[0] < 5) {
            let fileInputContainer = document.getElementById("file-input-container");
            fileInputContainer.innerHTML = fileInputContainer.innerHTML + `
        <br>
        <label for="foto-mascota${fileCounter[0] + 1}">Seleccionar Foto</label>
        <input type="file" class="form-control-file" name="foto-mascota${fileCounter[0] + 1}" 
                id="foto-mascota${fileCounter[0] + 1}" accept="image/jpeg">
        `;
            fileCounter[0]++;
        }
    } else {
        if (fileCounter[n - 1] < 5) {
            let fileInputContainer = document.getElementById(`file-input-container${n}`);
            fileInputContainer.innerHTML = fileInputContainer.innerHTML + `
        <br>
        <label for="foto-mascota${fileCounter[n]}">Seleccionar Foto</label>
        <input type="file" class="form-control-file" name="foto-mascota${fileCounter[n]}" 
                id="foto-mascota${fileCounter[n]}" accept="image/jpeg">
        `;
            fileCounter[n - 1]++;
        }
    }
}

/**
 * Prints error message
 * @param {string|number} message
 */

function showError(message) {

    let container = document.getElementById('error');

    container.innerHTML = message;
    container.style.display = 'block';
    container.style.fontWeight = '800';
}

/**
 * Erase error message
 */
function eraseError() {

    let container = document.getElementById('error');
    container.style.display = 'none';

}


let otherExist = [false];

/**
 * Adds an "Other" input text
 */
function addOther(n) {
    if (n === 1) {
        /** @type {string}*/ let tipoMascota = document.getElementById('tipo-mascota').value;
        let otherContainer = document.getElementById("other-container");

        if (tipoMascota === "otro" && otherExist[0] === false) {
            otherExist[0] = true;
            otherContainer.innerHTML = otherContainer.innerHTML + `
            <label for="otro-tipo">Escriba el Tipo</label>
            <input type="text" class="form-control" name="otro-tipo" id="otro-tipo" 
                size="40" maxlength="40"><br>
            `
        } else if (tipoMascota === "otro" && otherExist[0] === true) {
            otherContainer.style.display = 'block';
        } else {
            otherContainer.style.display = 'none';
        }
    } else {
        /** @type {string}*/ let tipoMascotaN = document.getElementById(`tipo-mascota${numberOfMascots}`).value;
        let otherContainerN = document.getElementById(`other-container${numberOfMascots}`);

        if (tipoMascotaN === "otro" && otherExist[n - 1] === false) {
            otherExist[n - 1] = true;
            otherContainerN.innerHTML = otherContainerN.innerHTML + `
            <label for="otro-tipo${numberOfMascots}">Escriba el Tipo</label>
            <input type="text" class="form-control" name="otro-tipo${numberOfMascots}" id="otro-tipo${numberOfMascots}" 
                size="40" maxlength="40"><br>
            `
        } else if (tipoMascotaN === "otro" && otherExist[n - 1] === true) {
            otherContainerN.style.display = 'block';
        } else {
            otherContainerN.style.display = 'none';
        }
    }
}

/**
 * Adds all the inputs to submit another mascot
 */
function addMascot() {
    fileCounter.push(1);
    addedMascots.push(numberOfMascots + 1);
    otherExist.push(false)
    let mascotSectionContainer = document.getElementById(`mascot-section-container-${numberOfMascots + 1}`);
    mascotSectionContainer.innerHTML += `<br>
    <h3>Información de Mascota ${numberOfMascots + 1}:</h3><br>

                <label for="tipo-mascota${numberOfMascots + 1}">Tipo</label>
                <select class="form-control" name="tipo-mascota${numberOfMascots + 1}" 
                        id="tipo-mascota${numberOfMascots + 1}" 
                        onchange="addOther(${numberOfMascots + 1})">
                    <option value="" selected="selected">Seleccione una opción</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="pez">Pez</option>
                    <option value="tortuga">Tortuga</option>
                    <option value="hamster">Hámster</option>
                    <option value="loro">Loro</option>
                    <option value="iguana">Iguana</option>
                    <option value="araña">Araña</option>
                    <option value="otro">Otro</option>

                </select><br>

                <div id="other-container${numberOfMascots + 1}"></div>

                <label for="edad-mascota${numberOfMascots + 1}">Edad en Años</label>
                <input type="text" class="form-control" name="edad-mascota${numberOfMascots + 1}" 
                        id="edad-mascota${numberOfMascots + 1}" 
                       size="5" maxlength="5"><br>

                <label for="color-mascota${numberOfMascots + 1}">Color</label>
                <input type="text" class="form-control" name="color-mascota${numberOfMascots + 1}" 
                        id="color-mascota${numberOfMascots + 1}" 
                       size="30" maxlength="30"><br>

                <label for="raza-mascota${numberOfMascots + 1}">Raza</label>
                <input type="text" class="form-control" name="raza-mascota${numberOfMascots + 1}" 
                        id="raza-mascota${numberOfMascots + 1}" 
                       size="30" maxlength="30"><br>

                <label for="esterilizado-mascota${numberOfMascots + 1}">Esterilizado</label>
                <select class="form-control" name="esterilizado-mascota${numberOfMascots + 1}" 
                        id="esterilizado-mascota${numberOfMascots + 1}" >
                    <option value="" selected="selected">Seleccione una opción</option>
                    <option value="1">Sí</option>
                    <option value="2">No</option>
                    <option value="3">No Aplica</option>
                </select><br>

                <label for="vacunas-mascota${numberOfMascots + 1}">Vacunas al día</label>
                <select class="form-control" name="vacunas-mascota${numberOfMascots + 1}" 
                        id="vacunas-mascota${numberOfMascots + 1}" >
                    <option value="" selected="selected">Seleccione una opción</option>
                    <option value="1">Sí</option>
                    <option value="2">No</option>
                    <option value="3">No Aplica</option>
                </select><br>
                <div id="file-input-container${numberOfMascots + 1}">
                    <div class="custom-file" style="width: 80% !important">
                        <label for="foto-mascota">Seleccionar Foto</label>
                        <input type="file" class="form-control-file" name="foto-mascota${numberOfMascots + 1}" 
                        id="foto-mascota${numberOfMascots + 1}"
                                accept="image/jpeg">
                    </div>

                    <button type="button" id="add-photo${numberOfMascots + 1}" class="btn btn-secondary" 
                        onclick="addFile(${numberOfMascots + 1})">Agregar Foto</button>
                </div>
                
                <div class="form-group" id="mascot-section-container-${numberOfMascots + 2}"></div>
    `
    numberOfMascots++;
}

$('.mysub').on('click', (function (event) {
    event.preventDefault();
    var form = $(this).parents('form');
    if (myValidator() === true) {
        eraseError();
        $.confirm({
            columnClass: 'col-md-5',
            theme: 'white',
            title: 'Confirmación',
            content: '¿Está seguro que desea enviar esta información?',
            buttons: {
                ok: {
                    text: 'Sí, estoy total y absolutamente seguro',
                    action: function () {
                        form.submit();
                        location.href = 'http://anakena.dcc.uchile.cl/~idiaz/Tarea1/Informar-Mascotas-2.html';
                    },
                    btnClass:'btn-success'
                },
                cancel: {
                    text: 'No estoy seguro, quiero volver al formulario',
                    action: function () { // you shall not pass
                    },
                    btnClass:'btn-danger'
                }
            }
        });
    }
}));
