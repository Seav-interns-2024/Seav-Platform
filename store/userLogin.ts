import { defineStore } from 'pinia';

export const useLoginStore = defineStore('loginStore', () => {
  const loginData = ref([])

  function addValueToFilterList(value: string) {
    loginData.value.push(value)
  }
  return {addValueToFilterList, loginData}  
})
