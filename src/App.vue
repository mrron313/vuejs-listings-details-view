<script setup>
  import HomeView from './views/Home.vue';
</script>

<template>
    <a-layout :style="{ minHeight: '100vh', height : '100%', }">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        App Title
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px',  background: '#fff', height: '100%',}">
        <div :style="{ padding: '24px', }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Developed By Arif 
      </a-layout-footer>
    </a-layout>
</template>
