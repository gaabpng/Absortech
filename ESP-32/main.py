# ESSE CÓDIGO DEPOIS DE CORRIGIDO SERÁ MESCLADO COM O DE ADICIONAR A INFORMAÇÃO NO BANCO DE DADOS
import paho.mqtt.client as mqtt
import json
import os
import django

# Configuração do Django para encontrar o projeto
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'DjangoAbsortech.DjangoAbsortech.settings')
django.setup()

from django.utils import timezone
from DjangoAbsortech.app.models import LeituraSensor

# Função chamada quando uma mensagem é recebida
def on_message(client, userdata, msg):
    
    #BLOCO PARA TRATAR ERROS ORIUNDOS DO JSON
    try:
        agora = timezone.now()
        # DECODIFICANDO OS DADOS VINDOS DO JSON
        payload = json.loads(msg.payload.decode())
        measure = payload["measure"]
        _andar = payload["andar"]

        # CRIANDO OBJETO COM DADOS DO JSON
        leitura = LeituraSensor(
            data = agora.date(),
            hora = agora.time(),
            andar = _andar,
            valor_leitura = measure
        )

        #SALVANDO
        leitura.save()

        print(f"Andar: {_andar} - Valor recebido: {measure}")
    except json.JSONDecodeError as erro:
        print("Mensagem JSON Inválida!", erro)

#LÓGICA PRINCIPAL DO PROGRAMA
def main():
    # Configurações do cliente MQTT
    client = mqtt.Client()

    # Configura a função de callback para quando uma mensagem for recebida
    client.on_message = on_message

    # Conecte ao broker MQTT (substitua pelo endereço e porta corretos)
    client.connect("broker.hivemq.com", 1883)

    # Inscreva-se em um tópico (substitua pelo tópico correto)
    client.subscribe("SENSOR/ULTRASSOM")

    # Inicie o loop para receber as mensagens
    #client.loop_start()

    # FUNÇÃO MQTT PARA FICAR CONTINUAMENTE ESCUTANDO MENSAGENS, TRATA RECONEXÃO CASO NECESSÁRIO
    client.loop_forever()

    # É REALMENTE NECESSÁRIO TER ESSE PRINT AQUI ?
    #print(f"Valor final do tópico: {topic_value}")

# INICIALIZAÇÃO
if __name__ == "__main__":
    main()