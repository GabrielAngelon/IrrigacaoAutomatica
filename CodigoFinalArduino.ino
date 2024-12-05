//----------------------------------------------------------------
// Bibliotecas
//----------------------------------------------------------------
#include <WiFi.h>
#include <WebServer.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

//----------------------------------------------------------------
// Credenciais de WiFi
//----------------------------------------------------------------

const char *ssid = "TP-LINK_1376";
const char *password = "11050667";
//const char *ssid = "VIVOFIBRA-C7DA";
//const char *password = "c6627bc7da";

//----------------------------------------------------------------
// Configuração do servidor web
//----------------------------------------------------------------
WebServer server(80);

//----------------------------------------------------------------
// Definição de pinos e variáveis
//----------------------------------------------------------------
int LedVermei = 16; 
int LedAzul = 18;   
int Rele = 23;      
int sensor = 34;    
int chuva = 35;
int buzzer = 25; 

bool releState = false;

//----------------------------------------------------------------
// Configuração do display LCD I2C
//----------------------------------------------------------------
LiquidCrystal_I2C lcd(0x27, 16, 2);

//----------------------------------------------------------------
// Função que gera a página HTML para monitoramento
//----------------------------------------------------------------
void handleRoot() {

  int sensorValue = analogRead(sensor);
  int chuvaValue = analogRead(chuva);

  String nivelUmidade, estadoRele, clima;

  if (sensorValue > 1000 && sensorValue <= 1024) {
    nivelUmidade = "Seco";
    estadoRele = "Ligado";
    releState = true;
    digitalWrite(Rele, HIGH);
  } else if (sensorValue > 800 && sensorValue <= 1000) {
    nivelUmidade = "Baixo";
    estadoRele = "Desligado";
    releState = false;
    digitalWrite(Rele, LOW);
  } else if (sensorValue > 600 && sensorValue <= 800) {
    nivelUmidade = "Medio";
    estadoRele = "Desligado";
    releState = false;
    digitalWrite(Rele, LOW);
  } else if (sensorValue <= 600){
    nivelUmidade = "Muito alto";
    estadoRele = "Desligado";
    releState = false;
    digitalWrite(Rele, LOW);
  }

  if (chuvaValue >= 0 && chuvaValue <= 100) {
    clima = "Clima seco";
  } else if (chuvaValue > 100 && chuvaValue <= 200) {
    clima = "Possivel chuva";
  } else if (chuvaValue > 200 && chuvaValue <= 400) {
    clima = "Chuva detectada";
  } else {
    clima = "Chuva forte detectada";
  }

  String htmlPage = R"rawliteral(
    <!DOCTYPE HTML>
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Monitor de Umidade</title>
        <style>
          body {
            background-color: #f0f8ff;
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            text-align: center;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
          }
          h2 {
            color: #006400;
            font-size: 24px;
            margin-bottom: 20px;
          }
          .sensor-value {
            font-size: 20px;
            color: #333333;
            margin: 10px 0;
          }
          .sensor-value span {
            font-weight: bold;
            color: #00008b;
          }
          .timestamp {
            margin-top: 20px;
            font-size: 16px;
            color: #555;
          }
          hr {
            border: 1px solid #006400;
            margin: 20px 0;
          }
          @media (max-width: 600px) {
            .container {
              padding: 10px;
            }
            h2 {
              font-size: 20px;
            }
            .sensor-value {
              font-size: 18px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Dados do Sensor de Umidade e Clima</h2>
          <p class="sensor-value">Umidade: <span>)rawliteral" + nivelUmidade + R"rawliteral(</span></p>
          <p class="sensor-value">Estado do Rele: <span>)rawliteral" + estadoRele + R"rawliteral(</span></p>
          <p class="sensor-value">Valor da Umidade: <span>)rawliteral" + String(sensorValue) + R"rawliteral(</span></p>
          <p class="sensor-value">Rele: <span>)rawliteral" + String(releState) + R"rawliteral(</span></p>
          <p class="sensor-value">Clima: <span>)rawliteral" + clima + R"rawliteral(</span></p>
          <p class="sensor-value">Valor do Sensor de Chuva: <span>)rawliteral" + String(chuvaValue) + R"rawliteral(</span></p>
          <hr>
        </div>
      </body>
    </html>
  )rawliteral";

  server.send(200, "text/html", htmlPage);
}

//----------------------------------------------------------------
// Configuração inicial do sistema
//----------------------------------------------------------------
void setup() {
  analogReadResolution(10); // Define resolução do ADC
  Serial.begin(115200); // Inicializa comunicação serial

  lcd.init();
  lcd.backlight();

  // Configuração dos pinos como entrada ou saída
  pinMode(LedVermei, OUTPUT);
  pinMode(LedAzul, OUTPUT);
  pinMode(Rele, OUTPUT);
  pinMode(sensor, INPUT);
  pinMode(chuva, INPUT);
  pinMode(buzzer, OUTPUT);

  digitalWrite(Rele, LOW);    
  digitalWrite(LedVermei, LOW);
  digitalWrite(LedAzul, LOW);

  // Conexão ao WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nWiFi conectado.");
  Serial.print("IP do ESP32: ");
  Serial.println(WiFi.localIP());
  
  server.on("/", handleRoot); // Rota principal do servidor

  server.begin();

  // Mensagem inicial no LCD
  lcd.setCursor(3, 0);
  lcd.print("Monitor de");
  lcd.setCursor(0, 1);
  lcd.print("Umidade do Solo!");
  delay(4000);
  lcd.clear();
}

//----------------------------------------------------------------
// Loop principal: monitora sensores e atualiza informações
//----------------------------------------------------------------
void loop() {
  server.handleClient(); // Gerencia requisições do servidor

  int sensorValue = analogRead(sensor);
  int chuvaValue = analogRead(chuva);

  //----------------------------------------------------------------
  // Exibe informações no LCD e controla LEDs/rele
  //----------------------------------------------------------------
  lcd.setCursor(0, 0);
  lcd.print("Nivel de Umidade:");

  if (sensorValue > 1000 && sensorValue <= 1024) {
    digitalWrite(Rele, LOW);
    releState = true;
    lcd.setCursor(6, 1);
    lcd.print("SECO      ");
    digitalWrite(LedVermei, HIGH);
    digitalWrite(LedAzul, LOW);
    Serial.print("Nivel de Umidade: SECO, Rele Ligado, ");
  } else if (sensorValue > 800 && sensorValue <= 1000) {
    releState = false;
    lcd.setCursor(5, 1);
    lcd.print("BAIXO     ");
    digitalWrite(LedVermei, LOW);
    digitalWrite(LedAzul, LOW);
    Serial.print("Nivel de Umidade: BAIXO, Rele desligado, ");
  } else if (sensorValue > 600 && sensorValue <= 800) {
    releState = false;
    lcd.setCursor(5, 1);
    lcd.print("MEDIO     ");
    digitalWrite(LedVermei, LOW);
    digitalWrite(LedAzul, LOW);
    Serial.print("Nivel de Umidade: MEDIO, Rele desligado, ");
  } else if (sensorValue <= 600) {
    digitalWrite(Rele, HIGH);
    releState = false;
    lcd.setCursor(3, 1);
    lcd.print("MUITO ALTO");
    digitalWrite(LedVermei, LOW);
    digitalWrite(LedAzul, HIGH);
    Serial.print("Nivel de Umidade: MUITO ALTO, Rele desligado, ");
  }

  Serial.print(sensorValue);
  Serial.print(",");
  Serial.print(releState ? "1" : "0");
  Serial.print(",");

  delay(2000); 
  lcd.clear();

  //----------------------------------------------------------------
  // Controle do buzzer com base no sensor de chuva
  //----------------------------------------------------------------
  if (chuvaValue >= 0 && chuvaValue <= 100) {
    Serial.print("Clima seco");
    lcd.setCursor(3, 0);
    lcd.print("Clima seco      ");
    noTone(buzzer);  
  } else if (chuvaValue > 100 && chuvaValue <= 200) {
    Serial.print("Possivel chuva detectada");
    lcd.setCursor(0, 0);
    lcd.print("Possivel chuva  ");
    for (int i = 0; i < 2; i++) {  
      tone(buzzer, 10);
      delay(500);
      noTone(buzzer);
      delay(500);
    }
  } else if (chuvaValue > 200 && chuvaValue <= 400) {
    Serial.print("Chuva detectada");
    lcd.setCursor(0, 0);
    lcd.print("Chuva detectada ");
    for (int i = 0; i < 3; i++) {
      digitalWrite(buzzer, HIGH); 
      delay(100);                 
      digitalWrite(buzzer, LOW);   
      delay(500);   
    }
  } else if (chuvaValue > 400 && chuvaValue <= 1024) {
    Serial.print("Chuva forte detectada");
    lcd.setCursor(2, 0);
    lcd.print("Chuva forte     ");
    for (int i = 0; i < 4; i++) {  
      tone(buzzer, 10);
      delay(400);
      noTone(buzzer);
      delay(400);
    }
  }

  Serial.print(",");
  Serial.println(chuvaValue);
 
  delay(3000); 
  lcd.clear();
}
