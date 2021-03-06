'use strict';

const shields = {
  /***********************************************************/
  "--- Ethernet" : {},
  /***********************************************************/
/*
  "Simple Ethernet" : {
    name: "Arduino Ethernet Shield",
    inc: `
#include <SPI.h>
#include <Ethernet.h>
#include <BlynkSimpleEthernet.h>
    `,
    init: `
  Blynk.begin(auth);
    `
  },
*/
  /***********************************************/
  "Ethernet Shield W5100" : {
    name: "Arduino Ethernet Shield",
    inc: `
#include <SPI.h>
#include <Ethernet.h>
#include <BlynkSimpleEthernet.h>
    `,
    glob : `
#define W5100_CS  10
#define SDCARD_CS 4
    `,
    init: `
  pinMode(SDCARD_CS, OUTPUT);
  digitalWrite(SDCARD_CS, HIGH); // Deselect the SD card

  Blynk.begin(auth);
  // You can also specify server:
  //Blynk.begin(auth, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "Ethernet Shield W5200" : {
    name: "Seeed Ethernet Shield V2.0",
    inc: `
#include <SPI.h>
#include <EthernetV2_0.h>
#include <BlynkSimpleEthernetV2_0.h>
    `,
    glob : `
#define W5200_CS  10
#define SDCARD_CS 4
    `,
    init: `
  pinMode(SDCARD_CS, OUTPUT);
  digitalWrite(SDCARD_CS, HIGH); // Deselect the SD card

  Blynk.begin(auth);
  // You can also specify server:
  //Blynk.begin(auth, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "Ethernet Shield W5500" : {
    inc: `
#include <SPI.h>
#include <Ethernet2.h>
#include <BlynkSimpleEthernet2.h>
    `,
    init: `
  Blynk.begin(auth);
  // You can also specify server:
  //Blynk.begin(auth, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "ENC28J60" : {
    comment : `
  For this example you need UIPEthernet library:
    https://github.com/ntruchsess/arduino_uip

  Typical wiring would be:
   VCC -- 5V
   GND -- GND
   CS  -- D10
   SI  -- D11
   SCK -- D13
   SO  -- D12
   INT -- D2
    `,
    inc: `
#include <UIPEthernet.h>
#include <BlynkSimpleUIPEthernet.h>
    `,
    init: `
  Blynk.begin(auth);
  // You can also specify server:
  //Blynk.begin(auth, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, IPAddress(192,168,1,100), 8442);
    `
  },

  /***********************************************************/
  "--- WiFi" : {},
  /***********************************************************/
  "Arduino WiFi Shield 101" : {
    inc: `
#include <SPI.h>
#include <WiFi101.h>
#include <BlynkSimpleWiFiShield101.h>
    `,
    inherit : "Arduino WiFi Shield"
  },
  /***********************************************/
  "Arduino WiFi Shield"     : {
    inc: `
#include <SPI.h>
#include <WiFi.h>
#include <BlynkSimpleWifi.h>
    `,
    glob : `
// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";
    `,
    init: `
  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "ESP8266 WiFi Shield"     : {
    comment: `
  WARNING!
    It's rather tricky to get it working, please read this article:
    https://github.com/blynkkk/blynk-library/wiki/ESP8266-with-AT-firmware
    `,
    inc: `
#include <ESP8266_Lib.h>
#include <BlynkSimpleShieldEsp8266.h>
    `,
    glob : `
// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";

// Hardware Serial on Mega, Leonardo, Micro...
#define EspSerial Serial1

// or Software Serial on Uno, Nano...
//#include <SoftwareSerial.h>
//SoftwareSerial EspSerial(2, 3); // RX, TX

// Your ESP8266 baud rate:
#define ESP8266_BAUD 115200

ESP8266 wifi(&EspSerial);
    `,
    init: `
  // Set ESP8266 baud rate
  EspSerial.begin(ESP8266_BAUD);
  delay(10);

  Blynk.begin(auth, wifi, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, wifi, ssid, pass, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, wifi, ssid, pass, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "CC3000" : {
    comment: `
  For this example you need Adafruit_CC3000_Library library:
    https://github.com/adafruit/Adafruit_CC3000_Library

  Note: Firmware version 1.14 or later is preferred.
    `,
    inc: `
// These are the interrupt and control pins for СС3000
#define ADAFRUIT_CC3000_IRQ   3
#define ADAFRUIT_CC3000_VBAT  5
#define ADAFRUIT_CC3000_CS    10

#include <SPI.h>
#include <Adafruit_CC3000.h>
#include <BlynkSimpleCC3000.h>
    `,
    glob : `
// Your WiFi credentials.
// Choose wifi_sec from WLAN_SEC_UNSEC, WLAN_SEC_WEP, WLAN_SEC_WPA or WLAN_SEC_WPA2
char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";
int wifi_sec = WLAN_SEC_WPA2;
    `,
    init: `
  Blynk.begin(auth, ssid, pass, wifi_sec);
    `
  },
  /***********************************************/
  "RN-XV WiFly" : {
    comment: `
  For this example you need WiFlyHQ library:
    https://github.com/harlequin-tech/WiFlyHQ

  Note: Ensure a stable serial connection!
        Hardware serial is preferred.
        Firmware version 4.41 or later is preferred.
    `,
    inc: `
#include <WiFlyHQ.h>
#include <BlynkSimpleWiFly.h>
    `,
    glob : `
// Your WiFi credentials.
char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";

#define WiFlySerial Serial1
// This can be a SoftwareSerial object:
//#include <SoftwareSerial.h>
//SoftwareSerial WiFlySerial(2, 3); // RX, TX

WiFly wifly;
    `,
    init: `
  WiFlySerial.begin(9600);  // Set your RN-XV baud rate
  delay(10);

  // Bind WiFly driver to the serial
  if (!wifly.begin(&WiFlySerial)) {
    BLYNK_FATAL("Failed to start wifly");
  }

  // You can try increasing baud rate:
  //wifly.setBaud(115200);
  //WiFlySerial.begin(115200);

  Blynk.begin(auth, wifly, ssid, pass);
    `
  },

  /***********************************************************/
  "--- Bluetooth" : {},
  /***********************************************************/
  "nRF8001"   : {
    comment: `
    `,
    inc: `
#include <BlynkSimpleSerialBLE.h>
#include <BLEPeripheral.h>
#include "BLESerial.h"
#include <SPI.h>
    `,
    glob : `
// define pins (varies per shield/board)
#define BLE_REQ   10
#define BLE_RDY   2
#define BLE_RST   9

// create ble serial instance, see pinouts above
BLESerial SerialBLE(BLE_REQ, BLE_RDY, BLE_RST);
    `,
    init: `
  SerialBLE.setLocalName("Blynk");
  SerialBLE.setDeviceName("Blynk");
  SerialBLE.setAppearance(0x0080);
  SerialBLE.begin();

  Blynk.begin(SerialBLE, auth);

  Serial.println("Waiting for connections...");
    `,
    loop: `
  SerialBLE.poll();
    `
  },
  /***********************************************/
  "HM10/HC08" : {
    comment: `
  This example shows how to use Serial BLE modules (HM-10, HC-08)
  to connect your project to Blynk.
    `,
    inc: `
#include <BlynkSimpleSerialBLE.h>
#include <SoftwareSerial.h>
    `,
    glob : `
SoftwareSerial SerialBLE(10, 11); // RX, TX
    `,
    init: `
  SerialBLE.begin(9600);
  Blynk.begin(SerialBLE, auth);

  Serial.println("Waiting for connections...");
    `
  },
  /***********************************************/
  "HC05/HC06" : {
    comment: `
  This example shows how to use Arduino with HC-06/HC-05
  Bluetooth 2.0 Serial Port Profile (SPP) module
  to connect your project to Blynk.

  Note: This only works on Android! iOS does not support SPP :(
        You may need to pair the module with your smartphone
        via Bluetooth settings. Default pairing password is 1234

  Feel free to apply it to any other example. It's simple!

  NOTE: Bluetooth support is in beta!
    `,
    inherit: "HM10/HC08"
  },
  "Adafruit Bluefruit LE" : { inherit: "nRF8001" },

  /***********************************************************/
  "--- Cellular" : {},
  /***********************************************************/
  "SimCOM SIM800" : {
    comment: `
  This example shows how to use GSM modem
  to connect your project to Blynk.

  Attention! Please check out TinyGSM guide:
    http://tiny.cc/tiny-gsm-readme

  WARNING: GSM modem support is for BETA testing.
    `,
    defs: `
#define TINY_GSM_MODEM_SIM800
    `,
    inc: `
// Default heartbeat interval for GSM is 60
// If you want override this value, uncomment and set this option:
//#define BLYNK_HEARTBEAT 30

#include <TinyGsmClient.h>
#include <BlynkSimpleSIM800.h>
    `,
    glob : `
// Your GPRS credentials
// Leave empty, if missing user or pass
char apn[]  = "YourAPN";
char user[] = "";
char pass[] = "";

// Hardware Serial on Mega, Leonardo, Micro
#define SerialAT Serial1

// or Software Serial on Uno, Nano
//#include <SoftwareSerial.h>
//SoftwareSerial SerialAT(2, 3); // RX, TX

TinyGsm modem(SerialAT);
    `,
    init: `
  // Set GSM module baud rate
  SerialAT.begin(115200);
  delay(3000);

  // Restart takes quite some time
  // To skip it, call init() instead of restart()
  modem.restart();

  // Unlock your SIM card with a PIN
  //modem.simUnlock("1234");

  Blynk.begin(auth, modem, apn, user, pass);
    `
  },
  /***********************************************/
  "SimCOM SIM900" : {
    defs: `
#define TINY_GSM_MODEM_SIM900
    `,
    inherit: "SimCOM SIM800"
  },
  /***********************************************/
  "Neoway M590"   : {
    defs: `
#define TINY_GSM_MODEM_M590
    `,
    inherit: "SimCOM SIM800"
  },
  /***********************************************************/
  "--- Serial" : {},
  /***********************************************************/
  "Serial/USB" : {
    name: "Hardware Serial / USB",
    comment : `
  =>
  =>          USB HOWTO: http://tiny.cc/BlynkUSB
  =>
    `,
    inc: `
#include <BlynkSimpleStream.h>
    `,
    init: `
  // Blynk will work through Serial
  // Do not read or write this serial manually in your sketch
  Serial.begin(9600);
  Blynk.begin(Serial, auth);
    `
  },
  /***********************************************/
  "SoftwareSerial" : {
    comment : `
  =>
  =>          USB HOWTO: http://tiny.cc/BlynkUSB
  =>
    `,
    inc: `
#include <BlynkSimpleStream.h>
#include <SoftwareSerial.h>
    `,
    glob : `
SoftwareSerial SwSerial(10, 11); // RX, TX
    `,
    init: `
  // Blynk will work through SoftwareSerial
  // Do not read or write this serial manually in your sketch
  SwSerial.begin(9600);
  Blynk.begin(SwSerial, auth);
    `
  },

  /***********************************************************
   * EMBEDDED
   ***********************************************************/
  "System default" : {
    // Empty
    embedded: true
  },
  "ESP8266 WiFi" : {
    embedded: true,
    inc: `
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
    `,
    glob : `
// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";
    `,
    init: `
  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "ESP8266 WiFi (SSL)" : {
    embedded: true,
    inc: `
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266_SSL.h>
    `,
    glob : `
// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";
    `,
    init: `
  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "ESP32 WiFi" : {
    embedded: true,
    inc: `
#include <WiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleEsp32.h>
    `,
    glob : `
// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";
    `,
    init: `
  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "Yun Bridge" : {
    embedded: true,
    inc: `
#include <Bridge.h>
#include <BlynkSimpleYun.h>
    `,
    init: `
  Blynk.begin(auth);
  // You can also specify server:
  //Blynk.begin(auth, "blynk-cloud.com", 8442);
  //Blynk.begin(auth, IPAddress(192,168,1,100), 8442);
    `
  },
  /***********************************************/
  "Particle WiFi" : {
    embedded: true,
    comment: `
  NOTE:    It is recommended to use SparkCorePolledTimer library
           to make periodic actions (similar to SimpleTimer on Arduino).
    `,
    inc: `
#include "blynk/blynk.h"
    `,
    init: `
  delay(5000); // Allow board to settle
  Blynk.begin(auth);
    `
  },
  /***********************************************/
  "Particle Cellular" : {
    embedded: true,
    comment: `
  NOTE:    It is recommended to use SparkCorePolledTimer library
           to make periodic actions (similar to SimpleTimer on Arduino).
    `,
    inc: `
// Uncomment this, if you want to set network credentials
//#include "cellular_hal.h"
//STARTUP(cellular_credentials_set("broadband", "", "", NULL));

// Run "ping blynk-cloud.com", and set Blynk IP to the shown address
#define BLYNK_IP        IPAddress(45,55,130,102)

// Set Blynk hertbeat interval.
// Each heartbeat uses ~90 bytes of data.
#define BLYNK_HEARTBEAT 60

// Set Particle keep-alive ping interval.
// Each ping uses 121 bytes of data.
#define PARTICLE_KEEPALIVE 20

#include "blynk/blynk.h"
    `,
    init: `
  delay(2000);

  Particle.keepAlive(PARTICLE_KEEPALIVE);
  Blynk.begin(auth, BLYNK_IP);
    `
  }
  /***********************************************/
  //"Arduino 101 BLE" : { //TODO
    
  //}
};

module.exports = shields;
