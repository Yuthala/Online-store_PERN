//основной роутер (объединяем все роутеры в один). Импортировать в index.js
const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');


//указываем под-роутеры
//первый параметр функции use - url, по которому роутер будет отрабатывать
//второй параметр - сам роутер (предварительно импортировать)
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router;