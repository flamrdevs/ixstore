import { describe, expect, it } from "vitest";

import ixstore from ".";

describe("ixstore", () => {
  it("Works", () => {
    type State = "red" | "green" | "blue";

    let subValue: State = "red";
    let subCalls: number = 0;

    const store = ixstore<State>("red");

    const unsub = store.sub((value) => {
      subValue = value;
      ++subCalls;
    });

    const expects = (equalStoreGet: State, equalSubValue: State, equalSubCalls: number) => {
      expect(store.get()).toEqual(equalStoreGet);
      expect(subValue).toEqual(equalSubValue);
      expect(subCalls).toEqual(equalSubCalls);
    };

    expects("red", "red", 0);

    store.set("green");

    expects("green", "green", 1);

    store.set(store.get() === "red" ? "green" : "blue");

    expects("blue", "blue", 2);

    store.set("blue");

    expects("blue", "blue", 2);

    store.set(store.get() === "green" ? "blue" : "red");

    expects("red", "red", 3);

    unsub();

    store.set(store.get() === "blue" ? "red" : "green");

    expects("green", "red", 3);
  });
});
