## Starting point for an Express 4.x project

### Setup
```
git clone https://github.com/moudy/expressjs-base new-project
cd new-project
rm -rf .git
npm install
```
Remember to run `heroku config:set NODE_ENV=production`.

### App Initialization
1. `app.js` is the entery point for the app. The Express app is created here
2. `config/boot.js` gets called passing in app instance
    1. Some basic settings are added to app (title, view engine, etc.)
    2. `config/environments/<environment>.js` file is called to set environment specific settings like port and database uri
    3. `config/initializers/*` are called. This is where you can add other setup code like passport configuration
    4. Some basic middleware is defined
    5. Use `config/router.js` as middleware
3. connect to Database by requiring `config/db.js`
4. Start app with `app.listen()`

### Routing
Routes are defined in `config/router.js`. See [Project Router](https://github.com/moudy/project-router) for more info.

```
var projectRouter = require('project-router');

module.exports = projectRouter.map(function () {
  this.get('/', 'pages/index');
});
```

### Views
Views are located in `app/views`. [express3-handlebars](https://github.com/ericf/express3-handlebars) is used as the view engine. Despite it's name it work fine with Express 4. The view engine is configured in `config/view`. Handlebars is passed into the express3-handlebars module so you can be sure which version of handlebars you are using. This can be important if you also want to use handlebars on the client.

### Assets (development)
SASS + Browserify. Assets are served using [Broccoli](https://github.com/broccolijs/broccoli) as middleware. See `Brocfile.js` for configuration.

### Assets (production)
A postinstall script builds fingerprinted and gziped assets into `assets/` using [Broccoli](https://github.com/broccolijs/broccoli). You can optionally provide some AWS credentials as environment variables and `script/deploy-assets` will deploy the assets to an S3 bucket. Make sure to specify the bucketname and change the asset host in `config/environments/production.js`. The `asset-url` handlebars helper (in `lib/handlebars-helpers.js`) takes care of the url re-writing based on the asset host and fingerprint.

### Testing
A basic starting point for mocha tests in `test/`

### Models
Should go in `app/models/`. `config/db.js` and `test/helpers` assumes the use of MongoDB/MongooseJS but can be easily swapped out if that's not right for the application.
