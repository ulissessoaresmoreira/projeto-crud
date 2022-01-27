const router = require('express').Router()

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



module.exports = router