<template>
  <main v-html="ghData"/>
</template>

<script setup>
import axios from 'axios'
import showdown from 'showdown'

const ghData = ref('')

onMounted(async () => {  
  const res = await axios.get('https://raw.githubusercontent.com/Amenokal/vue-composables/main/documentation/seo.md')
  const converter = new showdown.Converter()
  ghData.value = converter.makeHtml(res.data)
  console.log(ghData.value)
})
</script>