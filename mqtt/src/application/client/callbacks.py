from src.config.broker_configs import mqtt_broker_configs


def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Cliente conectado com sucesso! {}".format(client))
        client.subscribe(mqtt_broker_configs["TOPIC"])
    else:
        print("Erro ao me conectar!! codigo = {}".format(rc))


def on_subscribe(client, userdata, mid, granted_qos):
    print("Cliente subscrito em {}".format(mqtt_broker_configs["TOPIC"]))
    print("QOS {}".format(granted_qos))


def on_mensage(client, userdata, message):
    print("Mensagem recebida!")
    print(client)
    try:
        payload = message.payload.decode("utf-8")
    except UnicodeDecodeError:
        # Tenta decodificar com latin-1 (iso-8859-1) que aceita qualquer byte
        payload = message.payload.decode("latin-1")
    print(payload)
