const express = require('express');
const route = express.Router();
const user = require('../controller/user');
const auth = require('../auth/auth');

route.route('/user')
    .post(user.createUser)
    //auth를 써서 인증이 되게 설정을 해준다. isBasicAutienticated주소로 들어갈때마다 auth에서 맞는지 아닌지 판별해준다.
    .get(auth.isBasicAutienticated, user.readUser)
    .put(auth.isBasicAutienticated, user.updateUser)
    .delete(auth.isBasicAutienticated, user.deleteUser)

module.exports = route;