# Vue MFE Feature B

[![npm version](https://img.shields.io/npm/v/@mknz/vue-mfe-feature-b)](https://www.npmjs.com/package/@mknz/vue-mfe-feature-b)

A Vue.js TodoList component for micro-frontend architecture, built with the `@mknz/vue-mfe-wrapper` framework.

## Features

- 📝 Persistent TodoList with local storage
- 🎨 Customizable storage key
- 🔄 Real-time updates
- 📱 Responsive design
- 🎯 Maximum items limit control

## Installation

```bash
npm install @mknz/vue-mfe-feature-b
```

## Usage with Vue MFE Wrapper

```vue
<template>
  <FrameworkWrapper :config="config">
    <!-- Feature B will be rendered here -->
  </FrameworkWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FrameworkWrapper } from '@mknz/vue-mfe-wrapper'
import type { WrapperConfig } from '@mknz/vue-mfe-wrapper'

const config = ref<WrapperConfig>({
  features: [
    {
      name: 'feature-b',
      props: {
        storageKey: 'my-todos',
        maxItems: 100
      }
    }
  ]
})
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `storageKey` | `string` | `'vue-mfe-todos'` | Key used for local storage |
| `maxItems` | `number` | `100` | Maximum number of todo items |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## License

MIT
