<template>
  <v-app>
    <component :is="layout"/>
    <v-snackbar v-model="snackbar.isOpen"  color="black" close-on-content-click >
      <div class="text-center">
        {{ snackbar.text }}
      </div>

    </v-snackbar>
  </v-app>
</template>

<script setup lang="ts">
import { useUtilityStore } from '@/stores/index';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/default.vue';
import LandingLayout from '@/layouts/landing.vue';

const route = useRoute()
const {snackbar} = useUtilityStore()

const layout = computed(()=> {
  const layouts = new Map<string, object>()
  layouts.set('DefaultLayout', DefaultLayout)
  layouts.set('LandingLayout', LandingLayout)
  
  const name: any = route.meta?.layout || 'DefaultLayout'

  return layouts.get(name)
})

</script>
