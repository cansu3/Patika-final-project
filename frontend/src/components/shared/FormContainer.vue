<template>
    <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent>
            <slot name="centerForm" />
            <slot name="footer" />
        </v-form>
    </v-sheet>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  </style>