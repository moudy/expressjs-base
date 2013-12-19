var _ = require('underscore');

function IndexPresenter(options) {
  this.title = options.title;
}
module.exports = IndexPresenter;

_.extend(IndexPresenter.prototype, {
  clientData: function () {
    return JSON.stringify({
      user: { name: 'Foo' }
    });
  }

, present: function () {
    return {
      title: this.title
    , clientController: 'pagesIndex'
    , clientData: this.clientData()
    };
  }
});


