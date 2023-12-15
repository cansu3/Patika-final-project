<template>
    <Logo />
    <SignIn />
   
    
</template>
  
<script>
    import SignIn from '@/components/User/Sign-in.vue'
    import Logo from '@/components/shared/Logo.vue'
  
  export default {
    components: {
      Logo:Logo,
      SignIn:SignIn
    },
    setup(){
      return { }
    }
  }
</script>