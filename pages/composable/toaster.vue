<template>
  <main>
    <h1>TOASTER</h1>
    <h2>useToaster()</h2>

    <button @click="newToast('validation', { message: 'Succès !'})">Nouveau toast "validation"</button>
    <button @click="newToast('warning', { message: 'Oups...'})">Nouveau toast "warning"</button>
  </main>
</template>

<script setup>
const { newToast } = useToaster()
</script>