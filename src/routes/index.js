const router = require('express').Router()

// rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

module.exports = router