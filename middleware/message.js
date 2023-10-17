let myMessage = 'Middleware Running...';

async function message(req, res, next){
    swal(`Middleware says ${myMessage}`)
}

module.exports = {message};