<template>
  <a-col :span="5">
    <a-card hoverable style="width: 340px; margin: 20px" @click="goToDetails(item.id)">
      <a-card-meta :title="item.District">
        <h4>{{ item.Type['ENG'] }}</h4>
        <template #description>{{ this.shortentDescription(item.Description['ENG']) }}</template>
      </a-card-meta>
    </a-card>
  </a-col>
</template>

<script>
  export default {
    inject: ['shortentDescription'],
    props: {
      item: {}
    },
    methods: {
      goToDetails(id) {
        this.$router.push(`/details/${id}`)
      },
    },
  }
</script>