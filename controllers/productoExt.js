productoExt = require('../models').productoExt;

module.exports = {
    //Get all
    findAll(req, res) {
        productoExt.findAll()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get by id
    findByPk(req, res) {
        productoExt.findByPk(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
     
    findAllByFilter(req, res) {
        // console.log(req.body);
        productoExt.findAll({where: req.body})
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
};