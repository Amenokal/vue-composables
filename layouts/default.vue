<template>
  <div class="app-layout">
    <header>
      <img @click="$router.push('/')" src="https://www.webmakers.dev/wp-content/themes/webmakerstheme/src/img/Logo-Webmakers.svg"/>
      <h3>CONCEPTS</h3>
      <NuxtLink to="/concept/composable">Composables</NuxtLink>
      <NuxtLink to="/concept/middleware">Middlewares</NuxtLink>

      <h3>COMPOSABLES</h3>
      <NuxtLink to="/composable/requests">Requêtes</NuxtLink>
      <slot name="requestChapters"/>
      <NuxtLink to="/composable/popups">Popups</NuxtLink>
      <slot name="popupChapters"/>
      <NuxtLink to="/composable/toaster">Toaster</NuxtLink>
      <slot name="toasterChapters"/>
      <NuxtLink to="/composable/transitions">Transitions</NuxtLink>
      <slot name="transitionChapters"/>
      <NuxtLink to="/composable/forms">Formulaires</NuxtLink>
      <slot name="formChapters"/>
      <NuxtLink to="/composable/strapi">Strapi</NuxtLink>
      <slot name="strapiChapters"/>
      <NuxtLink to="/composable/locale">Locale</NuxtLink>
      <slot name="localeChapters"/>
      <NuxtLink to="/composable/pagination">Pagination</NuxtLink>
      <slot name="paginationChapters"/>
      <NuxtLink to="/composable/seo">SEO</NuxtLink>
      <slot name="seoChapters"/>
    </header>

    <slot/>
  </div>
</template>