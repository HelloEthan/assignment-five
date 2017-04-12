/*
  Arduino Code - for AnalogReadSerial
  Reads an analog input on pin 0, prints the result to the serial monitor.
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

 This example code is in the public domain.
 */

// the setup routine runs once when you press reset:
void setup() {
  //initiallize serial cimmuncation, we do this to read our data and print it to the serial monitor
  Serial.begin(9600); ////9600 is the rate of communication
}

// the loop routine runs over and over again forever:
void loop() {
  //read sensor value to a variable
  //analogRead() on the pin that we plugged our sensor into
  int sensor1 = analogRead(A0);
//  int sensor2 = analogRead(A1);

  //print our data so we can see it! like console.log
  Serial.println(sensor1);
//  Serial.println(",");
//  Serial.println(sensor2);
  
  //add a delay to slow things down
  delay(100);
}
