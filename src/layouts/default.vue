<template>
	<v-app-bar fixed light flat class="px-5 app-bar">
    <v-btn elevation="1" variant="outlined" width="120" class="text-capitalize">Logout</v-btn>
    <div class="mx-4">email</div>
  </v-app-bar>
  <v-main class="main">
    <v-breadcrumbs :items="items">
      <template v-slot:prepend>
        <span class="material-icons">
          home
        </span>
      </template>
    </v-breadcrumbs>
    <router-view/>
  </v-main>
</template>

<script setup lang="ts">
  import { watch } from 'vue';
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  watch(route, ()=> {
    console.log(route)
  })
  const items = [
        {
          title: 'home',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          title: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          title: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ]
    
</script>

<style scoped>
.app-bar {
  z-index: 10000 !important;
}
</style>