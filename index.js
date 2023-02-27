const port = process.env.PORT || 3000

const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const server = http.createServer(app);
const compression = require('compression')
const path = require("path");

app.use(compression());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/", express.static(path.join(__dirname, "../", "dist")));

app.use(cors());

app.get('/test', (req, res) => {
    res.send('test');
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "dist", "index.html"));
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});