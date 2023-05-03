<template>
  <div class="popup">
    <slot/>

    <h1>Popup 2</h1>
    <p>{{ data.message }}</p>

    <div class="button-container">
      <button @click="data.cancelMethod()">Annuler</button>
      <button @click="data.validationMethod()">Valider</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>