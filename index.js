const express = require('express');

const aktorlerRouter =require('./routers/aktorlerRauters');




const server = express();
server.use(express.json());
server.use("/aktorler", aktorlerRouter);


server.get('/', (req, res) => {
    res.send("Express Geldi...");
});


server.listen(5000, () => {
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor");
});


