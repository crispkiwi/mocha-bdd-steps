
describe('it function', function () {

    it('should be called', function () {

    });

    it('should be called and error', function () {
        throw new Error('oops!');
    });

    it('should be called', function () {

    });

});

describe('step sequence', function () {

    step('should first be called', function () {

    });

    step('then should be called and error', function () {
	    throw new Error('oops!');
    })

    step('then should be skipped', function () {

    });

    step('then should also be skipped', function () {

    });

});

describe('step sequence with 2 retries passing', function () {
    
    step('should first be called', function () {
        
    });
    
    step('then should be called and error 2 times, passing on the 3rd', (function () {
        var errorCount = 2;
        var calls = 0;
        return function() {
            calls++;
            if (calls <= errorCount) {
                throw new Error('oops!');
            }
        }
    }())).retries(2);

    step('then should be called', function () {

    });

    step('then should also be called', function () {

    });

});

describe('step sequence with 2 retries failing', function () {
    
    step('should first be called', function () {
        
    });
    
    step('then should be called and error 3 times', (function () {
        var errorCount = 3;
        var calls = 0;
        return function() {
            calls++;
            if (calls <= errorCount) {
                throw new Error('oops!');
            }
        }
    }())).retries(2);

    step('then should be skipped', function () {

    });

    step('then should also be skipped', function () {

    });

});


describe('step sequence with a manual skip', function () {

    step('should be called', function () {

    });

    step.skip('should be skipped', function () {

    });

    step('should be called', function () {

    });

});
