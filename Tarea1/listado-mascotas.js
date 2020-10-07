let region = ['Santiago', 'Santiago', 'Santiago', 'Santiago', 'Santiag'];
let comuna = ['Macul', 'La Florida', 'Puente Alto', 'Santiago', 'Estación Central'];
let nombreCalle = ['El Libano', 'Walker Martínez', 'Concha y Toro', 'Bandera', 'Arica'];
let numero = ['5000', '150', '2129', '1426', '908'];
let sector = ['Villa Macul', 'Los copihues', 'Sur', 'Barrio Bandera', 'Norte'];
let nombre = ['Belén', 'Antonia', 'Ignacio', 'José', 'Arturo'];
let email = ['hola@gmail.com', 'antonia@gmail.com', 'ignacia@gmacil.com', 'feliciraptor@gmail.com', 'mati@gmail.com'];
let celular = ['987654321', '912345678', '981234567', '897612534', '768921234'];
let tipo = ['Perro', 'Gato', 'Tortuga', 'Araña', 'Hámster'];
let edad = ['3 años', '10 años', '20 años', '2 años', "5 años"];
let color = ['Blanco', 'Negro', 'Verde', 'Amarillo', 'Café'];
let raza = ['Mestizo', 'Mestizo', 'Desconocida', 'Pollito', 'Mestizo'];
let estirilizado = ['Sí', 'Sí', 'No', 'No', 'No'];
let vacunas = ['Sí', 'Sí', 'No', 'No', 'No'];
let foto = ["./img/dog1.jpg", "./img/cat1.jpg", "./img/turtle1.jpg", "./img/spider1.jpg", "./img/hamster1.jpg"];

function expand0() {
    $.confirm({
        title: 'Datos',
        columnClass: 'col-md-5',
        content: 'DOMICILIO<br>' +
            'Región: ' + region[0] + '<br>' +
            'Comuna: ' + comuna[0] + '<br>' +
            'Nombre Calle: ' + nombreCalle[0] + '<br>' +
            'Numero: ' + numero[0] + '<br>' +
            'Sector: ' + sector[0] + '<br><br>' +
            'DATOS DE CONTACTO<br>' +
            'Nombre: ' + nombre[0] + '<br>' +
            'email: ' + email[0] + '<br>' +
            'numero de Celular: ' + celular[0] + '<br><br>' +
            'INFORMACIÓN DE MASCOTAS<br>' +
            'tipo: ' + tipo[0] + '<br>' +
            'edad en años: ' + edad[0] + '<br>' +
            'color: ' + color[0] + '<br>' +
            'raza: ' + raza[0] + '<br>' +
            'estirilizado: ' + estirilizado[0] + '<br>' +
            'vacunas al día: ' + vacunas[0] + '<br>' +
            'foto: <br>' +
            '<img class="photoAnimal" src=' + foto[0] + ' onclick="showBig(0)" alt="foto animalito" width="320" height="240" style="cursor: zoom-in"><br>'
            + '(click sobre la foto para agrandar) <br>'
        ,
        //closeIcon: function () {
        //    return false; // to prevent close the modal.
        // or
        //return 'aRandomButton'; // set a button handler, 'aRandomButton' prevents close.
        //},
        // or
        closeIcon: 'button', // set a button handler
        buttons: {
            inicio: {
                text: 'Volver al Incio',
                action: function () {
                    location.href = 'http://anakena.dcc.uchile.cl/~idiaz/Tarea1/Portada.html';
                }
            },
            Seguir: {
                text: 'Seguir en Listado de Mascotas',
                action: function () { // you shall not pass
                }
            }
        }
    });
}

