const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

const Model = mongoose.model('customer', schema)


module.exports(mongoose)


// USADO APENAS PARA REGISTRAR NO BANCO DE DADOS
/*const register = new Model({
    name: 'Ulisses',
    age: 40,
    email: 'ulissessm@gmail.com',
    password: '123456',
})

register.save()*/