const express = require ("express");
const app = express();


app.use(express.static('public'));


/*
const path = require('path'); 
app.get('/', (req,res) => {
    res.sendFile (path.join(__dirname, '/views/betaHome.html'))});

    app.get('/crearCuenta', (req,res) => {
        res.sendFile (path.join(__dirname, '/views/crearCuenta.html'))});

app.listen(3001 ,() => console.log('sevidor corriendo beta'));

const port = process.env.PORT || 3001;
app.listen(port,()=>console.log(`servidor corriendo en el puerto ${port}`))*/