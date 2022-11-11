<template>
  <a-col flex="'200px'">
    <a-card hoverable style="max-width: 300px; minHeight: 120px; margin: 20px" @click="goToDetails(item.id)">
      <a-card-meta :title="item.AN">
        <template #description>{{ this.shortentDescription(item.Description[store.lng]) }}</template>
      </a-card-meta>
    </a-card>
  </a-col>
</template>

<script>
  import { store } from '../../store'

  export default {
    inject: ['shortentDescription'],
    props: {
      item: {}
    },
    data() {
      return {
        store
      }
    },
    methods: {
      goToDetails(id) {
        this.$router.push(`/details/${id}`)
      },
    },
  }
</script>