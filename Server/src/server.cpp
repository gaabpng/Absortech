#include <WiFi.h>
#include <esp_now.h>

// Estrutura para receber dados
typedef struct struct_message {
  int buttonState;
} struct_message;

struct_message message;

void OnDataRecv(const uint8_t *mac_addr, const uint8_t *incomingData, int len) {
  memcpy(&message, incomingData, sizeof(message));
  Serial.print("Estado do botão recebido: ");
  Serial.println(message.buttonState);
}

void setup() {
  // Inicializa a comunicação serial
  Serial.begin(115200);

  // Inicializa o ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Erro ao inicializar o ESP-NOW");
    return;
  }

  // Define a função de callback para o recebimento de dados
  esp_now_register_recv_cb(OnDataRecv);

  // Configura o ESP-NOW para operar no canal atual
  esp_now_peer_info_t peerInfo;
  memset(&peerInfo, 0, sizeof(peerInfo));
  peerInfo.channel = 0; // Canal 0 para o canal atual
  peerInfo.encrypt = false;

  if (esp_now_add_peer(&peerInfo) != ESP_OK) {
    Serial.println("Falha ao adicionar o peer");
    return;
  }
}

void loop() {
  // O código principal não precisa fazer nada
  // A função de callback OnDataRecv será chamada quando um dado for recebido
}
