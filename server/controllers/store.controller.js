const { Store } = require('../models/store.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createStore = (request, response) => {
    const { storeName, storeNumber,storeOpen } = request.body;
    Store.create({
        storeName,
        storeNumber,storeOpen
    })
        .then(store => response.json(store))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllStores = (request, response) => {
    Store.find({})
        .then(stores => response.json(stores))
        .catch(err => response.json(err))
}

module.exports.getStore = (request, response) => {
    Store.findOne({_id:request.params.id})
        .then(store => response.json(store))
        .catch(err => response.json(err))
}

module.exports.updateStore = (request, response) => {
    Store.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updatedStore => response.json(updatedStore))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteStore = (request, response) => {
    Store.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}








