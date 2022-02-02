const router = require('express').Router()

const CustomersController = require('../controllers/customers')   // O PADRÃO É COLOCAR COM A PRIMEIRA LETRA DE CADA PALAVRA EM MAIÚSCULA, POIS ISSO INDICA QUE É UM CONTROLLER, ASSIM COMO O MODEL
const IndexController = require('../controllers/index')


// rotas
router.get('/', IndexController.index)

// registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// rota para listar usuários
router.get('/list', CustomersController.list)

// editar
router.get('/edit', CustomersController.formEdit)

module.exports = router



