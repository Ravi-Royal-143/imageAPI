const port = process.env.PORT || 3000

const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const server = http.createServer(app);
const compression = require('compression')
const path = require("path");
const fs = require('fs');
const bodyParser = require('body-parser');
const upload = require('./multer');

app.use(cors());
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

app.use(bodyParser.json());
const currDirPath = path.resolve(__dirname, "file");
console.log(currDirPath)
if (!fs.existsSync(currDirPath)) {
    fs.mkdirSync(currDirPath);
    console.log('Directory created successfully!');
  } else {
    console.log('Directory already exists!');
  }
app.use("/file", express.static(path.join("file")));

app.use("/", express.static(path.join(__dirname, "dist")));

app.post('/upload', upload.single('image'), (req, res) => {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded');
    }
    fs.writeFile(`file/${file.originalname + Math.random()}`, file.buffer, (err) => {
      if (err) {
        return res.status(500).send('Error saving file');
      }
      res.json({msg: 'File saved successfully'});
    });
});

const dirnameExportImg = './file'
app.get('/list', (req, res) => {
    fs.readdir(dirnameExportImg, function (err, files) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Fetch Images failed!",
                error: err
            });
        }
        res.send(files);
    })
});

app.delete('/delete/:path', (req, res) => {
    fs.unlinkSync('file/'+req.params.path);
    res.send({ message: 'Delete successfully'});
})

app.get('/test', (req, res) => {
    res.send('test');
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});