<template>
  <a-col :span="4" :order="1">
    <a-card hoverable style="width: 240px" @click="goToDetails(item.id)">
      <template #cover>
        <img alt="example" :src="item.img" />
      </template>
      <a-card-meta :title="item.title">
        <template #description>{{ item.desc }}</template>
      </a-card-meta>
    </a-card>
  </a-col>
</template>

<script>

  export default {
    props: {
      item: {}
    },
    methods: {
      goToDetails(id) {
        this.$router.push(`/details/${id}`)
      }
    }
  }
</script>