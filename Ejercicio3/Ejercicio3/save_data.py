import mysql.connector


class Ejercicio1Database:

    def __init__(self, user, password):
        self.db = mysql.connector.connect(
            host="localhost",
            user=user,
            password=password,
            database="ejercicio3"
        )
        self.cursor = self.db.cursor()

    def save_data(self, data):
        sql = '''
            INSERT INTO pedido (nombre, telefono, direccion, comuna, tipp_masa, ingrediente, comentario) 
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            '''
        self.cursor.execute(sql, data)  # ejecuto la consulta
        self.db.commit()  # modifico la base de datos

    def get_all(self, tablename):
        self.cursor.execute(f'SELECT * FROM {tablename}')
        return self.cursor.fetchall()
