(function() {
    "use strict";

    var Mocha = require('mocha'),
        Runnable  = require('mocha/lib/runnable'),
        EVENT_FILE_PRE_REQUIRE = require('mocha/lib/suite').constants.EVENT_FILE_PRE_REQUIRE;

    module.exports = Mocha.interfaces['bdd-steps'] = function(suite) {
        require('mocha/lib/interfaces/bdd')(suite);

        suite.on(EVENT_FILE_PRE_REQUIRE, function(context, file, mocha) {

            context.step = function() {
                var itTest = context.it.apply(this, arguments);

                itTest.run = function(fn) {
                    var ctx = this;

                    if (ctx.parent.__skipStep) {
                        ctx.skip();
                    }

                    return Runnable.prototype.run.call(this, function(err) {
                        if (err && ctx._retries !== -1 && ctx._currentRetry >= ctx._retries) {
                            ctx.parent.__skipStep = true;
                        }
                        return fn.call(this, err);
                    });
                }

                return itTest;
            }

            context.step.only = function(title, fn) {
                var test = context.step(title,fn);
                test.parent.appendOnlyTest(test);
                return test;
            }

            context.step.skip = context.xstep = context.it.skip;
            context.step.retries = context.it.retries;

        });
    };
})();
