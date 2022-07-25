const express = require('express');

const router = express.Router();

const usersValidate = require('../middleware/usersValidate');

const users = [];

router.get(
  '/', (_req, res) => {
    res.status(200).json(users);
  })


router.post(
  '/', usersValidate, (req, res) => {
    const result = req.body;

    users.push({...result, id: users.length + 1});
    res.status(201).json(users);
  });

router.put(
  '/:id', (req, res) => {
    const id = req.params.id;
    const result = req.body;

    const user = users.map((user) => {
      if(user.id === +id) result
      return user;
    });
    return res.status(201).json(user)
    
    })

router.delete(
  '/:id', (req, res) => {
    const id = req.params.id;

    const newUsers = products.filter((user) => user.id !== +id);
    
    return res.status(200).json(newUsers);
  });

module.exports = router;