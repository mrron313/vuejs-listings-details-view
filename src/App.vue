<template>
    <a-layout :style="{ minHeight: '100vh', height : '100%', }">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', color: '#fff' }">
        <router-link to="/"><h3 :style="{  fontSize: '22px', color: '#fff' }">App Title</h3></router-link>
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
