<template>
  <a-col :span="5">
    <a-card hoverable style="width: 340px; margin: 20px" @click="goToDetails(item.id)">
      <a-card-meta :title="item.District">
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