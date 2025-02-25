const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const ApiRoutes = require('./routes/ApiRoutes');
const data =  require('./databases/db');
const port = 1250;

//config de json com body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rota para listar todos os produtos
app.use('/', ApiRoutes);


data.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    });

}).catch(err =>{
    console.log('error', err);
});
