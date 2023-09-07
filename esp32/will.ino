#include <ArduinoWebsockets.h>

const char* ssid = "Gatao 2.4 Ghz"; // Nome da rede
const char* password = ""; // Senha da rede
const char* websockets_server_host = "192.168.100.5"; // IP do servidor websocket
const int websockets_server_port = 3000; // Porta de conexão do servidor

const int gpi013 = 13;
const int gpi012 = 12;
const int gpi014 = 14;
const int gpi027 = 27;

const int ledRed = 15;
const int ledGreen = 2;
const int ledBlue = 4;
// Utilizamos o namespace de websocket para podermos utilizar a classe WebsocketsClient
using namespace websockets;

// Objeto websocket client
WebsocketsClient client;

// Led
const int led = 13;

void setup() 
{
    pinMode(gpi013, OUTPUT);
    pinMode(gpi012, OUTPUT);
    pinMode(gpi014, OUTPUT);
    pinMode(gpi027, OUTPUT);
    stopEngene();
    // Iniciamos a serial com velocidade de 115200
    Serial.begin(115200);

    // Definimos o pino como saída
    pinMode(led, OUTPUT);
    // Conectamos o wifi
    WiFi.begin(ssid, password);
    // Enquanto não conectar printamos um "."
    while(WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(1000);
    }
    Serial.println("Connected to Wifi, Connecting to server.");

    // Tentamos conectar com o websockets server
    bool connected = client.connect(websockets_server_host, websockets_server_port, "/");
    // Se foi possível conectar
    if(connected) 
    {
        Serial.println("Connected!");
        client.send("Hello Server");
    }
    else
    {
        Serial.println("Not Connected!");
        return;
    }
}

void loop() 
{
    client.onMessage([&](WebsocketsMessage message)
    {        
        // Exibimos a mensagem recebida na serial
        Serial.print("Got Message: ");
        Serial.println(message.data());
        Serial.println(message.data().equalsIgnoreCase("toFront"));
        // Ligamos/Desligamos o led de acordo com o comando
        if(message.data().equalsIgnoreCase("toFront"))
            toFront();
        else
        if(message.data().equalsIgnoreCase("toBack"))
            toBack();
        else
        if(message.data().equalsIgnoreCase("turnRight"))
            turnRight();
        else
        if(message.data().equalsIgnoreCase("turnLeft"))
            turnLeft();
        else
        if(message.data().equalsIgnoreCase("stopEngene"))
            stopEngene();
    });
    client.send("exp connect");
    //  De tempo em tempo, o websockets client checa por novas mensagens recebidas
    if(client.available()){
        client.poll();
    }

}
