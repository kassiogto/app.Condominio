const express = require('express');

const { User } = require('./app/models');

const app = express();


app.post('/users', async (req, res) => {
  try {
    const use = await User.create(req.body);
    res.json(use);
  } 
  catch (err) {

    console.error(err);
    return res.status(400).send({error: err});

  }
}); // Criar

app.listen(3000);