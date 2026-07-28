// #include <WiFi.h>

// const int sensorPin = 34;
// const int ledPin = 2;

// unsigned long previousMillis = 0;
// const long interval = 2000;

// float previousPM = 0;

// void setup() {

// Serial.begin(115200);

// pinMode(ledPin, OUTPUT);

// }

// void loop() {

// unsigned long currentMillis = millis();

// if(currentMillis - previousMillis >= interval){

// previousMillis = currentMillis;

// int sensorValue = analogRead(sensorPin);

// float pm = map(sensorValue,0,4095,0,200);

// if(pm < 0 || pm > 500){

// Serial.println("Invalid Reading");

// return;

// }

// pm = (previousPM + pm)/2;

// previousPM = pm;

// String level;

// if(pm<=35)
// level="Good";

// else if(pm<=60)
// level="Moderate";

// else if(pm<=100)
// level="Poor";

// else
// level="Hazardous";

// Serial.print("PM : ");

// Serial.print(pm);

// Serial.print(" Level : ");

// Serial.println(level);

// if(level=="Hazardous")

// digitalWrite(ledPin,HIGH);

// else

// digitalWrite(ledPin,LOW);

// }

// }