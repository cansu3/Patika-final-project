<template>
  <v-container fluid fill-height >
    <!-- Center the content vertically -->
    <v-row style="margin: 3%;">
      <!-- Your Logo component goes here -->
      <v-col>
        <v-row class="align-center"><Logo /></v-row>
        <v-row class="align-center"></v-row>
        
      </v-col>

      <!-- Your SignUp component goes here -->
      <v-col>
        <v-row class="align-center"></v-row>
        <v-row class="align-center"><SignUp /></v-row>
        <v-row class="align-end"></v-row>
        
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
    import SignUp from '@/components/User/Sign-up.vue'
    import Logo from '@/components/shared/Logo.vue'
  
  export default {
    components: {
      Logo:Logo,
      SignUp:SignUp
    },
    setup(){
      return { }
    }
  }
</script>