<template>
  <v-app-bar color="primary" flat>
    <v-app-bar-title>
      <div style="text-decoration:none; color:white" @click="redirectToHome">GreenDash</div>
    </v-app-bar-title>
    <v-row style="flex-direction:row; justify-content:flex-end;">
        

      <v-col style="max-width: 20%; flex-grow:0; padding: 1%">
        <v-btn style="text-transform: none; background-color:white" >
          <v-icon>mdi-account</v-icon>
          Username
        </v-btn>
      </v-col>

      <v-col style="max-width: 20%; flex-grow:0; padding: 1%">
        <v-btn style="text-transform: none; background-color:white" @click="redirectToSignIn" >
         
          Logout
        </v-btn>
      </v-col>

      
    </v-row>
  </v-app-bar>
</template>


<script>
import { useAuthStore } from '@/store/auth.js';
const authStore = useAuthStore();
  export default {
    methods: {
      redirectToHome() {
        // Pinia store'u kullanarak sayfa yönlendirme metodunu çağır
        this.$router.push({ name: 'Home' });
      },
      redirectToSignIn() {
        // Pinia store'u kullanarak sayfa yönlendirme metodunu çağır
        //authStore.logout();
        this.$router.push({ name: 'Sign-in' });
      },
    }
  }
  </script>
