<template>
  <form @submit.prevent="addTodo(inputValue)">
    <input
      class="input is-link"
      type="text"
      name="title"
      autofocus
      autocomplete="off"
      placeholder="Go buy something"
      v-model:="inputValue"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodos } from '@/stores/todos'

const todosStore = useTodos()

const inputValue = ref('')

// function addTodo() {
//   emit('todoAdded', inputValue.value)

//   console.log('addTodo')
// }

function addTodo(title: string) {
  if (!title || title.trim() === '') {
    return
  }
  todosStore.addTodo(title)
  // console.log('input: ', title)
  inputValue.value = ''
}
</script>
