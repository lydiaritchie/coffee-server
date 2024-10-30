async function brew(req, res, next){
    const data = req.body.data;

    if(data === "teapot"){
        return next({ status: 418, message: "I'm a teapot"});
    }

    res.json({message: "brewing"});

}

module.exports = {brew};