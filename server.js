const express = require('express');
const app = express();
const server = app.listen(3000, encender);//función de callback
function encender () {
   console.log('servidor encendido');
}
app.use(express.static('public'));