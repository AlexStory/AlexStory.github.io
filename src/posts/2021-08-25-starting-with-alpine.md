---
title: starting with alpine
tags: ['alpine', 'javascript']
summary: 'Alpine is a great, lightweight javascript library, and very simple to use. Here we will look at the very basics to get started with it.'
---
# What Is Alpine?

Alpinejs is an extremely lightweight javascript framework that makes it super simple to add functionality to your sites.


# Why Alpine?
---

Alpine is super lightweight, so you can add it with a single script instead of needing an entire build process.
Alpine is _NOT_ an SPA framework. It's more of a modern alternative to jQuery than a competitor to react.
I find its perfect place to be on sites where you don't want a whole SPA (as most sites do not need one), so it fits nicely with a webserver based app, like one built with Django or Phoenix. Its small size also makes it great for statically rendered sites like this one.


# Getting Started
---

Adding alpine to your site is as simple as adding one script tag.

```html
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

This will give you the latest version of alpine 3.

You can swap the 3 with a 2 if you need ie compatability.

For a first example we'll build a simple clicker.

## x-data
---

The primary way of using alpine is through attribute tags. The one that turns an html element into an alpine component and makes alpine listen to it is `x-data`. You give it a javascript object that will hold your state.

```html
<div x-data="{count: 0}">
  ...
</div>
```

With that, anything inside the div will be monitored by alpine, and be able to access the data.

## x-text
---

Another attribute tag. This one will set the innerText of the element it is on to be whatever field you'd like.

```html
<span x-text="count"></span>
```
With that the span will always update to have the `count` property from the `x-data` as its value.

## x-on
---

`x-on` is our event listener, which allows us to react to javascript events from alpine.
```html
<button x-on:click="count++">click</button>
```

You can also use the short hand `@`, for example

```html
<button @click="count++">click</button>
```

With either of those on an element alpine will lisen for click events, and increment our counter.

## Bringing It All Together.
---

So combining our `x-data`, `x-on` and `x-text` we can get a functional clicker.

```html
<div x-data="{count: 0}">
  <button @click="count++">click</button>
  <span>count: </span><span x-text="count">
</div>
```

You can try this code below:

<div x-data="{count: 0}" class="mt-2">
  <button @click="count++" class="border px-2 border-black rounded">click</button>
  <span>count: </span><span x-text="count">
</div>

# A Bigger Example
---

As a slightly larger example, to showcase one more important bit of functionality we will build a todo list.

## Component Functions

You don't have to declare your attributes in the data attribute directly. You can reference a function that manages it for you.

We will start our app with a todo array, and a newTodo string.

```html
<div x-data="todoApp()">
  ...
</div>

...

<script>
function todoApp() {
  return {
    newTodo: '',
    todos: [],
  }
}
</script>
```

## x-model
---

Alpine employs 2-way data binding, and its method of doing so is through `x-model`.
To add to our existing example
```html
<div x-data="todoApp()">
  <input placeholder="todo..." x-model="newTodo" />
</div>
```

## x-for
---
`x-for` is alpines utility for iterating over a list of items.

There are two things to note with `x-for`:
  - `x-for` must be on a `template` element.
  - `x-for` must have a single child element.

you can also add a `:key` attribute to help with ordering on item removal/addition.

```html
<div x-data="todoApp()">
  <input placeholder="todo..." x-model="newTodo" />
  <ul>
    <template x-for="todo in todos">
      <li x-text="todo"></li>
    </template>
  </ul>
</div>
```

## Component functionality
---
You can also add functionality to the component function that you are using. One thing to note is that whenever
you use data in the component you must reference it with `this` like so.

```html
...

<script>
function todoApp() {
  return {
    newTodo: '',
    todos: [],
    addTodo() {
      this.todos.push(this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>
```

## Sub-methods

Several Alpine attributes have sub-methods to allow additional functionality.
A helpful one is `@click.prevent` which adds `event.preventDefault()` to your click handler automatically so that, for instance, a form won't refresh your page for instance.

```html
<div x-data="todoApp()">
  <input placeholder="todo..." x-model="newTodo" />
  <button @click.prevent="addTodo">click</button>
  <ul>
    <template x-for="todo in todos">
      <li x-text="todo"></li>
    </template>
  </ul>
</div>
```

# Final code

And with that we have our final code for the project

```html
<div x-data="todoApp()">
  <input placeholder="todo..." x-model="newTodo" />
  <button @click.prevent="addTodo">click</button>
  <ul>
    <template x-for="todo in todos">
      <li x-text="todo"></li>
    </template>
  </ul>
</div>
...

<script>
function todoApp() {
  return {
    newTodo: '',
    todos: [],
    addTodo() {
      this.todos.push(this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>
```

You can try it out below.

<div x-data="todoApp()">
  <input type="text" placeholder="todo..." x-model="newTodo" class="border-blue-500 border rounded pl-2" />
  <button @click.prevent="addTodo" class="border border-black rounded px-2" >click</button>
  <ul>
    <template x-for="todo in todos">
      <li x-text="todo"></li>
    </template>
  </ul>
</div>

<script>
function todoApp() {
  return {
    newTodo: '',
    todos: [],
    addTodo() {
      this.todos.push(this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

