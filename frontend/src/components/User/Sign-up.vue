<template>
  <v-card style="padding: 1em; border: 0.5px solid #f29b8d;"
    class="mx-auto"
    max-width="344"
    title="User Registration"
  >
    <v-container>
      <v-text-field
        v-model="userName"
        color="secondary"
        label="User Name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="userRole"
        color="secondary"
        label="User Role"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="secondary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
      v-model="password"
      color="secondary"
      label="Password"
      variant="underlined"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      name="input-10-1"
      counter
      @click:append="show = !show"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="primary" @click="signUp(userName,userRole,email,password)">
        Sign up

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useUserStore } from '@/store/User.js';
const userStore = useUserStore();
import { useAuthStore } from '@/store/auth.js';
const authStore = useAuthStore();

  export default {
    data: () => ({
      userName: null,
      userRole: null,
      email: null,
      password: null,
      terms: false,
      show: false,
    }),
    methods: {
    async signUp (userName,userRole,email,password) {
     const result = await userStore.createUser(userName,userRole,email,password)
     if (result.status==201) {
      
      this.$router.push({ name: 'Sign-in' });
      }  
     }
    }
  }

</script>