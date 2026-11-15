import assert from "node:assert/strict";
import test from "node:test";

import { add, chunk } from "../src/math.ts";

test("add adds two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("chunk splits items evenly", () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5, 6], 2), [
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});

test("chunk splits items unevenly with a shorter final chunk", () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test("chunk throws RangeError when size is below 1", () => {
  assert.throws(() => chunk([1, 2, 3], 0), RangeError);
});
