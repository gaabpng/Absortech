from src.config.broker_configs import mqtt_broker_configs


def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Client connected successfully! {}".format(client))
        client.subscribe(mqtt_broker_configs["TOPIC"])
    else:
        print("Connection error! code = {}".format(rc))


def on_subscribe(client, userdata, mid, granted_qos):
    print("Client subscribed to {}".format(mqtt_broker_configs["TOPIC"]))
    print("QOS {}".format(granted_qos))


def on_message(client, userdata, message):
    print("Message received!")
    print(client)

    try:
        payload = message.payload.decode("utf-8")
    except UnicodeDecodeError:
        payload = message.payload.decode("latin-1")

    print(payload)
