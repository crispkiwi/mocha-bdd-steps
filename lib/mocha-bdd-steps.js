(function() {
    "use strict";

    var Mocha = require('mocha'),
        Runnable  = require('mocha/lib/runnable'),
        escapeRe = require('escape-regex');

    module.exports = Mocha.interfaces['bdd-steps'] = function(suite) {

        suite.on('pre-require', function(context, file, mocha) {
            require('mocha/lib/interfaces/bdd')(suite, context);

            context.step = function() {
                var itTest = context.it.apply(this, arguments);

                itTest.run = function(fn) {
                    var ctx = this;

                    if (ctx.parent.__skipStep) {
                        ctx.skip();
                    }

                    return Runnable.prototype.run.call(this, function(err) {
                        if (err) {
                            ctx.parent.__skipStep = true;
                        }
                        return fn.call(this, err);
                    });
                }

                return itTest;
            }

            context.step.only = function() {
                var test = context.step.apply(this, arguments);
                var reString = '^' + escapeRe(test.fullTitle()) + '$';
                mocha.grep(new RegExp(reString));
                return test;
            }

            context.step.skip = context.xstep = context.it.skip;

        });
    };
})();
