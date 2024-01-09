<template>
  <main class="container my-5">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <article class="panel is-link">
          <p class="panel-heading">Todo</p>
          <p class="panel-tabs">
            <a
              v-for="(f, i) in filters"
              :key="i"
              @click="todosStore.filterTodo(i)"
              :class="{ 'is-active': i === todosStore.filter }"
              >{{ f }}</a
            >
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <TodoInput />
              <span class="icon is-left">
                <i class="fas fa-plus" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <TransitionGroup name="list">
            <TodoItem
              v-for="(todo, index) in filteredTodos"
              :key="todo.id"
              :todo="todo"
              :index="index"
            />
          </TransitionGroup>
        </article>
      </div>
    </div>
  </main>
  <FooterLayout />
</template>

<script setup lang="ts">
import TodoInput from '@/components/TodoInput.vue'
import { storeToRefs } from 'pinia'
import { useTodos } from '@/stores/todos'
import TodoItem from '@/components/TodoItem.vue'
import FooterLayout from '@/components/FooterLayout.vue'

// const TodoAll = defineAsyncComponent(() => import('@/components/TodoAll.vue'))
// const TodoCompleted = defineAsyncComponent(() => import('@/components/TodoCompleted.vue'))
// const TodoIncomplete = defineAsyncComponent(() => import('@/components/TodoIncomplete.vue'))

// defineOptions({
//   // TodoAll,
//   TodoCompleted,
//   TodoIncomplete
// })

const filters = {
  all: 'All',
  incomplete: 'Incomplete',
  completed: 'Completed'
}
const todosStore = useTodos()
const { filteredTodos } = storeToRefs(todosStore)

</script>
