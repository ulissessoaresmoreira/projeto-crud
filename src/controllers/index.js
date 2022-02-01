function index (req, res) {
    res.render('index', {
        title: 'Titulo Teste'
    })
}


module.exports = {
    index,
}