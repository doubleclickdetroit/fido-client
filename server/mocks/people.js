module.exports = function(app) {
  var express = require('express');
  var peopleRouter = express.Router();

  peopleRouter.get('/', function(req, res) {
    res.send({
      'people': [
        { id: 1, firstName: 'Nicole', lastName: 'Babics', gender: 2, relationship: 3 },
        { id: 2, firstName: 'Jean', lastName: 'Scott', gender: 2, relationship: 1 }
      ]
    });
  });

  peopleRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  peopleRouter.get('/:id', function(req, res) {
    res.send({
      'people': {
        id: req.params.id
      }
    });
  });

  peopleRouter.put('/:id', function(req, res) {
    res.send({
      'people': {
        id: req.params.id
      }
    });
  });

  peopleRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/people', peopleRouter);
};
