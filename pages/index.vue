<template>
  <div id="app">
    <header>
      <img src="https://www.webmakers.dev/wp-content/themes/webmakerstheme/src/img/Logo-Webmakers.svg"/>
    </header>
    
    <section class="container">
      <h3>Concepts</h3>
      <div>
        <h2><NuxtLink class="hide" to="/concept/composable">Composable</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/concept/middleware">Middleware</NuxtLink></h2>
      </div>
    </section>
    <section class="container">
      <h3>Composables</h3>
      <div>
        <h2><NuxtLink class="hide" to="/composable/requests">Requêtes</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/composable/popups">Popups</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/composable/toaster">Toaster</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/composable/transitions">Transitions</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/composable/forms">Formulaires</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/composable/strapi">Strapi</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/composable/locale">Locale</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/composable/pagination">Pagination</NuxtLink></h2>
        <h2><NuxtLink class="hide" to="/composable/seo">SEO</NuxtLink></h2>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: "home" })

onMounted(() => linkAnimation())

function linkAnimation() {
  const links = document.querySelectorAll('a')
  Array.from(links).forEach((link, i) => {
    setTimeout(() => link.classList.remove('hide'), i * 200)
  })
}
</script>

<style lang="scss" scoped>
header {
  opacity: 0;
  transform: scale(.8);
  animation: fadeIn 2s forwards;
}

a {
  opacity: 1;
  transform: translateY(0rem) !important;
  transition: .3s;
}
a.hide {
  opacity: 0;
  transform: translateY(1rem);
  &::before {
    opacity: 0;
    transform: translateY(1rem) !important;

  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(.9);}
  to { opacity: 1; transform: scale(1.4);}
}
</style>