const mongoose = require('mongoose') 

function connect () {
    mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')    
    const db = mongoose.connection
    db.once('open', () => {
        console.log('Connected to database!')
    })    
    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}


/*
module.exports = connect // ANTES ESTAVA ASSIM, MAS APRESENTOU O SEGUINTE ERRO: DB.CONNECT IS NOT A FUNCTION, POIS É CHAMADA COMO UM OBJETO NO INDEX.JS DB.CONNECT()
*/