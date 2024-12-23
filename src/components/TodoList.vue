<template>
  <div class="todo-list" :class="theme">
    <h2>Todo List</h2>
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
      <li v-for="todo in todos" :key="todo.id">
        <input 
          type="checkbox" 
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        >
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)" class="delete">×</button>
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
    }
  },

  data() {
    return {
      todos: [] as Todo[],
      newTodo: '',
      nextId: 1
    }
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: this.nextId++,
          text: this.newTodo.trim(),
          completed: false
        })
        this.newTodo = ''
      }
    },

    toggleTodo(id: number) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    removeTodo(id: number) {
      const index = this.todos.findIndex(t => t.id === id)
      if (index !== -1) {
        this.todos.splice(index, 1)
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

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
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

li {
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

input[type="checkbox"] {
  margin-right: 10px;
}

span {
  flex: 1;
}

.delete {
  padding: 4px 8px;
  background-color: #e74c3c;
  margin-left: 10px;
}

.delete:hover {
  background-color: #c0392b;
}

.dark input[type="text"] {
  background-color: #34495e;
  color: white;
  border-color: #2c3e50;
}

.light input[type="text"] {
  background-color: white;
  color: #2c3e50;
  border-color: #bdc3c7;
}
</style>
