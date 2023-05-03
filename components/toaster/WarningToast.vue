<template>
  <div class="toast warning">
    <p>{{ data.id }} - {{ data.message }}</p>
    <slot/>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>