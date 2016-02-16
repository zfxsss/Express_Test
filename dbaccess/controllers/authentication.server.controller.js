exports.authentication = function(req,res,next){
    if(2 == 1)
    {
        next();
    }
    else
    {
        res.status(403).send("fuck, get out");
    }
};