<template>
  <a class="panel-block break">
    <div class="mb-1">
      <span v-if="props.todo.completed">
        <s class="has-text-weight-light">{{ props.todo.title }}</s>
      </span>
      <span v-else class="has-text-weight-medium"> {{ props.todo.title }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});

</script>

<style scoped>
.break {
  word-break: break-word;
}
</style>
