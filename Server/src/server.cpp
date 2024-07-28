#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

const char *ssid = "ESP32_AP";
const char *password = "12345678";

WiFiServer server(80);

void setup()
{
  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");

  WiFi.softAP(ssid, password);
  IPAddress IP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(IP);

  server.begin();
}

void loop()
{
  WiFiClient client = server.available();
  if (client)
  {
    Serial.println("New Client.");
    String currentLine = "";
    while (client.connected())
    {
      if (client.available())
      {
        char c = client.read();
        Serial.write(c);
        if (c == '\n')
        {
          if (currentLine.length() == 0)
          {
            break;
          }
          else
          {
            if (currentLine.startsWith("GET /"))
            {
              int pinValue = currentLine.substring(5, 6).toInt();
              Serial.print("Pin value received: ");
              Serial.println(pinValue);
            }
            currentLine = "";
          }
        }
        else if (c != '\r')
        {
          currentLine += c;
        }
      }
    }
    client.stop();
    Serial.println("Client Disconnected.");
  }
}
