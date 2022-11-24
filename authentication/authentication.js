usuario = require('../models').usuario;
var jwt = require('jwt-simple');
var moment = require('moment-timezone');


function createJWT(user) {
    console.log("user",user)
    var payload = {
      usuarioId: user.usuarioId,
      usuarioNombreApellido: user.usuarioNombreApellido,
      iat: moment().unix(),
      exp: moment().add(14, 'days').unix()
    };
    // return jwt.encode(payload, config.TOKEN_SECRET);
    // var encoded = jwt.encode(payload, 'granartis@2018');
    // return encoded;
    return jwt.encode(payload, 'cl@siun3');
}

module.exports = {
    login(req, res) {
        console.log("req.body",req.body)
        usuario.findOne({ where: {usuarioCorreo: req.body.email} })
        .then(function(user) {
            if (!user) {
                res.status(401).json({ message: 'Invalid email and/or password' });
            } else 
            {
               console.log("user",user)
                if (req.body.password==user.usuarioContrasenha) {
                    res.send({ token: createJWT(user) });
                }else{
                    res.status(401).send({ message: 'Invalid email and/or password' });   
                }
            
            }      
        })
        .catch(function(err) {
            // console.log('catch...');
            console.log("errrrrr",err);
            res.status(500).json(err);
        });
    },
    
};