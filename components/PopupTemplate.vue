<template>
  <Transition name="popup">
    <aside class="popup-container" v-if="popupIsOpen">
      <component :is="popup.component" :data="popup.data">
        <button @click="closePopup" class="close-popup-btn">X</button>
      </component>
    </aside>
  </Transition>
</template>

<script setup>
const { popup, popupIsOpen, closePopup } = usePopup()
</script>