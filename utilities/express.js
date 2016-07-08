// config
var config = require('../config/config.js');

var express = require("express");
var hbs = require('express-hbs');
var expressParams = require('express-params');
var _ = require('underscore');

hbs.registerHelper('everyNth', function(context, every, options) {
    var fn = options.fn;
    var inverse = options.inverse;
    var ret = '';

    if (context && context.length > 0) {
        for (var i = 0, j = context.length; i < j; i++) {
            var modZero = i % every === 0;
            ret = ret + fn(_.extend({}, context[i], {
                isModZero: modZero,
                isModZeroNotFirst: modZero && i > 0,
                isLast: i === context.length - 1
            }));
        }
    } else {
        ret = inverse(this);
    }

    return ret;
});

var appConfiguration = {

    templateConfig: function(app) {

        app.engine('hbs', hbs.express3({
          partialsDir: config.ROOT + '/views/partials',
          layoutsDir: config.ROOT + '/views/layouts'
        }));
        app.set('view engine', 'hbs');
        app.set('views', config.ROOT + '/views');        

        app.use(express.static(config.ROOT + '/public'));
    },

    enableCORS: function(app) {
        app.use(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          next();
        }); 
    },

    init: function() {
        var app = express();

        appConfiguration.templateConfig(app);

        appConfiguration.enableCORS(app);

        return app;
    }
};


module.exports = {
    appConfiguration: appConfiguration
};
