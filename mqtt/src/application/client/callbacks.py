import json
from django.utils import timezone
from app.models import LeituraSensor
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
        payload_str = message.payload.decode("utf-8")
    except UnicodeDecodeError:
        payload_str = message.payload.decode("latin-1")

    print(payload_str)

    try:
        agora = timezone.now()

        # Decoding JSON data
        payload = json.loads(payload_str)
        measure = payload["measure"]
        _andar = payload["andar"]

        print("========== DEBUG ==========")
        print(f"Raw message received: {message.payload}")
        print(f"Decoded JSON: {payload}")
        print(f"Floor received: {_andar}")
        print(f"Measure value received: {measure}")
        print("===========================")

        # Creating object with JSON data
        leitura = LeituraSensor(
            data=agora.date(),
            hora=agora.time(),
            andar=_andar,
            valor_leitura=measure
        )

        # Saving to database
        leitura.save()

        print(f"Data saved to database -> Date: {leitura.data}, Time: {leitura.hora}, "
              f"Floor: {leitura.andar}, Value: {leitura.valor_leitura}\n")

    except json.JSONDecodeError as erro:
        print("Invalid JSON message!", erro)
    except Exception as e:
        print("Error processing message:", e)
