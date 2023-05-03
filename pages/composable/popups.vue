<template>
  <div>
    <h2>Démo</h2>
    <button @click="openPopup('Popup1')">Popup 1</button>
    <button @click="handleOpenPopup2">Popup 2</button>
  </div>
  
  <main v-html="data"/>
</template>

<script setup>
import axios from 'axios'
import showdown from 'showdown'
const converter = new showdown.Converter()

const data = ref('')

onMounted(async () => {  
  const res = await axios.get('https://raw.githubusercontent.com/Amenokal/vue-composables/main/documentation/toaster.md')
  data.value = converter.makeHtml(res.data)
})

const { openPopup, closePopup, popupInfo } = usePopup()
function handleOpenPopup2() {
  const message = 'Message passé la méthode openPopup()'

  const validationMethod = () => {
    console.info('Validé !')
    closePopup()
  }
  const cancelMethod = () => {
    console.info('Annulé')
    closePopup()
  }

  openPopup('Popup2', { message, validationMethod, cancelMethod } )

  popupInfo()
}
</script>