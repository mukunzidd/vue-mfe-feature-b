# @mknz/vue-mfe-feature-b

A Vue 3 Todo List component designed as a micro-frontend feature. This package is part of the Vue MFE ecosystem and can be easily integrated into applications using the `@mknz/vue-mfe-wrapper`.

## Features

- Add, toggle, and remove todo items
- Dark and light theme support
- Fully typed with TypeScript
- Responsive design
- Clean and modern UI

## Installation

```sh
npm install @mknz/vue-mfe-feature-b
```

## Usage

1. First, import the feature in your wrapper application:

```ts
import { VueMfeFeatureB } from '@mknz/vue-mfe-feature-b'
import '@mknz/vue-mfe-feature-b/style.css'

// Add to your wrapper config
const config = {
  features: [VueMfeFeatureB]
}
```

2. Use the TodoList component:

```vue
<template>
  <TodoList theme="dark" />
</template>
```

### Props

- `theme` (optional): 'light' | 'dark' - Sets the visual theme of the todo list. Defaults to 'light'.

## Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test:unit

# Lint
npm run lint
```

## License

MIT
