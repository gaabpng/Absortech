# ESSE CÓDIGO DEPOIS DE CORRIGIDO SERÁ MESCLADO COM O DE ADICIONAR A INFORMAÇÃO NO BANCO DE DADOS
import paho.mqtt.client as mqtt
import json

#while True:


# Função chamada quando uma mensagem é recebida
def on_message(client, userdata, msg):
    #global topic_value

    #BLOCO PARA TARTAR ERROS ORIUNDOS DO JSON
    try:
        # DECODIFICANDO OS DADOS VINDOS DO JSON
        payload = json.loads(msg.payload.decode())
        measure = payload["measure"]
        andar = payload["andar"]

        print(f"Andar: {andar} - Valor recebido: {measure}")
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