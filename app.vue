<template>
  <NuxtLayout>
    <div :key="refresh">
      <NuxtPage :transition="pageTransition"/>
    </div>
    
    <PopupTemplate/>
    <ToasterTemplate/>
  </NuxtLayout>
</template>

<script setup>
import useTransition from '@/composables/useTransition'
const { pageTransition, refresh } = useTransition()
</script>