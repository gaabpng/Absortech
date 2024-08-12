#include <WiFi.h>
#include <esp_now.h>

// Endereço MAC do receptor
const uint8_t receiverMAC[] = { 0x24, 0x6F, 0x28, 0xAB, 0xCD, 0xEF }; // Substitua pelo MAC do receptor

// Configuração do botão
const int buttonPin = 0; // Ajuste conforme necessário
int buttonState = 0;

// Estrutura para enviar dados
typedef struct struct_message {
  int buttonState;
} struct_message;

struct_message message;

void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("Status de envio: ");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Sucesso" : "Falha");
}

void setup() {
  // Inicializa a comunicação serial
  Serial.begin(115200);

  // Configura o pino do botão
  pinMode(buttonPin, INPUT);

  // Inicializa o ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Erro ao inicializar o ESP-NOW");
    return;
  }

  // Define a função de callback para o envio de dados
  esp_now_register_send_cb(OnDataSent);

  // Adiciona o receptor
  esp_now_peer_info_t peerInfo;
  memcpy(peerInfo.peer_addr, receiverMAC, 6);
  peerInfo.channel = 0; // Canal 0 para o canal atual
  peerInfo.encrypt = false;

  if (esp_now_add_peer(&peerInfo) != ESP_OK) {
    Serial.println("Falha ao adicionar o peer");
    return;
  }
}

void loop() {
  // Lê o estado do botão
  buttonState = digitalRead(buttonPin);
  
  // Preenche a estrutura com o estado do botão
  message.buttonState = buttonState;

  // Envia a estrutura para o receptor
  esp_err_t result = esp_now_send(receiverMAC, (uint8_t *)&message, sizeof(message));

  if (result == ESP_OK) {
    Serial.println("Enviado com sucesso");
  } else {
    Serial.println("Falha ao enviar");
  }

  delay(1000); // Espera 1 segundo antes de enviar novamente
}
