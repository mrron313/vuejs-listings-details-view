<template>
  <!-- Search Fields -->
  <a-row type="flex" justify="center">
    <a-col :span="4" :order="1">
      <a-input placeholder="Search.." v-model="filters.search" />
    </a-col>
    <a-col :span="4" :order="2">
      <a-select
        ref="select"
        style="width: 100%"
        placeholder="Type"
        v-model="filters.type"
        @change="handleTypeChange"
      >
        <a-select-option value="">All</a-select-option>
        <a-select-option v-for="type in types['ENG']" :value="type">{{type}}</a-select-option>
      </a-select>
    </a-col>
    <a-col :span="4" :order="2">
      <a-select
        ref="select"
        style="width: 100%"
        placeholder="Municipality"
        v-model="filters.municipality"
        @change="handleMunicipalityChange"
      >
        <a-select-option value="">All</a-select-option>
        <a-select-option v-for="district in districts" :value="district">{{district}}</a-select-option>
      </a-select>
    </a-col>
    <a-col :order="3">
      <a-input placeholder="limit" :value="limit" v-model="limit" @change="handleLimitChange" />
    </a-col>
    <a-col :order="4">
      <a-button @click="handleSearch">Search</a-button>  
    </a-col>
  </a-row>
  
  <a-divider orientation="left">Listings ({{ filteredLists.length === 0? 0 : limit }} data showed out of {{ filteredLists.length }}) </a-divider>

  <!-- Listings -->
  <Listings :lists="filteredLists.splice(0, this.limit)" />
</template>

<script>
  import Listings from '../components/Listings/index.vue'
  import { List, TypeEng, Districts } from '../_dev/data'

  export default {
    data() {
      return {
        filters: {
          search: '',
          type: '',
          municipality: '',
        },
        limit: 10,
        lists: List,
        filteredLists: [],
        districts: Districts,
        types: {
          ENG: TypeEng,
          UKR: []
        }
      }
    },
    methods: {
      handleMunicipalityChange: function (value) {
        this.filters.municipality = value;
      },
      handleTypeChange: function (value) {
        this.filters.type = value;
      },
      handleLimitChange: function (e) {
        this.limit = e.target.value;
      },
      handleSearch: function () {
        let fl = this.lists.filter(ls => {
          let munfound, typefound;

          if (this.filters.municipality === '') {
            munfound = true;
          } else if (ls.District === this.filters.municipality) {
            munfound = true;
          } else {
            munfound = false;
          }

          if (this.filters.type === '') {
            typefound = true;
          } else if (ls.Type['ENG'] === this.filters.type) {
            typefound = true;
          } else {
            typefound = false;
          }

          return munfound && typefound;
        });

        this.filteredLists = fl;
      }
    },
  };
</script>
