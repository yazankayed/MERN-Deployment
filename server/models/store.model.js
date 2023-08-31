const mongoose = require('mongoose');
const StoreSchema = new mongoose.Schema({
    storeName: { type: String , required: [true,"Name must contain 3 characters"], minlength:[3,"Name must contain 3 characters"] },
    storeNumber: { type: Number ,required: [true,"Must be unique number greater than 0"],  min:[3,"Must be unique number greater than 0"] },
    storeOpen: { type: String }
}, { timestamps: true });
module.exports.Store = mongoose.model('Store', StoreSchema);

