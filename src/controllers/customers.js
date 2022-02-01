const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/passwords.js')

const defaultTitle = 'Cadastro de clientes'

function index (req, res) {
    res.render('register', {
        title: defaultTitle,
    })
}

async function add(req, res){
    const {
        name,
        age,
        email,
        password,
    } = req.body

const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto
    })

    register.save()

    //res.send('Registrado com sucesso!')
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro Realizado com Sucesso!',
    })
}

async function listUsers (req, res){
    const users = await CustomersModel.find()
    res.render('list', {
        title: 'Listagem de usuários',
        users,
    })
}

module.exports = {
    index,
    add,
    listUsers,
}