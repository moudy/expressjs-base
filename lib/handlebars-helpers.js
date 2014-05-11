var helpers = {};

helpers['asset-url'] = function (name) {
  if (this.ENV.production) name = this.assets.url(name);
  if (this.settings.ASSET_HOST) name = this.settings.ASSET_HOST+name;
  return name;
};

module.exports = helpers;
