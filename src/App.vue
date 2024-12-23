<template>
  <FrameworkWrapper :config="config">
    <template #header>
      <header class="header">
        <h1>Vue MFE Project</h1>
      </header>
    </template>

    <div class="content">
      <TodoList theme="dark" />
    </div>

    <template #footer>
      <footer class="footer">
        <p>&copy; 2024 Vue MFE Project</p>
      </footer>
    </template>
  </FrameworkWrapper>
</template>

<script setup lang="ts">
import { FrameworkWrapper } from '@mknz/vue-mfe-wrapper'
import type { FrameworkConfig } from '@mknz/vue-mfe-wrapper'
import TodoList from './components/TodoList.vue'

const config: FrameworkConfig = {
  features: []
}
</script>

<style scoped>
.header {
  padding: 1rem;
  background-color: #42b883;
  color: white;
}

.content {
  padding: 1rem;
}

.footer {
  padding: 1rem;
  background-color: #35495e;
  color: white;
  text-align: center;
}
</style>