const express = require('express');

const app = express();
app.use((req, res, next) => {
console.log('Requête reçue');
});
app.use((req,res, next) => {
    res.json({ message: 'Votre requête a bien été reçue'});
});

module.exports = app;