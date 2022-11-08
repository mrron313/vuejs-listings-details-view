import { reactive } from 'vue'

export const store = reactive({
  lng: 'ENG',
  increment(val) {
    this.lng = val;
  }
})