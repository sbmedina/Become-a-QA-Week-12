import * as operations from "./operations";

 //1
describe('texto', () => {

  test("Returns text", () => {
      expect(operations.texto("Hello World")).toBe("Hello World");
  });

});