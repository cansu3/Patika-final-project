<template>
    <v-app-bar color="primary" flat>
      <v-app-bar-title>
        <div style="text-decoration:none; color:white">GreenDash</div>
      </v-app-bar-title>
      <v-row style="flex-direction:row; justify-content:flex-end;">
        
        <v-col style="max-width: 20%; flex-grow:0; padding: 1%">
          <v-btn style="text-transform: none; background-color:white" @click="redirectToSignIn" >
            <v-icon>mdi-account</v-icon>
            Sign-in
          </v-btn>
        </v-col>
        <v-col style="max-width: 20%; flex-grow:0;  padding: 1%; margin-right:2%">
          <v-btn style="text-transform: none; background-color:white" @click="redirectToSignUp">
            <v-icon>mdi-account-plus</v-icon>
            Sign-up
          </v-btn>
        </v-col>
        
        
      </v-row>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      redirectToSignUp() {
        this.$router.push({ name: 'Sign-up' });
      },
  
      redirectToSignIn() {
        // this.$router.push({ name: 'Sign-in', params: { id: id } });
        this.$router.push({ name: 'Sign-in' });
      }
    }
  }
  </script>