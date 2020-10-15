#!C:\Users\naxo7\AppData\Local\Programs\Python\Python38-32\python.exe
import sys
from io import TextIOWrapper

sys.stdout = TextIOWrapper(sys.stdout.buffer.detach(), encoding='utf8')

import cgi
from save_data import Ejercicio1Database

print("Content-type: text/html\r\n\r\n")

ej3db = Ejercicio1Database("root", "")
data = ej3db.get_all('pedido')

head = f'''
    <!DOCTYPE html>
<!--suppress ALL -->
<head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="ejercicio3.css">
        <script src="ejercicio3.js"></script>
        <title>Ejercicio 3</title>
</head>
'''
b1 = f'''
<body>

<h1>¡Arma tu Pizza!</h1>
<div class="main">



        <table>
        <tr>
    <th>Nombre</th>
    <th>Teléfono</th>
    <th>Dirección </th>
    <th>Comuna </th>
    <th>Masa </th>
    <th>Ingrediente </th>
    <th>Comentario </th>
'''
print(head)
print(b1)
for d in data:
    row = f'''
            <tr>
                <th>{str(d[1])}</th>
                <th>{str(d[2])}</th>
                <th>{str(d[3])}</th>
                <th>{str(d[4])}</th>
                <th>{str(d[5])}</th>
                <th>{str(d[6])}</th>
                <th>{str(d[7])}</th>
            </tr>
        '''
    print(row)

b2 = f'''
</table>


</div>


</body>


</html>
'''
print(b2)
