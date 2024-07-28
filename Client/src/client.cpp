#include <WiFi.h>
#include <HTTPClient.h>

const char *ssid = "ESP32_AP";
const char *password = "12345678";
const char *serverName = "http://192.168.4.1/";

const int pin = 2;

void setup()
{
  Serial.begin(115200);
  pinMode(pin, INPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  delay(2000);
}

void loop()
{
  if (WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;
    http.begin(serverName + String(digitalRead(pin)));
    int httpResponseCode = http.GET();
    if (httpResponseCode > 0)
    {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    }
    else
    {
      Serial.print("Error on sending GET: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  }
  delay(2000); // Envia a cada 2 segundos
}
