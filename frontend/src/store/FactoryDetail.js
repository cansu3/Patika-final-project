import { defineStore } from 'pinia'
import axios from 'axios';

import { useAuthStore } from '@/store/auth.js';
const authStore = useAuthStore();

const baseURL = 'http://localhost:3001/factory-details';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+authStore.access_token
    // You can add common headers here
  }
})
export const useFactoryDetailStore = defineStore("factoryDetailStore", {
    state: () => ({
        factoryDetail: [],
        loading: false,
    }),
    getters: {
        getFactoryDetails: (state) =>{
            return state.factoryDetail
        }
    },
    actions: {
        async fetchFactoryDetails(id) {
            this.loading=true;
            const result = await apiClient.get(baseURL+'/'+id)
                        
            const data =  result.data
            console.log(data)
            this.factoryDetail = data
            this.loading = false
        
          },
        
          async getFactoryDetail(factorId,id) {
        
            const result = await apiClient.get(baseURL+'/'+factorId+'/detail/'+id)
            return result ;
          },
        
          async updateFactoryDetail(factorId,id,factoryDetail) {
         
            const result = await apiClient.patch(baseURL+'/'+factorId+'/detail/'+id, factoryDetail)
            return result ;
          }
    }
})