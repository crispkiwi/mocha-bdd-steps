
describe('step function', function () {

    step('should be called and error', function () {
          throw new Error('oops!');
    });

    step('should not be called', function () {

    });

});

describe('it function', function () {


    it('should be called and error', function () {
          throw new Error('oops!');
    });

    it('should also be called', function () {

    });


});
