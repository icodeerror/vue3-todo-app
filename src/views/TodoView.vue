<template>
  <section class="container my-5">
    <div class="columns is-centered">
      <div class="column is-half">
        <article class="panel is-link ">
          <p class="panel-heading">
            Vue 3 Simple Todo App
            <span class="is-pulled-right is-clickable" v-if="!isMessageShown" @click="hideMessage">
              <i class="fa fa-info-circle"></i>
            </span>
          </p>
          <Transition name="bounce">
            <HelpMessage v-if="isMessageShown" @hidden="hideMessage" />
          </Transition>
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
                v-for="todo in filteredTodos"
                :key="todo.id"
                :todo="todo"
                @click="todosStore.markComplete(todo)"
                @click.right.prevent="todosStore.deleteTodo(todo)"
            />
            <!--  -->
          </TransitionGroup>
        </article>
      </div>
    </div>
  </section>
  <FooterLayout />
</template>

<script setup lang="ts">
import TodoInput from '@/components/TodoInput.vue';
import { storeToRefs } from 'pinia';
import { useTodos } from '@/stores/todos';
import TodoItem from '@/components/TodoItem.vue';
import HelpMessage from '@/components/HelpMessage.vue';
import FooterLayout from '@/components/FooterLayout.vue';
import { ref } from 'vue';

// const TodoAll = defineAsyncComponent(() => import('@/components/TodoAll.vue'))
// const TodoCompleted = defineAsyncComponent(() => import('@/components/TodoCompleted.vue'))
// const TodoIncomplete = defineAsyncComponent(() => import('@/components/TodoIncomplete.vue'))

// defineOptions({
//   // TodoAll,
//   TodoCompleted,
//   TodoIncomplete
// })

const isMessageShown = ref(true);

function hideMessage() {
  isMessageShown.value = !isMessageShown.value;
}

const filters = {
  all: 'All',
  incomplete: 'Incomplete',
  completed: 'Completed'
};
const todosStore = useTodos();
const { filteredTodos } = storeToRefs(todosStore);
</script>
