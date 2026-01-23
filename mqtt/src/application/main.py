from time import sleep

from src.config.broker_configs import mqtt_broker_configs
from src.application.client.mqtt_client_connection import MQTTClientConnection


# Pega as informações do broker, configura o client e inicia a conexão
def start():
    mqtt_client_connection = MQTTClientConnection(
        mqtt_broker_configs["HOST"],
        mqtt_broker_configs["PORT"],
        mqtt_broker_configs["CLIENT_NAME"],
        mqtt_broker_configs["KEEPALIVE"]
    )
    
    mqtt_client_connection.start_connection()

    while True: sleep(0.001)
