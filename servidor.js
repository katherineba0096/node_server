const http = require("http")
const chalk = require("chalk")
const mensaje = require('./mensaje.json');

const host = "localhost";
const port = 8080;


const ser = (req, res) => {
    if (req.method == "GET" && req.url === '/mensaje') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(mensaje));

    }

}

const server = http.createServer(ser)

server.listen(port, host, () => {
    console.log(chalk.green(`el servidor esta funcionando en el puerto ${port} y en el anfitrion ${host}`))

})