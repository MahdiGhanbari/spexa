<template>
  <div id="hoem_page" class="h-100">

    <!-- there are many directories -->
    <div v-if="items.length" class="d-flex align-center">
      <div v-for="item of items" :key="item" class="d-inline-flex flex-column directory mx-2">
        <v-icon size="120" icon="folder"/>
        <v-menu offset="-4">
          <template #activator="{props}">
            <v-icon v-bind="props" class="directory__more">
              more_horiz
            </v-icon>
          </template>
  
          <v-card class="d-flex flex-column" >
            <v-btn size="x-small" variant="text" class="text-capitalize pl-1">
              <v-icon size="12" start icon="open_in_new"/>
              open
            </v-btn>
            <v-btn @click="show_confirm_dialog = true" size="x-small" variant="text" class="text-capitalize pl-1">
              <v-icon size="12" start>delete</v-icon>
              delete
            </v-btn>
          </v-card>
        </v-menu>
        
        <div class="font-weight-bold text-center mt-n5">
          {{ item }}
        </div>
      </div>
      <v-btn icon flat variant="text" size="x-large" class="mx-2">
        <v-icon size="58" icon="add"/>
      </v-btn>
    </div>

    <!-- there is nothing, create new directory -->
    <div v-else class="d-flex flex-column aling-center ma-auto">
      <span class="material-icons-outlined ">upcoming</span>
      <span>There is nothing to show</span>
      <v-btn block class="captialize">create directory</v-btn>
    </div>

    <!-- confirm delete action with dialog -->
    <v-dialog v-model="show_confirm_dialog" attach="#hoem_page" max-width="400" >
      <v-card class="pa-6" height="250" rounded="lg">
        <div class="text-h6 font-weight-black my-2">Delete Directory</div>
        <div class="flex-grow-1 d-flex align-center px-6">
          <span class="text-body-1 font-weight-medium">
            Are you sure want to delete 
            <span class="font-weight-black text-capitalize">{{ 'name' }}</span> 
            directory?
          </span>
        </div>
        <div class="px-6 d-flex justify-space-between">
          <v-btn @click="show_confirm_dialog = false" class="text-capitalize" variant="outlined" width="115" rounded="lg">Cancel</v-btn>
          <v-btn @click="deleteDirectory(DELETE_MESSAGE)" class="text-capitalize bg-black" variant="outlined" width="165" rounded="lg">Delete</v-btn>
        </div>
      </v-card>
    </v-dialog>
</div>
</template>

<script setup lang="ts">
  import { useUtilityStore } from '@/stores/index';
  import { ref } from 'vue';

  const DELETE_MESSAGE = 'Directory deleted successfully'

  const { openSnackbar } = useUtilityStore()

  const show_confirm_dialog = ref(false)
  const items = ref([
    'Company',
    'Arts',
    'Audio'
  ])

  function deleteDirectory(item: string) {
    openSnackbar(item)
    show_confirm_dialog.value = false
  }
</script>

<style scoped lang="scss">
.directory {
  position: relative;
  &__more {
    position: absolute;
    right: 0.6rem;
    top: 0.5rem;
    cursor: pointer;
  }
}
</style>
