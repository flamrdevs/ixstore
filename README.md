# ixstore

simple state management

## Usage

```ts
import ixstore from "ixstore";

const store = ixstore({
  hello: "world",
});

const unsub = store.sub((value) => {
  console.log(value);
});

store.get().hello; // world

store.set({ hello: "ixstore" });

// { hello: "ixstore" }

store.get().hello; // ixstore

unsub();
```

## License

MIT
