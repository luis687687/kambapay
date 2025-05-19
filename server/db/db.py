import mysql.connector
# Configuração do banco de dados
DATABASE_CONFIG = {
    "host": " sql3.freesqldatabase.com",
    "user": "sql3779696",
    "password": "us9rpGiWHd",
    "database": "sql3779696"
}

# Conexão
connection = mysql.connector.connect(**DATABASE_CONFIG)
cmd = connection.cursor(dictionary=True)
