async function brew(req, res, next){
    const data = req.body.data;

    if(data === "teapot"){
        return next({ status: 418, message: "I'm a teapot"});
    }

    res.send("brewing");

}

module.exports = {brew};