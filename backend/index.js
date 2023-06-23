const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
const cors = require('cors')
app.use(cors())

const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'], forceNER: true });
// Adds the utterances and intents for the NLP
manager.addDocument('en', 'show me time series data', 'visualisation.currency');
manager.addDocument('en', 'compare currencies', 'visualisation.currency');
manager.addDocument('en', 'show currency over time', 'visualisation.currency');
manager.addDocument('en', 'compare fx rates', 'visualisation.currency');
manager.addDocument('en', 'show foreign exchange graph', 'visualisation.currency');

manager.addDocument('en', 'include historic conversions', 'visualisation.currency.conversions');
manager.addDocument('en', 'show when I traded in the past', 'visualisation.currency.conversions');

manager.addDocument('en', 'show merchant category code', 'visualisation.expense');
manager.addDocument('en', 'show spending on cards', 'visualisation.expense');
manager.addDocument('en', 'show distribution of MCC\'s', 'visualisation.expense');

manager.addDocument('en', 'break down spending by employee', 'visualisation.expense.breakdown');
manager.addDocument('en', 'break down each category', 'visualisation.expense.breakdown');
manager.addDocument('en', 'expand each category type', 'visualisation.expense.breakdown');


// Train also the NLG
// manager.addAnswer('en', 'greetings.bye', 'Till next time');
// manager.addAnswer('en', 'greetings.bye', 'see you soon!');
// manager.addAnswer('en', 'greetings.hello', 'Hey there!');
// manager.addAnswer('en', 'greetings.hello', 'Greetings!');


const constructResponse = async (msg) => {
    await manager.train();
    manager.save();
    const response = await manager.process('en', msg);
    console.log(response);
    return response
}

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('msg', async (msg) => {
        console.log("received message ", msg)
        const res = await constructResponse(msg)
        socket.emit('bot message', res)
    })
});

(async() => {
    server.listen(3001, () => {
        console.log('listening on *:3001');
    });
})();