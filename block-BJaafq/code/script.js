let addNumber = (a, b) => {
  return a + b;
};
let mulNumber = (a, b) => {
  return a * b;
};
var expected = 0;
var output = 0;

//testing framework------------------------------
function test(message, cb) {
  try {
    cb();
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

//testing assertion---------------------------------
let expect = (actual) => {
  return {
    equalTo: function (expected) {
      if (expected !== actual) {
        throw new Error("output is not matched");
      }
    },
  };
};

test("adding 1 and 2 should return 3", () => {
  expect(addNumber(1, 2)).equalTo(3);
});

test("adding 1 and 1 ", () => {
  expect(addNumber(1, 1)).equalTo(2);
});
test("adding 10 and 12 ", () => {
  expect(addNumber(10, 12)).equalTo(22);
});
test("adding 1 and 1 ", () => {
  expect(addNumber(1, 1)).equalTo(2);
});
test("adding 1 and 1 ", () => {
  expect(addNumber(1, 1)).equalTo(2);
});

test("multiplying 10 and 5", () => {
  expect(mulNumber(10, 5)).equalTo(50);
});

//test1
// function testAdd() {
//   expected = 25;
//   output = addNumber(20, 5);
//   expect(output).equalTo(expected);
// }

// test("adding 20 and 5", testAdd);
// test("adding 10 and 20", () => {
//   expect(addNumber(10, 20)).equalTo(30);
// });

// //test2
// function testMul() {
//   expected = 100;
//   output = MulNumber(20, 5);
//   expect(output).equalTo(expected);
// }

// test("multiplying 20 and 5", testMul);
