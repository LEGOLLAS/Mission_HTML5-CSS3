const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

//basic을 해주면 밑에 basid이 들어가 밑에 if문을 실행시켜준다. 이미 default값이 있기때문에 안 써도 괜찮다.
passport.use(new BasicStrategy(
    function (id, password, callback) {

        //디비에 접근을 해서 아이디랑 비밀번호를 가져와서 확인을 하는 부분
        if(id === "study" && password === "1234"){
            callback(null, id);
        } else{
            callback(null,false)
        }
    }
));

exports.isBasicAutienticated = passport.authenticate('basic',{session: false})