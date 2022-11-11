<template>
    <a-layout :style="{ minHeight: '100vh', height : '100%', }">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', color: '#fff', display: 'flex', 'justify-content': 'space-between', 'align-items': 'center' }">
        <router-link to="/"><h3 :style="{  fontSize: '22px', color: '#fff', display: 'inline-block' }">{{ labels.Title[store.lng] }}</h3></router-link>
        <a-select
          @change="handleLanguageChange"
          v-model:value="store.lng"
        >
          <a-select-option selected=true value="ENG">ENG</a-select-option>
          <a-select-option value="UKR">UKR</a-select-option>
        </a-select>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px',  background: '#fff', height: '100%',}">
        <div :style="{ padding: '24px', }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        ---------
      </a-layout-footer>
    </a-layout>
</template>

<script>
  import { store } from './store.js'
  import { Labels } from './_dev/data'

  export default {
    data() {
      return {
        store,
        labels: Labels
      }
    },
    methods: {
      handleLanguageChange(val) {
        store.increment(val)
      }
    }
  }
</script>