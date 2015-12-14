# mocha-bdd-steps

Mocha interface that adds a `step()` function, as a replacement for `it()`.

If a `step()` fails it will abort the parent `describe()`, other tests will still be run.

## Usage

### Node.js

From the command line:

    $ mocha --ui mocha-bdd-steps test.js
