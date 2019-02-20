const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/restaurant';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

      Dishes.create({
        name: 'Uthapizza',
        description: 'is it pizza ? or what ?'
    })
    .then((dish) => {
        console.log(dish);
        
        return Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

});