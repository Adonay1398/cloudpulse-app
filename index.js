const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.json({
        status: "UP",
        message: "¿ClpoudPulse API funcionando al 100%",
        timestamp: new Date()
    });
});

app.listen(PORT,() => {
    console.log('servidor corriendo en el puerto ${PORT}')
});