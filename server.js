/*const는 var 과 같은 선언문이지만 재선언과 재할당이 모두 불가능한 차이점이 있다. let은 재할당은 가능하나
재선언은 불가능하다. */
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./route/Router');

app.use(router)

app.listen(port,err =>{
    if(err) console.log(err)
    else console.log("서버가 가동되었습니다.")
});
