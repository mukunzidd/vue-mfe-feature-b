<template>
  <div class="todo-container">
    <h1 class="title">To-Do List 📝</h1>
    
    <div class="input-container">
      <input 
        type="text" 
        v-model="newTodo" 
        placeholder="Add your text"
        @keyup.enter="addTodo"
        class="todo-input"
      >
      <button @click="addTodo" class="add-button">Add</button>
    </div>

    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <div class="todo-checkbox">
          <input 
            type="checkbox" 
            :checked="todo.completed"
            @change="toggleTodo(index)"
            class="checkbox"
          >
          <span :class="{ completed: todo.completed }" class="todo-text">{{ todo.text }}</span>
        </div>
        <button @click="removeTodo(index)" class="remove-button">×</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const todos = ref<{ text: string; completed: boolean }[]>([])
const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value.trim(), completed: false })
    newTodo.value = ''
  }
}

const removeTodo = (index: number) => {
  todos.value.splice(index, 1)
}

const toggleTodo = (index: number) => {
  todos.value[index].completed = !todos.value[index].completed
}

// Load todos from localStorage
onMounted(() => {
  const savedTodos = localStorage.getItem('todos')
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos)
  }
})

// Save todos to localStorage whenever they change
watch(todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos))
}, { deep: true })
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  color: #1a237e;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.input-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.todo-input {
  flex: 1;
  padding: 1rem;
  border: none;
  background: #f0f2f5;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.todo-input:focus {
  box-shadow: 0 0 0 2px rgba(26, 35, 126, 0.2);
}

.add-button {
  padding: 0.5rem 2rem;
  background: #ff5252;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-button:hover {
  background: #ff1744;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.todo-item:hover {
  background: #f0f2f5;
}

.todo-checkbox {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-text {
  font-size: 1rem;
  color: #333;
}

.todo-text.completed {
  text-decoration: line-through;
  color: #999;
}

.remove-button {
  background: none;
  border: none;
  color: #999;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.remove-button:hover {
  color: #ff1744;
  background: rgba(255, 23, 68, 0.1);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .todo-container {
    background: #1a1a1a;
  }

  .title {
    color: #fff;
  }

  .todo-input {
    background: #2d2d2d;
    color: #fff;
  }

  .todo-item {
    background: #2d2d2d;
  }

  .todo-item:hover {
    background: #363636;
  }

  .todo-text {
    color: #fff;
  }

  .todo-text.completed {
    color: #666;
  }
}
</style>
