<!-- <template>
  <div class="container">
    <img src="./assets/Chrome-Logo.png" alt="logo" />
  </div>
</template>

<style lang="less">
.container {
  background: #ff0;
}
</style> -->

<template>
  <ion-app>
    <ion-router>
      <ion-route path="/" component="home"></ion-route>
    </ion-router>
    <ion-nav />
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>