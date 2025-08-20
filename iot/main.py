import paho.mqtt.client as mqtt
import json
import sys
import os
import django

# Adicionar o caminho do diretório DjangoAbsortech ao sys.path
sys.path.append(os.path.abspath('./backend'))

# Configuração do Django para encontrar o projeto
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'DjangoAbsortech.settings')
django.setup()

from django.utils import timezone
from app.models import LeituraSensor

# Função chamada quando uma mensagem é recebida
def on_message(client, userdata, msg):
    try:
        agora = timezone.now()

        # Decodificando os dados vindos do JSON
        payload = json.loads(msg.payload.decode())
        measure = payload["measure"]
        _andar = payload["andar"]

        print("========== DEBUG ==========")
        print(f"Mensagem recebida bruta: {msg.payload}")
        print(f"JSON decodificado: {payload}")
        print(f"Andar recebido: {_andar}")
        print(f"Valor de medida recebido: {measure}")
        print("===========================")

        # Criando objeto com dados do JSON
        leitura = LeituraSensor(
            data=agora.date(),
            hora=agora.time(),
            andar=_andar,
            valor_leitura=measure
        )

        # Salvando no banco
        leitura.save()
        print(f"✅ Dados salvos no banco -> Data: {leitura.data}, Hora: {leitura.hora}, "
              f"Andar: {leitura.andar}, Valor: {leitura.valor_leitura}\n")

    except json.JSONDecodeError as erro:
        print("❌ Mensagem JSON inválida!", erro)
    except Exception as e:
        print("❌ Erro ao processar mensagem:", e)

# Lógica principal do programa
def main():
    # Configurações do cliente MQTT
    client = mqtt.Client()

    # Configura a função de callback
    client.on_message = on_message

    # Conecta ao broker MQTT (substitua se precisar)
    client.connect("broker.hivemq.com", 1883)

    # Inscreve-se no tópico
    client.subscribe("SENSOR/ULTRASSOM")

    print("🚀 Aguardando mensagens no tópico 'SENSOR/ULTRASSOM'...")
    
    # Loop para ficar continuamente escutando
    client.loop_forever()

# Inicialização
if __name__ == "__main__":
    main()
