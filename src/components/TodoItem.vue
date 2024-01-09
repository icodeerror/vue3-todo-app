<template>
  <a
    class="panel-block is-justify-content-space-between"
    @click="todosStore.markComplete(props.index)"
    @click.right.prevent="deleteTodo(props.index)"
  >
    <div class="mb-1 container">
      <span v-if="props.todo.completed">
        <s class="has-text-weight-light">{{ props.todo.title }}</s>
      </span>
      <span v-else class="has-text-weight-medium"> {{ props.todo.title }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { useTodos } from '@/stores/todos'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const todosStore = useTodos()

function deleteTodo(index: number) {
  todosStore.deleteTodo(index)
  // console.log('called: ', index)
}

// const emit = defineEmits(['isCompleted'])

// function markAsCompleted() {
//   emit('isCompleted')
//   console.log('emitted')
// }
</script>
