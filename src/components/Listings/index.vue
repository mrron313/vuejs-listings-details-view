<template>
    <a-row type="flex" justify="center">
      <LisitingItem v-for="item in lists" :item="item" :key="item.id" />
    </a-row>
</template>

<script>
  import LisitingItem from './LisitingItem.vue';

  export default {
    props: {
      lists: []
    },
    components: { LisitingItem }
  }
</script>