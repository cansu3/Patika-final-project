import { defineStore } from 'pinia';
import axios from 'axios';

const baseURL = 'http://localhost:3001/auth';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'},
});

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    access_token: null,
    username:null,
    email:null
  }),
  actions: {
    async signIn(email,password) {
      const data = {
        email : email,
        password : password
      }
        const result= await apiClient.post(baseURL+'/sign-in',data)
        console.log(result);
        if (result.status==200) {
            this.email=email;
            this.setAccessToken(result.data.access_token);
        }  
        return result; 
      },
    setAccessToken(token) {
      this.access_token = token;
    },
    async getProfile() {
      const result = await apiClient.get(baseURL+'/profile')
      return result ;
    },
    logout() {
      this.access_token = '';
    }
  },
});