function add(req, res){
    const {
        name,
        age,
        email,
        password,
    } = req.body
    
    res.end()
}

module.exports = {
    add
}