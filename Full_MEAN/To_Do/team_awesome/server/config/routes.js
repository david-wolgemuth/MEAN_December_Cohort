var todos = require('../controllers/todos.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });
};