# mocha-bdd-steps

Mocha interface that adds a `step()` function to BDD, as an alternative to `it()`.

If a `step()` fails, following `step()` calls within the `describe()` will be skipped. Useful for BDD where tests need to be run in a specific sequence.

Works with tests that are synchronous, asynchronous, and returned promises.

## Example

```
it function
  ✓ should be called
  1) should be called and error
  ✓ should be called

step sequence
  ✓ should first be called
  2) then should be called and error
  - then should be skipped
  - then should also be skipped
```

## Installation

    $ npm install --save-dev mocha-bdd-steps


## Usage

From the command line:

    $ mocha --ui mocha-bdd-steps test.js

## Notes
- If using a linter, `/* global step */` should be added to the top of your test files.
