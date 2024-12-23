import type { Feature } from '@mknz/vue-mfe-wrapper'
import TodoList from './components/TodoList.vue'

export const VueMfeFeatureB: Feature = {
  name: 'todo-list',
  components: {
    TodoList
  }
}

export { TodoList }
