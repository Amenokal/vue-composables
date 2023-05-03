<template>
  <main>
    <h1>PAGINATION</h1>
    <h2>usePagination()</h2>

    <button @click="previousPage()">Page précédente</button>
    <button @click="nextPage()">Page suivante</button>
    
    <p>{{ page }}</p>
    <p>{{pageIndex}} / {{ totalPages }}</p>
  </main>
</template>

<script setup>
const data = ref(Array(78).fill(0).map((n, i) => i))
const { page, totalPages, pageIndex, previousPage, nextPage, pageInfo } = usePagination(data.value, 5)
pageInfo()
</script>