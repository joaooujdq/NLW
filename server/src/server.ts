import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagens de Usuarios");

    response.json([
        "Fulano",
        "Ciclano",
        "Beltrano",
        "zetrano",
        "1"
    ]);
});

app.listen(3333);