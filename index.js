//Traer express
const express = require('express');
//Inicializar express
const app = express();
//Ajustes
app.set('port', 5000);

//MIDDLEWARE
function validaMiddleware(req, res, next){
    const id = req.params.id;
    if(id==2){
        console.log("Soy dos")
        next();
    }else{
        res.send("No eres el usuario")
    }
}


//RUTAS
app.get('/', (req, res) => {
    res.send("Ruta inicial")
})
app.get('/user/:id', (req, res)=>{
    const id = req.params.id;
    res.send(id);
})
app.get('/user/:id/profile', validaMiddleware, (req, res)=>{
    const id = req.params.id;
    res.status(200).send(`Es el perfil de ${id}`)
})


//Poner servidor a escuchar
app.listen(app.get('port'), ()=>{
    console.log("Puerto iniciado en puerto "+app.get('port'));
})
