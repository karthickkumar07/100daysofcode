const functions = require("./app.js");

//to be
test("test1", () => {
  expect(functions.add(4, 8)).toBe(12);
});

test("test2", () => {
  expect(functions.add(4, 8)).not.toBe(13);
});

test("test3", () => {
  expect(functions.isNull()).toBeNull();
});
test("test4", () => {
  expect(functions.isUndefined()).toBeUndefined();
});
test("test5", () => {
  expect(functions.checkvalue(4)).toBe(4);
});

test("test the user - test6", () => {
  expect(functions.createUser()).toBe("karthick karthi@spart.com");
});

// To equal
test("testing object test-7", () => {
  expect(functions.createuserObject()).toEqual({
    firstname: "karthi",
    lastname: "krish",
  });
});

// Regex
test("test Regex test-8", () => {
  expect("spartan").not.toMatch(/X/);
});

// email testing
test("test Email Regex test-9", () => {
  expect("spartan@test.in").toMatch(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
});

//array
test("array test test-10", () => {
  names = ["raina", "vijay", "spart"];
  expect(names).toContain("vijay");
});

//normal
test("api test test-11", () => {
  functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Chelsey Dietrich");
  });
});

// async
test("api async test test-12", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Chelsey Dietrich");
});
