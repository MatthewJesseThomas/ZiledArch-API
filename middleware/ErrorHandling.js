async function errorHandling(err, req, res, next){
    if(err){
        let status = err.status || 500;
        res.status(status).json(
            {

        }
        )
    }
}