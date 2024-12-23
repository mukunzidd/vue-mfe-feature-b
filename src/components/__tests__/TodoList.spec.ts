/// <reference types="vitest/globals" />
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'

describe('TodoList', () => {
  const localStorageMock = {
    store: {} as Record<string, string>,
    getItem: vi.fn((key: string) => localStorageMock.store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      localStorageMock.store[key] = value.toString()
    }),
    clear: vi.fn(() => {
      localStorageMock.store = {}
    })
  }

  beforeEach(() => {
    vi.stubGlobal('localStorage', localStorageMock)
    localStorageMock.clear()
  })

  it('renders properly with default props', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.find('.todo-list').exists()).toBe(true)
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('button').text()).toContain('Add')
  })

  it('adds and removes todos', async () => {
    const wrapper = mount(TodoList)
    const input = wrapper.find('input[type="text"]')
    const addButton = wrapper.find('button')

    // Add a todo
    await input.setValue('Test todo')
    await addButton.trigger('click')

    // Verify todo was added
    let todos = wrapper.findAll('.todo-item')
    expect(todos).toHaveLength(1)
    expect(todos[0].text()).toContain('Test todo')

    // Remove the todo
    const removeButton = wrapper.find('.remove-todo')
    await removeButton.trigger('click')

    // Verify todo was removed
    todos = wrapper.findAll('.todo-item')
    expect(todos).toHaveLength(0)
  })

  it('persists todos in localStorage', async () => {
    const storageKey = 'test-todos'
    const wrapper = mount(TodoList, {
      props: {
        storageKey
      }
    })

    // Add a todo
    const input = wrapper.find('input[type="text"]')
    const addButton = wrapper.find('button')
    await input.setValue('Persistent todo')
    await addButton.trigger('click')

    // Verify localStorage was updated
    expect(localStorageMock.setItem).toHaveBeenCalled()
    const storedData = JSON.parse(localStorageMock.getItem(storageKey) || '{}')
    expect(storedData.todos).toHaveLength(1)
    expect(storedData.todos[0].text).toBe('Persistent todo')
    expect(storedData.nextId).toBe(2)
  })

  it('respects maxItems prop', async () => {
    const wrapper = mount(TodoList, {
      props: {
        maxItems: 2
      }
    })

    const input = wrapper.find('input[type="text"]')
    const addButton = wrapper.find('button')

    // Add three todos
    await input.setValue('Todo 1')
    await addButton.trigger('click')
    await input.setValue('Todo 2')
    await addButton.trigger('click')
    await input.setValue('Todo 3')
    await addButton.trigger('click')

    // Should only have 2 todos
    const todos = wrapper.findAll('.todo-item')
    expect(todos).toHaveLength(2)

    // Should show error message
    expect(wrapper.text()).toContain('Maximum items reached')
  })
})
