<template>
  <a-row type="flex" justify="center" :style="{marginTop: '20px'}">

    <a-divider orientation="left">{{ labels.Details[store.lng] }}</a-divider>

    <a-col :span="7">
      <MapComponent :address='this.details.Address' />
    </a-col>

    <a-col :span="6">
      <div :style="{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%', fontSize: '17px', lineHeight: '22px' }">
        <h4 :style="{ fontSize: '22px', lineHeight: '22px' }">{{ details?.AN }}</h4>
        {{ details?.Description[store.lng] }}

        <div :style="{ marginTop: '15px' }">
          <div :style="{ display: 'flex', justifyContent: 'space-between' }"><strong>{{ labels.Website[store.lng] }}: </strong><span>{{ details.Webseite }}</span> </div>
          <div :style="{ display: 'flex', justifyContent: 'space-between' }"><strong>{{ labels.Telephone[store.lng] }}: </strong><span>{{ details.Phone }}</span> </div>
          <div :style="{ display: 'flex', justifyContent: 'space-between' }"><strong>{{ labels.Members[store.lng] }}: </strong><span>{{ details.NOM }}</span> </div>
          <div :style="{ display: 'flex', justifyContent: 'space-between' }"><strong>{{ labels.Address[store.lng] }}: </strong><span>{{ details.Address }}</span> </div>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script>
  import { List, Labels } from '../_dev/data'
  import { store } from '../store'

  export default {
    data() {
      return {
        store,
        labels: Labels,
        details: {},
      }
    },  
    beforeMount() {
      const id = parseInt(this.$route.params.id);
      this.details = List.find(ls => ls.id === id);
    },
  }
</script>