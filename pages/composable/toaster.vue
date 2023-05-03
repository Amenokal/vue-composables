<template>
  <main>
    <h2>Démo</h2>
    <button @click="newToast('validation', { message: 'Succès !'})">Nouveau toast "validation"</button>
    <button @click="newToast('warning', { message: 'Oups...'})">Nouveau toast "warning"</button>

    <div v-html="data"/>
  </main>
</template>

<script setup>
import axios from 'axios'
import showdown from 'showdown'
const converter = new showdown.Converter()

const { newToast } = useToaster()
const data = ref('')

onMounted(async () => {  
  const res = await axios.get('https://raw.githubusercontent.com/Amenokal/vue-composables/main/documentation/toaster.md')
  data.value = converter.makeHtml(res.data)
})
</script>