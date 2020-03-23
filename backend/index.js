const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        aluno: "Matheus",
        curso: "Semana OmniStack 11",
    })
});

app.listen(3333);
