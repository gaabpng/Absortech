#include <WiFi.h>

void setup() {
  Serial.begin(9600);
  Serial.println(WiFi.macAddress());
}

void loop() {
    Serial.println(WiFi.macAddress());
    delay(1000);
}
