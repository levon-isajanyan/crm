//Connect to mongodb via mongoose
const mongoose = require('mongoose');

//Connect to MongoDB with mongoose
mongoose.connect('mongodb://admin:12345@127.0.0.1:27017');

//FindWarehouse model
let warehouse = mongoose.model('warehouse',{
    category: String ,
    type: String ,
    name: String ,
    company: String ,
    price: Number ,
    stockPrice: Number ,
    item: Number
});


//make module export
module.exports = warehouse ;