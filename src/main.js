import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

app.use(Antd)
app.use(router)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBeSXEpjR4eSAol-2HcUT_dMNXz-GGefuc',
  },
}).mount('#app')