function expand1() {
    $.confirm({
        title: 'Datos',
        columnClass: 'col-md-5',
        content: 'DOMICILIO<br>' +
            'Región: ' + region[1] + '<br>' +
            'Comuna: ' + comuna[1] + '<br>' +
            'Nombre Calle: ' + nombreCalle[1] + '<br>' +
            'Numero: ' + numero[1] + '<br>' +
            'Sector: ' + sector[1] + '<br><br>' +
            'DATOS DE CONTACTO<br>' +
            'Nombre: ' + nombre[1] + '<br>' +
            'email: ' + email[1] + '<br>' +
            'numero de Celular: ' + celular[1] + '<br><br>' +
            'INFORMACIÓN DE MASCOTAS<br>' +
            'tipo: ' + tipo[1] + '<br>' +
            'edad en años: ' + edad[1] + '<br>' +
            'color: ' + color[1] + '<br>' +
            'raza: ' + raza[1] + '<br>' +
            'estirilizado: ' + estirilizado[1] + '<br>' +
            'vacunas al día: ' + vacunas[1] + '<br>' +
            'foto: <br>' +
            '<img class="photoAnimal" src=' + foto[1] + ' onclick="showBig(1)" alt="foto animalito" width="320" height="240" style="cursor: zoom-in"><br>'
            + '(click sobre la foto para agrandar) <br>'
        ,
        //closeIcon: function () {
        //    return false; // to prevent close the modal.
        // or
        //return 'aRandomButton'; // set a button handler, 'aRandomButton' prevents close.
        //},
        // or
        closeIcon: 'button', // set a button handler
        buttons: {
            inicio: {
                text: 'Volver al Incio',
                action: function () {
                    location.href = 'http://anakena.dcc.uchile.cl/~idiaz/Tarea1/Portada.html';
                }
            },
            Seguir: {
                text: 'Seguir en Listado de Mascotas',
                action: function () { // you shall not pass
                }
            }
        }
    });
}

function expand2() {
    $.confirm({
        title: 'Datos',
        columnClass: 'col-md-5',
        content: 'DOMICILIO<br>' +
            'Región: ' + region[2] + '<br>' +
            'Comuna: ' + comuna[2] + '<br>' +
            'Nombre Calle: ' + nombreCalle[2] + '<br>' +
            'Numero: ' + numero[2] + '<br>' +
            'Sector: ' + sector[2] + '<br><br>' +
            'DATOS DE CONTACTO<br>' +
            'Nombre: ' + nombre[2] + '<br>' +
            'email: ' + email[2] + '<br>' +
            'numero de Celular: ' + celular[2] + '<br><br>' +
            'INFORMACIÓN DE MASCOTAS<br>' +
            'tipo: ' + tipo[2] + '<br>' +
            'edad en años: ' + edad[2] + '<br>' +
            'color: ' + color[2] + '<br>' +
            'raza: ' + raza[2] + '<br>' +
            'estirilizado: ' + estirilizado[2] + '<br>' +
            'vacunas al día: ' + vacunas[2] + '<br>' +
            'foto: <br>' +
            '<img class="photoAnimal" src=' + foto[2] + ' onclick="showBig(2)" alt="foto animalito" width="320" height="240" style="cursor: zoom-in"><br>'
            + '(click sobre la foto para agrandar) <br>'
        ,
        //closeIcon: function () {
        //    return false; // to prevent close the modal.
        // or
        //return 'aRandomButton'; // set a button handler, 'aRandomButton' prevents close.
        //},
        // or
        closeIcon: 'button', // set a button handler
        buttons: {
            inicio: {
                text: 'Volver al Incio',
                action: function () {
                    location.href = 'http://anakena.dcc.uchile.cl/~idiaz/Tarea1/Portada.html';
                }
            },
            Seguir: {
                text: 'Seguir en Listado de Mascotas',
                action: function () { // you shall not pass
                }
            }
        }
    });
}

