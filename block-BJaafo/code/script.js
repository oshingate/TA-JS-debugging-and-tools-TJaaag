let getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

//test1
var expected = "onkar shingate";
var output = getFullName("onkar", "shingate");
if (expected !== output) {
  console.error("output is not matched");
}

//test2
var expected = "tushar shingate";
var output = getFullName("tushar", "shingate");
if (expected !== output) {
  console.error("output is not matched");
}

//2nd
let totalAmount = (amount, taxRate) => {
  return amount + amount * taxRate;
};

//test1
var expected = 110;
var output = totalAmount(100, 10);
if (expected !== output) {
  console.error("output is not matched");
}

//test2
var expected = 135443;
var output = totalAmount(12313, 10);
if (expected !== output) {
  console.error("output is not matched");
}
