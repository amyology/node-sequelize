var express = require('express'),
    router = express.Router(),
    models = require('../server/models/index');

//GET All Notes
router.get('/', function(req, res) {
  models.Note.findAll({}).then(function(notes) {
    res.json(notes);
  });
});

//CREATE Note
router.post('/', function(req, res) {
  models.Note.create({
    title: req.body.title,
    text: req.body.text,
    published: req.body.published,
    UserId: req.body.user_id
  }).then(function(note) {
    res.json(note);
  });
});

//GET Single Note
router.get('/:id', function(req, res) {
  models.Note.find({
    where: {
      id: req.params.id
    }
  }).then(function(note) {
    res.json(note);
  });
});

//UPDATE Note
router.patch('/:id', function(req, res) {
  models.Note.find({
    where: {
      id: req.params.id
    }
  }).then(function(note) {
    if(note){
      note.updateAttributes({
        title: req.body.title,
        text: req.body.text,
        published: req.body.published
      }).then(function(note) {
        res.send(note);
      });
    }
  });
});

//DELETE Note
router.delete('/:id', function(req, res) {
  models.Note.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(note) {
    res.json(note);
  });
});

module.exports = router;