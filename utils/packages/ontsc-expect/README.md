# ontsc-expect
Simple module for ensuring expected parameters exist

### install

```
$ npm install ontsc-expect
```

### Usage

```javascript
var expect = require("ontsc-expect");

// The object you're testing
var options = {
  example: "exists"
  another: 5
};

expect.options(options, ["example", "another"]); // does nothing
expect.options(options, ["example", "another", "some_other_key"]); // errors because options["some_other_key"] is undefined
```
