const testFunction = (req, res) => {
    try {
        res.send({msg: "Server Sucess"})
    }
    catch(error) {
        res.send(error)
    }
}

module.exports = {
    testFunction
}