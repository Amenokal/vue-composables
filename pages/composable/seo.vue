<template>
  <main v-html="data"/>
</template>

<script setup>
import axios from 'axios'
import showdown from 'showdown'

const data = ref('')

onMounted(async () => {  
  const res = await axios.get('https://raw.githubusercontent.com/Amenokal/vue-composables/main/documentation/seo.md')
  const converter = new showdown.Converter()
  data.value = converter.makeHtml(res.data)
})
</script>