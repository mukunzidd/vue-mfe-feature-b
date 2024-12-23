# Vue MFE Feature B

[![npm version](https://img.shields.io/npm/v/@mknz/vue-mfe-feature-b)](https://www.npmjs.com/package/@mknz/vue-mfe-feature-b)
[![Tests](https://img.shields.io/badge/tests-4%20passing-brightgreen)](https://github.com/mukunzidd/vue-mfe-feature-b/actions)

A Vue.js TodoList component for micro-frontend architecture, built with the `@mknz/vue-mfe-wrapper` framework.

## Features

- 📝 Persistent TodoList with local storage
- 🎨 Light/Dark theme support
- 🔄 Real-time updates
- 📱 Responsive design
- 🎯 Maximum items limit control
- ✨ Clean and modern UI

## Installation

```bash
npm install @mknz/vue-mfe-feature-b @mknz/vue-mfe-wrapper
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
import { VueMfeFeatureB, TodoList } from './features'
import type { WrapperConfig } from '@mknz/vue-mfe-wrapper'

const config = ref<WrapperConfig>({
  features: [
    {
      name: 'feature-b',
      props: {
        theme: 'dark',
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
| `theme` | `'light' \| 'dark'` | `'light'` | Visual theme of the todo list |
| `storageKey` | `string` | `'vue-mfe-todos'` | Key used for local storage |
| `maxItems` | `number` | `100` | Maximum number of todo items |

## Features in Detail

### Local Storage Persistence
- Todos are automatically saved to localStorage
- Persists across page reloads
- Custom storage key support

### Theme Support
- Light theme for bright environments
- Dark theme for reduced eye strain
- Seamless theme switching

### Maximum Items Control
- Configurable maximum items limit
- Clear error messaging when limit is reached
- Prevents overloading the UI

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests (4 passing)
npm run test
```

## Testing Coverage

The component is thoroughly tested with 4 test suites:
1. Basic rendering and props validation
2. Todo addition and removal functionality
3. Local storage persistence
4. Maximum items limit enforcement

## License

MIT
