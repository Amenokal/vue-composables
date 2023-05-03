<template>
  <main>
    <h1>POPUPS</h1>
    <h2>usePopup()</h2>
    <button @click="openPopup('Popup1')">Popup 1</button>
    <button @click="handleOpenPopup2">Popup 2</button>
  </main>
</template>

<script setup>
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