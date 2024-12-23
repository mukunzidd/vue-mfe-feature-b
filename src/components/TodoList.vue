<template>
  <div class="todo-list" :class="theme">
    <h2>Todo List</h2>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    <div class="add-todo">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="Add a new todo"
        type="text"
      >
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <input 
          type="checkbox" 
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        >
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)" class="remove-todo">×</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default defineComponent({
  name: 'TodoList',
  
  props: {
    theme: {
      type: String as () => 'light' | 'dark',
      default: 'light'
    },
    storageKey: {
      type: String,
      default: 'vue-mfe-todos'
    },
    maxItems: {
      type: Number,
      default: 100
    }
  },

  data() {
    return {
      todos: [] as Todo[],
      newTodo: '',
      nextId: 1,
      errorMessage: ''
    }
  },

  created() {
    this.loadTodos()
  },

  methods: {
    loadTodos() {
      const stored = localStorage.getItem(this.storageKey)
      if (stored) {
        const data = JSON.parse(stored)
        this.todos = data.todos
        this.nextId = data.nextId
      }
    },

    saveTodos() {
      localStorage.setItem(this.storageKey, JSON.stringify({
        todos: this.todos,
        nextId: this.nextId
      }))
    },

    addTodo() {
      if (this.todos.length >= this.maxItems) {
        this.errorMessage = 'Maximum items reached'
        return
      }

      if (this.newTodo.trim()) {
        this.todos.push({
          id: this.nextId++,
          text: this.newTodo.trim(),
          completed: false
        })
        this.newTodo = ''
        this.errorMessage = ''
        this.saveTodos()
      }
    },

    toggleTodo(id: number) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
        this.saveTodos()
      }
    },

    removeTodo(id: number) {
      const index = this.todos.findIndex(t => t.id === id)
      if (index !== -1) {
        this.todos.splice(index, 1)
        this.saveTodos()
      }
    }
  }
})
</script>

<style scoped>
.todo-list {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.todo-list.dark {
  background-color: #2c3e50;
  color: white;
}

.todo-list.light {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.error-message {
  color: #e74c3c;
  margin-bottom: 10px;
  text-align: center;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.add-todo {
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

ul {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  gap: 10px;
}

.completed {
  text-decoration: line-through;
  opacity: 0.7;
}

.remove-todo {
  background-color: #e74c3c;
  padding: 4px 8px;
  margin-left: auto;
}

.remove-todo:hover {
  background-color: #c0392b;
}
</style>
