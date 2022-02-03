const express = require('express')
const path = require('path')

const db = require('./database') // NÃO PRECISA INFORMAR O NOME DO ARQUIVO INDEX
const routes = require('./routes') // const routes = require('./routes')

const app = express()

// CONEXÃO COM O BANCO DE DADOS
db.connect()



// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))


// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true}))


// definindo as rotas
app.use('/', routes)


// 404 error (not found)
app.use((req, res) => { // middleware
    res.send('Página não encontrada!')
})


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))