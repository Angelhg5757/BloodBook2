const express = require('express');
const app = express();
const port = 4000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/routes')(app);

app.listen(port, (err) => {
    //Error first
    if(err) console.log(`Algo salio mal ${err}`);
    console.log(`Inicio el servidor en el puerto ${port}`);
});