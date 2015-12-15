
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
    });

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
