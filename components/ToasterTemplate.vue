<template>
  <Transition name="toaster">
    <aside class="toaster-container">
      <TransitionGroup name="toasts">
        <component v-for="toast in toaster" :key="toast.id" :is="toast.component" :data="toast.data">
          <button @click="toast.deleteToast(toast.data)" class="close-toast-btn">X</button>
        </component>
      </TransitionGroup>
    </aside>
  </Transition>
</template>

<script setup>
const { toaster } = useToaster()
</script>