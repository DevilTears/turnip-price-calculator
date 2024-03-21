import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const usePricesStore = defineStore('prices', () => {
  const buyPrice = ref('')
  const sellPrice = reactive([['', ''],['', ''],['', ''], ['', ''],['', ''], ['', '']])

  return { buyPrice, sellPrice }
})