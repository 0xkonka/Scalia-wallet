<template>
    <div>
      <h1>Welcome to My Extension</h1>
      <p v-if="scaliaDetected">Scalia will be here</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Home',
    setup() {
      const scaliaDetected = ref(false);
  
      // Logic to detect .scalia TLD
      // You can use chrome.webRequest API here to detect requests to .scalia TLD
  
      return {
        scaliaDetected,
      };
    },
  });
  </script>