import { sum } from "../sum";
test("Calculate Sum of Two Numbers:",() =>{
    const result = sum(3,4);
    expect(result).toBe(7);
});