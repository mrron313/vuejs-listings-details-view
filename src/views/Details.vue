<template>
  <a-row type="flex" justify="center" :style="{marginTop: '20px'}">

    <a-divider orientation="left">Details</a-divider>

    <a-col :span="7">
      <MapComponent :address='this.details.Address' />
    </a-col>

    <a-col :span="6">
      <div :style="{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%', fontSize: '17px', lineHeight: '22px' }">
        <h4 :style="{ fontSize: '22px', lineHeight: '22px' }">{{ details?.AN }}</h4>
        {{ details?.Description[store.lng] }}
      </div>
    </a-col>
  </a-row>
</template>

<script>
  import { List } from '../_dev/data'
  import { store } from '../store'

  export default {
    data() {
      return {
        store,
        details: {},
      }
    },  
    beforeMount() {
      const id = parseInt(this.$route.params.id);
      this.details = List.find(ls => ls.id === id);
    },
  }
</script>