---
title: starting with alpine
tags: 'alpine'
summary: 'Alpine is a great, lightweight javascript library, and very simple to use. Here we will look at the very basics to get started withi it.'
---

## Why alpine?

```html
<div x-data="{count: 0}">
  <button @click="count++">click</button>
  <span x-text="count">
</div>
```

<div x-data="{count: 0}">
  <button @click="count++" class="border px-2 border-black rounded">click</button>
  <span>count: </span><span x-text="count">
</div>