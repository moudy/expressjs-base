exports.index = function (req, res) {
  res.render('index', {foo: 'hello'});
};
