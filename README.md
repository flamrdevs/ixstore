<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixstore/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="license" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixstore">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/npm/version?t=dark&n=ixstore">
      <img alt="version" src="https://flamrdevs.cyclic.app/npm/version?t=light&n=ixstore" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixstore">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixstore">
      <img alt="size" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixstore" hspace="1">
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
