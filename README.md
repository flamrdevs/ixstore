<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixstore/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="github" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="gzip" href="https://bundlejs.com/?q=ixstore">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixstore">
      <img alt="github" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixstore" hspace="1">
    </picture>
  </a>
</p>

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
