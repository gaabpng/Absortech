import serial
import mysql.connector
from mysql.connector import Error

# Configurações da porta serial
porta_serial = 'COM3' 
baud_rate = 9600

# Configurações do banco de dados
host = 'localhost'
database = 'absortech'
user = 'root'
password = ''
tabela = 'teste'

def inserir_dado_no_banco(dado):
    try:
        # Conecta ao banco de dados
        conexao = mysql.connector.connect(
            host=host,
            database=database,
            user=user,
            password=password
        )
        if conexao.is_connected():
            cursor = conexao.cursor()
            query = f"INSERT INTO {tabela} (entrada_arduino) VALUES (%s)"
            cursor.execute(query, (dado,))
            conexao.commit()
            print("Dado inserido no banco de dados.")
    except Error as e:
        print("Erro ao conectar ao banco de dados:", e)
    finally:
        if conexao.is_connected():
            cursor.close()
            conexao.close()

def main():
    try:
        # Inicializa a comunicação serial
        ser = serial.Serial(porta_serial, baud_rate)
        print(f"Conectado à porta serial {porta_serial} com baud rate {baud_rate}.")

        while True:
            if ser.in_waiting > 0:
                dado_serial = ser.readline().decode('utf-8').strip()
                print(f"Dado recebido: {dado_serial}")
                inserir_dado_no_banco(dado_serial)

    except serial.SerialException as e:
        print("Erro ao conectar à porta serial:", e)
    except KeyboardInterrupt:
        print("Programa interrompido pelo usuário.")
    finally:
        if ser.is_open:
            ser.close()
            print("Porta serial fechada.")

if __name__ == "__main__":
    main()
