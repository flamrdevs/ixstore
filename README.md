<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixstore/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l/ixstore?t=dark">
      <img alt="license" src="https://none.deno.dev/npm/l/ixstore?t=light" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixstore">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v/ixstore?t=dark">
      <img alt="version" src="https://none.deno.dev/npm/v/ixstore?t=light" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixstore">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/bundlejs/mz/ixstore?t=dark">
      <img alt="size" src="https://none.deno.dev/bundlejs/mz/ixstore?t=light" hspace="1">
    </picture>
  </a>
</p>

<h1 id="ixstore">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=rocket">
    <img alt="lucide rocket" src="https://none.deno.dev/ui/icon/lucide?t=light&i=rocket" hspace="1">
  </picture>
  <span>
    ixstore
  </span>
</h1>

simple state management

<h2 id="usage">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=code">
    <img alt="lucide code" src="https://none.deno.dev/ui/icon/lucide?t=light&i=code" hspace="1">
  </picture>
  <span>
    usage
  </span>
</h2>

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

<h2 id="license">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=scale">
    <img alt="lucide scale" src="https://none.deno.dev/ui/icon/lucide?t=light&i=scale" hspace="1">
  </picture>
  <span>
    license
  </span>
</h2>

MIT
