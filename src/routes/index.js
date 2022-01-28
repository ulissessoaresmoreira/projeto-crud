const router = require('express').Router()

const CustomersController = require('../controllers/customers')   // O PADRÃO É COLOCAR COM A PRIMEIRA LETRA DE CADA PALAVRA EM MAIÚSCULA, POIS ISSO INDICA QUE É UM CONTROLLER, ASSIM COMO O MODEL

// rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro de clientes'
    })
})

router.post('/register/add', CustomersController.add)

module.exports = router