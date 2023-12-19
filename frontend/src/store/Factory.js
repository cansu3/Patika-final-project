import { defineStore } from 'pinia'
import axios from 'axios';

import { useAuthStore } from '@/store/auth.js';
const authStore = useAuthStore();

const baseURL = 'http://localhost:3001/factories';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+authStore.access_token
    // You can add common headers here
  },
});


export const useFactoryStore = defineStore("factoryStore", {
    state: () => ({
        factory: [],
        loading: false
    }),
    getters: {
        favs(){
            return this.factory.filter(factory => factory.isFreeMember)
        },
        favCount(){
            return this.factory.reduce((previous, current) => {
                return current.isFreeMember ? previous + 1 : previous
            }, 0)
        },
        totalCount: (state) =>{
            return state.factory.length
        },
        getFactories: (state) =>{
            return state.factory
        }
    },
    actions: {
        async fetchFactories(){
            this.loading = true
            const result = await apiClient.get(baseURL)
            
            const data = await result.data
            this.factory = data
            this.loading = false
        },
        
          async getFactory(id) {
        
            const result = await apiClient.get(baseURL+'/'+id)
            return result ;
          },
        
          async updateFactory(id,factory) {
         
            const result = await apiClient.patch(baseURL+'/'+id, factory)
            return result ;
          },
    }
})