import { defineStore } from 'pinia'
import axios from 'axios';

const baseURL = 'http://localhost:3001/users';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // You can add common headers here
  },
});

export const useUserStore = defineStore("UserStore", {
    state: () => ({
        user:{}
    }),
    getters: {
        getUser(){
            return user
        },
    },
    actions: {
        async createUser(userName,userRole,email,password){
            const data = {userName,userRole,email,password }
            const result = await apiClient.post(baseURL, data)
            return result;
        },
    }
})