<template>
  <article class="message is-warning mb-2">
    <div class="message-header">
      <p>How to use</p>
      <button class="delete" aria-label="delete" @click="hide"></button>
    </div>
    <div class="message-body content is-small">
      <ul>
        <li>Fill in the empty field, then hit enter to add a new todo.</li>
        <li>Click on 'All', 'Incomplete', 'Completed' to filter the list.</li>
        <li>Click on the item to mark as completed.</li>
        <li>Right click on the item to delete.</li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
const emit = defineEmits({
  hidden: String
});

function hide() {
  emit('hidden');
}
</script>
