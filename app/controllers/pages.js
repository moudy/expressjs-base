var IndexPresenter = require('../presenters/pages/index');

exports.index = function (req, res) {
  var page =  new IndexPresenter({ title: 'Index Page' });
  res.render('pages/index', page.present());
};
