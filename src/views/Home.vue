<template>
  <!-- Search Fields -->
  <a-row type="flex" justify="center" align="center" :style="{ display: 'flex', gap: '10px' }">
    <a-col :style="{ width: '200px' }" :order="1">
      <a-select
        ref="select"
        style="width: 100%"
        :placeholder="labels.Type[store.lng]"
        v-model="filters.type"
        @change="handleTypeChange"
      >
        <a-select-option value="">{{ labels.All[store.lng] }}</a-select-option>
        <a-select-option v-for="type in types[store.lng]" :value="type">{{type}}</a-select-option>
      </a-select>
    </a-col>
    <a-col :style="{ width: '200px' }" :order="2">
      <a-select
        ref="select"
        style="width: 100%"
        :placeholder="labels.District[store.lng]"
        v-model="filters.municipality"
        @change="handleMunicipalityChange"
      >
        <a-select-option value="">{{ labels.All[store.lng] }}</a-select-option>
        <a-select-option v-for="district in districts" :value="district">{{district}}</a-select-option>
      </a-select>
    </a-col>
    <a-col :style="{ width: '200px' }" :order="3">
      <a-button @click="handleSearch">{{ labels.Search[store.lng] }}</a-button>  
    </a-col>
  </a-row>
  
  <a-divider orientation="left">({{ showed }} {{ labels.DataShowed[store.lng] }} {{ total }}) </a-divider>

  <!-- Listings -->
  <div v-if="loading" class="spinner-box">
    <a-spin />
  </div>
  <Listings v-if="!loading" :lists="filteredLists" />
</template>

<style scoped>
  .spinner-box {
    text-align: center;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
</style>

<script>
  import Listings from '../components/Listings/index.vue'
  import { List, TypeEng, TypeUkr, Districts, Labels } from '../_dev/data'
  import { store } from '../store'

  export default {
    data() {
      return {
        store,
        filters: {
          search: '',
          type: '',
          municipality: '',
        },
        lists: List,
        filteredLists: List,
        loading: false,
        showed: List.length,
        total: List.length,
        districts: Districts,
        labels: Labels,
        types: {
          ENG: TypeEng,
          UKR: TypeUkr
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
      handleLimitChange: function (value) {
        console.log(value);
        this.limit = value;
      },
      handleSearch: function () {
        this.loading = true;
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
          } else if (ls.Type[store.lng] === this.filters.type) {
            typefound = true;
          } else {
            typefound = false;
          }

          return munfound && typefound;
        });

        setTimeout(() => {
          this.showed = fl.length;
          this.filteredLists = fl;

          this.loading = false;
        }, 1500);
      }
    },
  };
</script>
