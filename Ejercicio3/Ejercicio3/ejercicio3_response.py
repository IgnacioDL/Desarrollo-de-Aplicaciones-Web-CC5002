#!C:\Users\naxo7\AppData\Local\Programs\Python\Python38-32\python.exe
import sys
from io import TextIOWrapper

sys.stdout = TextIOWrapper(sys.stdout.buffer.detach(), encoding='utf8')

import cgi
from save_data import Ejercicio1Database

print("Content-type: text/html\r\n\r\n")

form = cgi.FieldStorage()
ej1db = Ejercicio1Database("root", "")

html = f'''
    <!DOCTYPE html>
<!--suppress ALL -->
<head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="ejercicio3.css">
        <script src="ejercicio3.js"></script>
        <title>Ejercicio 3</title>
</head>


<body>

<h1>¡Arma tu Pizza!</h1>




<div class="main">



        Su mensaje informacion se guardo con exito!!!



</div>

<a id="myButton" href="ver_info.py">Ver listado</a>

</body>


</html>
'''
print(html)
data = (
    form['nombre'].value, form['telefono'].value, form['direccion'].value, form['comuna'].value,
    form['masa'].value, form['ingrediente'].value, form['comentario'].value
)
# print(data)
ej1db.save_data(data)
