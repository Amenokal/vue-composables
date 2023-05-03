<template>
  <div class="toast validation">
    <p>{{ data.id }} - {{ data.message }}</p>
    <slot/>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>