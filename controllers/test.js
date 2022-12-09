test = require('../models').test;

module.exports = {
    //Get all
    findAll(req, res) {
        test.findAll()
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Get by id
    findByPk(req, res) {
        test.findByPk(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Create
    create(req, res) {
        test.create(req.body)
        .then(function(result) {
            res.status(200).send(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Edit
    update(req, res) {
        test.update(req.body, {
            where: {
                testId: req.params.id
            }
        })
        .then(function(result) {
            test.findByPk(req.params.id)
            .then(function(result) {
                res.status(200).json(result);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    //Delete
    delete(req, res) {
        test.destroy({
            where: {
                testId: req.params.id
            }
        })
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
    findAllByFilter(req, res) {
        // console.log(req.body);
        test.findAll({where: req.body})
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },
};