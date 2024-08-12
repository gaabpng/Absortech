#include <WiFi.h>

void setup() {
  // Inicializa a comunicação serial
  Serial.begin(115200);
  
  // Aguarda a inicialização do monitor serial
  while (!Serial) {
    delay(100);
  }
  
  // Obtém e exibe o endereço MAC do ESP32
  String macAddress = WiFi.macAddress();
  Serial.println("Endereço MAC do ESP32:");
  Serial.println(macAddress);
}

void loop() {
  // Não há necessidade de código no loop para esta tarefa
}
