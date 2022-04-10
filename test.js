const justifyBody = require("./middlewares/justifyBody");

test("Return a text with <br /> each 80 characters", () => {
  let req = {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quisquam dolorem magnam odio accusamus",
  };
  const result = justifyBody(req);

  expect(result).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quisquam dolorem magnam odio ac<br />cusamus"
  );
});
