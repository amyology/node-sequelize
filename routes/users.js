var express = require('express'),
    router = express.Router(),
    models = require('../server/models/index');

/* GET users listing. */
router.get('/', function(req, res) {
  models.User.findAll({}).then(function(users){
    res.json(users);
  });
});

//CREATE User
router.post('/', function(req, res) {
  models.User.create({
    name: req.body.name
  }).then(function(user) {
    res.json(user);
  });
});

//GET Single User
router.get('/:id', function(req, res) {
  models.User.find({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    res.json(user);
  });
});

//UPDATE User
router.patch('/:id', function(req, res) {
  models.User.find({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    if(user){
      user.updateAttributes({
        name: req.body.name
      }).then(function(user) {
        res.send(user);
      });
    }
  });
});

//DELETE User
router.delete('/:id', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(note) {
    res.json(note);
  });
});

module.exports = router;
