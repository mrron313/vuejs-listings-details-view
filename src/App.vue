<template>
    <a-layout :style="{ minHeight: '100vh', height : '100%', }">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', color: '#fff' }">
        <router-link to="/"><h3 :style="{  fontSize: '22px', color: '#fff' }">App Title</h3></router-link>
        <a-col :span="4" :order="2">
          <a-select
            ref="select"
            style="width: 100%"
            placeholder="Municipality"
            v-model="store.lng"
            @change="handleLanguageChange"
          >
            <a-select-option value="ENG">ENG</a-select-option>
            <a-select-option value="UKR">UKR</a-select-option>
          </a-select>
        </a-col>
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

<script>
  import { store } from './store.js'

  export default {
    data() {
      return {
        store
      }
    },
    methods: {
      handleLanguageChange(val) {
        store.increment(val)
      }
    }
  }
</script>