const authentication = require('../authentication/authentication');
const producto = require('../controllers/producto');
const usuario = require('../controllers/usuario');
const emailer = require('../controllers/emailer');
const productoExt = require('../controllers/productoExt');
const test = require('../controllers/test');



module.exports = function(router) 
{   
    //test
    router.get('/test', test.findAll);
    router.get('/test/:id', test.findByPk);
    router.post('/test', test.create);
    router.put('/test/:id', test.update);
    router.delete('/test/:id', test.delete);
    router.post('/test-filter', test.findAllByFilter);
    
    //productoExt
    router.get('/producto-ext', productoExt.findAll);
    router.get('/producto-ext/:id', productoExt.findByPk);
    router.post('/producto-ext-filter', productoExt.findAllByFilter);

    //emailer
    router.get('/emailer', emailer.findAll);
    router.get('/emailer/:id', emailer.findById);
    router.post('/emailer-filter', emailer.findAllByFilter);
    router.post('/emailer', emailer.create);
    router.put('/emailer/:id', emailer.update);
    router.delete('/emailer/:id', emailer.delete);

    //usuario
    router.get('/usuario', usuario.findAll);
    router.get('/usuario/:id', usuario.findByPk);
    router.post('/usuario', usuario.create);
    router.put('/usuario/:id', usuario.update);
    router.delete('/usuario/:id', usuario.delete);
    router.post('/usuario-filter', usuario.findAllByFilter);
   
    //producto
    router.get('/producto', producto.findAll);
    router.get('/producto/:id', producto.findByPk);
    router.post('/producto', producto.create);
    router.put('/producto/:id', producto.update);
    router.delete('/producto/:id', producto.delete);
    router.post('/producto-filter', producto.findAllByFilter);

    router.post('/authentication-login', authentication.login);

    return router;
};