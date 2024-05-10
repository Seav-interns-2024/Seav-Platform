import { defineStore } from 'pinia';

export const useAdminStore = defineStore('adminStore', () => {
  const loginData = ref([])

  function addValueToFilterList(value: string) {
    loginData.value.push(value)
  }
  return {addValueToFilterList, loginData}  
})
