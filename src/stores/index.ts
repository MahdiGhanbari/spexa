import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUtilityStore = defineStore('UtilityStore', {
  state: () => ({
    snackbar: {
      isOpen: false,
      text: ''
    }
  }),

  actions: {
    openSnackbar(text: string) {
      this.snackbar.isOpen = false
      this.snackbar.text = text
      this.snackbar.isOpen = true
    }
  }

})
