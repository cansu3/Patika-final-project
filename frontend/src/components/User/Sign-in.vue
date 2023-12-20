<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent style="padding: 1em; border: 0.5px solid #f29b8d;">
      <v-text-field v-model="email" color="secondary" label="Email" placeholder="Enter your email address"
        :rules="[value => !!value || 'Email is required', value => /.+@.+\..+/.test(value) || 'Invalid email']"
        variant="underlined" name="input-10-1"></v-text-field>

      <v-text-field v-model="password" color="secondary" label="Password" placeholder="Enter your password"
        :rules="passwordRules" variant="underlined" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'" name="input-10-1" counter @click:append="show = !show"></v-text-field>

      <v-checkbox v-model="rememberMe" color="secondary" label="Remember me"></v-checkbox>

      <v-btn variant="flat" color="primary" type="submit" block class="mt-2" @click="signIn(email, password)">Sign in</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { useAuthStore } from '@/store/auth.js';
const authStore = useAuthStore();
export default {
  data: () => ({
    rememberMe: null,
    email: null,
    password: null,
    show: false,
    passwordRules: [
      value => !!value || 'Password is required',
      value => value.length >= 8 || 'Password must be at least 8 characters',
      value => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
      value => /\d/.test(value) || 'Password must contain at least one numeric character',
    ]
  }),
  methods: {
    async signIn(email, password) {
      const result = await authStore.signIn(email, password);
      if (result.status == 200) {
        this.$router.push({ name: 'Home' });
      }
    }
  }
}
</script>
