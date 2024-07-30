#include <Arduino.h>
void setup() {
  // Inicializa a comunicação serial com a taxa de transmissão de 9600 bps
  Serial.begin(9600);
}

void loop() {
  static int contador = 0; // Variável estática para manter o valor da contagem entre iterações do loop
  Serial.println(contador); // Imprime o valor da contagem no monitor serial
  contador++; // Incrementa a contagem
  delay(3000); // Aguarda 3 segundos
}
