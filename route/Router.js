const express = require('express');
const route = express.Router();
const user = require('../controller/user');

route.route('/user')
    .post(user.createUser)
    .get(user.readUser)
    .put(user.updateUser)
    .delete(user.deleteUser)

module.exports = route;