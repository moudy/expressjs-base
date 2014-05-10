var helpers = {};

helpers['asset-url'] = function (name) {
  if (this.ENV.production) return this.assets.url(name);
  return name;
};

module.exports = helpers;
