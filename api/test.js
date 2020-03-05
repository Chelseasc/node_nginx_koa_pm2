const Router = require('koa-router');
const router = new Router();
router
    .get('/api/', (ctx, next) => {
        ctx.body = 'hello sc!';
    })
    .get('/api/test',  (ctx, next) => {
        ctx.body = {
            msg: 'this is a test',
            query: ctx.query,
            queryStr: ctx.querystring
        }
    })
    .post('/api/users',  (ctx, next) => {
        ctx.body = 'here is the users';
    })
    .all('/api/users/:id',  (ctx, next) => {
    })

module.exports = router