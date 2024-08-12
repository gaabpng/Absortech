#include <TFT_eSPI.h>
#include "WiFi.h"

void setup(){

  //print mac adress
  WiFi.mode(WIFI_MODE_STA);
  tft.drawString("my MAC is:",10,10,4);
  tft.drawString(String(WiFi.macAddress()),10,50,4);
}
 
void loop(){

}