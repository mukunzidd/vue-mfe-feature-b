# Vue MFE Feature B - TodoList Component

[![Tests](https://img.shields.io/badge/tests-4%20passing-brightgreen.svg)](https://github.com/mukunzidd/vue-mfe-feature-b)

A modern TodoList component for Vue.js micro-frontends. Built with Vue 3 and TypeScript, featuring local storage persistence and a clean UI.

> 🔗 Part of the Vue MFE ecosystem. Check out [@mknz/vue-mfe-wrapper](https://github.com/mukunzidd/vue-mfe-wrapper) for the core framework.

## Features

- ✨ Modern, clean UI design
- 💾 Local storage persistence
- 🌓 Light/Dark theme support
- ✅ Checkbox completion
- 🗑️ Easy item removal
- ⚡️ Performance optimized

## Installation

```bash
# Using npm
npm install @mknz/vue-mfe-feature-b

# Using bun
bun add @mknz/vue-mfe-feature-b
```

## Quick Start

```vue
<script setup>
import { TodoList } from '@mknz/vue-mfe-feature-b'
</script>

<template>
  <TodoList />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `storageKey` | `string` | `'todos'` | Local storage key for persistence |
| `maxItems` | `number` | `100` | Maximum number of todo items |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |

## Events

- `@item-added`: Emitted when a new todo is added
- `@item-removed`: Emitted when a todo is removed
- `@item-toggled`: Emitted when a todo's completion status changes

## Example with Event Handling

```vue
<script setup>
import { TodoList } from '@mknz/vue-mfe-feature-b'

const handleItemAdded = (item) => {
  console.log('New todo added:', item)
}

const handleItemToggled = (item) => {
  console.log('Todo toggled:', item)
}
</script>

<template>
  <TodoList
    storage-key="my-todos"
    :max-items="50"
    theme="light"
    @item-added="handleItemAdded"
    @item-toggled="handleItemToggled"
  />
</template>
```

## Local Storage

The TodoList component automatically saves todos to local storage using the specified `storageKey`. The data structure is:

```typescript
interface Todo {
  text: string
  completed: boolean
}
```

## Styling

The component comes with a modern, clean design out of the box. It supports both light and dark themes and is fully responsive.

### CSS Variables

You can customize the appearance by overriding these CSS variables:

```css
:root {
  --todo-primary-color: #1a237e;
  --todo-bg-color: #ffffff;
  --todo-text-color: #333333;
  --todo-border-radius: 10px;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT 
