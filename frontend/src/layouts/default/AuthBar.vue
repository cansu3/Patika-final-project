<template>
    <v-app-bar color="primary" flat>
      <v-app-bar-title>
        <a href="/" style="text-decoration:none; color:white">GreenDash</a>
      </v-app-bar-title>
      <v-row style="flex-direction:row; justify-content:flex-end;">
        
        <v-col style="max-width: 20%; flex-grow:0; padding: 1%">
          <v-btn style="text-transform: none; background-color:white"  >
            <v-icon>mdi-account</v-icon>
            Sign-in
          </v-btn>
        </v-col>
        <v-col style="max-width: 20%; flex-grow:0;  padding: 1%; margin-right:2%">
          <v-btn style="text-transform: none; background-color:white">
            <v-icon>mdi-account-plus</v-icon>
            Sign-up
          </v-btn>
        </v-col>
        
        
      </v-row>
    </v-app-bar>
  </template>
  
  <script setup>
    //
  </script>