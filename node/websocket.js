var WebSocketServer = require('websocket').server;
var http = require('http');
var fs = require('fs');

//Porta que o server irá escutar
const port = 3000;

//Cria o server
var server = http.createServer();

//Server irá escutar na porta definida em 'port'
server.listen(port, () => {
    //Server está pronto
    console.log(`Server está executando na porta ${port}`);
});

//Cria o WebSocket server
wsServer = new WebSocketServer({
  httpServer: server
});

//Chamado quando um client deseja conectar
let state = false;
wsServer.on('request', (request) => {
    //Estado do led: false para desligado e true para ligado

    //Aceita a conexão do client
    let client = request.accept(null, request.origin);
    
    //Chamado quando o client envia uma mensagem
    client.on('message', (message) => {
        //Se é uma mensagem string utf8
        if (message.type === 'utf8') {
            //Mostra no console a mensagem
            const str = message.utf8Data;
            const dispositive = str.split(':');
          
            if(dispositive[0]==="web"){
                console.log(dispositive[1])
                state = dispositive[1];
                const table =JSON.stringify(dispositive[1])
                fs.writeFileSync('./drone.json',table)
            }
            console.log(dispositive,state);
        }
    });

    //Cria uma função que será executada a cada 1 segundo (1000 millis) para enviar o estado do led
    let interval = setInterval(() => {
        //Envia para o client "ON" ou "OFF" dependendo do estado atual da variável state
        const table = JSON.parse(fs.readFileSync('./drone.json'))
        console.log("oi", table)
        client.sendUTF(table);
        //Inverte o estado
        // state = !state;
    }, 1000);//Tempo entre chamadas => 1000 millis = 1 segundo 

    //Chamado quando a conexão com o client é fechada
    client.on('close', () => {
        console.log("Conexão fechada");
        //Remove o intervalo de envio de estado
        // clearInterval(interval);
    });
});