function expand3() {
    $.confirm({
        title: 'Datos',
        columnClass: 'col-md-5',
        content: 'DOMICILIO<br>' +
            'Región: ' + region[3] + '<br>' +
            'Comuna: ' + comuna[3] + '<br>' +
            'Nombre Calle: ' + nombreCalle[3] + '<br>' +
            'Numero: ' + numero[3] + '<br>' +
            'Sector: ' + sector[3] + '<br><br>' +
            'DATOS DE CONTACTO<br>' +
            'Nombre: ' + nombre[3] + '<br>' +
            'email: ' + email[3] + '<br>' +
            'numero de Celular: ' + celular[3] + '<br><br>' +
            'INFORMACIÓN DE MASCOTAS<br>' +
            'tipo: ' + tipo[3] + '<br>' +
            'edad en años: ' + edad[3] + '<br>' +
            'color: ' + color[3] + '<br>' +
            'raza: ' + raza[3] + '<br>' +
            'estirilizado: ' + estirilizado[3] + '<br>' +
            'vacunas al día: ' + vacunas[3] + '<br>' +
            'foto: <br>' +
            '<img class="photoAnimal" src=' + foto[3] + ' onclick="showBig(3)" alt="foto animalito" width="320" height="240" style="cursor: zoom-in"><br>'
            + '(click sobre la foto para agrandar) <br>'
        ,
        //closeIcon: function () {
        //    return false; // to prevent close the modal.
        // or
        //return 'aRandomButton'; // set a button handler, 'aRandomButton' prevents close.
        //},
        // or
        closeIcon: 'button', // set a button handler
        buttons: {
            inicio: {
                text: 'Volver al Incio',
                action: function () {
                    location.href = 'http://anakena.dcc.uchile.cl/~idiaz/Tarea1/Portada.html';
                }
            },
            Seguir: {
                text: 'Seguir en Listado de Mascotas',
                action: function () { // you shall not pass
                }
            }
        }
    });
}

function expand4() {
    $.confirm({
        title: 'Datos',
        columnClass: 'col-md-5',
        content: 'DOMICILIO<br>' +
            'Región: ' + region[4] + '<br>' +
            'Comuna: ' + comuna[4] + '<br>' +
            'Nombre Calle: ' + nombreCalle[4] + '<br>' +
            'Numero: ' + numero[4] + '<br>' +
            'Sector: ' + sector[4] + '<br><br>' +
            'DATOS DE CONTACTO<br>' +
            'Nombre: ' + nombre[4] + '<br>' +
            'email: ' + email[4] + '<br>' +
            'numero de Celular: ' + celular[4] + '<br><br>' +
            'INFORMACIÓN DE MASCOTAS<br>' +
            'tipo: ' + tipo[4] + '<br>' +
            'edad en años: ' + edad[4] + '<br>' +
            'color: ' + color[4] + '<br>' +
            'raza: ' + raza[4] + '<br>' +
            'estirilizado: ' + estirilizado[4] + '<br>' +
            'vacunas al día: ' + vacunas[4] + '<br>' +
            'foto: <br>' +
            '<img class="photoAnimal" src=' + foto[4] + ' onclick="showBig(4)" alt="foto animalito" width="320" height="240" style="cursor: zoom-in"><br>'
            + '(click sobre la foto para agrandar) <br>'
        ,
        //closeIcon: function () {
        //    return false; // to prevent close the modal.
        // or
        //return 'aRandomButton'; // set a button handler, 'aRandomButton' prevents close.
        //},
        // or
        closeIcon: 'button', // set a button handler
        buttons: {
            inicio: {
                text: 'Volver al Incio',
                action: function () {
                    location.href = 'http://anakena.dcc.uchile.cl/~idiaz/Tarea1/Portada.html';
                }
            },
            Seguir: {
                text: 'Seguir en Listado de Mascotas',
                action: function () { // you shall not pass
                }
            }
        }
    });
}

$('.expandable0').on('click', expand0);
$('.expandable1').on('click', expand1);
$('.expandable2').on('click', expand2);
$('.expandable3').on('click', expand3);
$('.expandable4').on('click', expand4);

function showBig(i) {
    $.confirm({
        title: 'Foto Grande',
        columnClass: 'col-md-10',
        content: '<img class="photoAnimal" src=' + foto[i] + ' alt="foto animalito">' +
            '<style>.photoAnimal{width:800px!important;height:600px!important;}</style>',
        closeIcon: 'button',
        buttons: {
            cerrar: {
                text: 'Cerrar',
                action: function () { // you shall not pass
                }
            }
        }
    })
}