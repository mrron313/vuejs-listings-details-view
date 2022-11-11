<template>
  <a-divider orientation="left">{{ labels.Details[store.lng] }}</a-divider>

  <a-row type="flex" justify="center" :style="{marginTop: '20px', gap: '40px', padding: '20px'}">
    <a-col flex="400px">
      <MapComponent :address='this.details.Address' />
    </a-col>

    <a-col flex="400px">
      <div :style="{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%', fontSize: '17px', lineHeight: '22px' }">
        <h4 :style="{ fontSize: '22px', lineHeight: '22px' }">{{ details?.AN }}</h4>
        {{ details?.Description[store.lng] }}

        <div :style="{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '15px' }">
          <a-row justify="space-between"><a-col><strong>{{ labels.Website[store.lng] }}: </strong></a-col><a-col><a :href="details.Webseite" target="_blank">{{ details.Webseite }}</a></a-col></a-row>
          <a-row justify="space-between"><a-col><strong>{{ labels.Telephone[store.lng] }}: </strong></a-col><a-col><span>{{ details.Phone }}</span> </a-col></a-row>
          <a-row justify="space-between"><a-col><strong>{{ labels.Members[store.lng] }}: </strong></a-col><a-col><span>{{ details.NOM }}</span> </a-col></a-row>
          <a-row justify="space-between"><a-col><strong>{{ labels.Address[store.lng] }}: </strong></a-col><a-col><span>{{ details.Address }}</span> </a-col></a-row>
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