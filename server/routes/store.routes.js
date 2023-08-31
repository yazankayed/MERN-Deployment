const StoreController = require('../controllers/store.controller');
module.exports = function(app){
    app.get('/api', StoreController.index);
    app.post('/api/stores', StoreController.createStore);
    app.get('/api/stores', StoreController.getAllStores);
    app.get('/api/stores/:id', StoreController.getStore);
    app.patch('/api/stores/:id', StoreController.updateStore);
    app.delete('/api/stores/:id', StoreController.deleteStore);






}

