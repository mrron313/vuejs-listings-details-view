<template>
  <!-- Search Fields -->
  <a-row type="flex" justify="center">
    <a-col :span="4" :order="1">
      <a-input placeholder="Search.." />
    </a-col>
    <a-col :span="4" :order="2">
      <a-select
        ref="select"
        style="width: 100%"
        placeholder="Type"
      >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </a-col>
    <a-col :span="4" :order="2">
      <a-select
        ref="select"
        style="width: 100%"
        placeholder="Municipality"
      >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </a-col>
  </a-row>

  <a-divider orientation="left">Listings</a-divider>

  <!-- Listings -->
  <Listings :lists=lists />
</template>

<script>
  import Listings from '../components/Listings/index.vue'
  import listData from '../_dev/data'

  export default {
    data() {
      return {
        lists: listData
      }
    }
  };
</script>
