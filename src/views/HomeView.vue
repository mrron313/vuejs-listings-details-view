<template>
  <a-layout :style="{ height: '100vh', }">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
      <a-menu-item>App Title</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px',  background: '#fff', }">
      <div :style="{ padding: '24px', }">
        <a-row type="flex" justify="center">
          <a-col :span="4" :order="1">
            <a-input v-model:value="" placeholder="Search" />
          </a-col>
          <a-col :span="4" :order="2">2 col-order-3</a-col>
          <a-col :span="4" :order="3">3 col-order-2</a-col>
        </a-row>
        <a-divider orientation="left">Listings</a-divider>
      
        <a-row type="flex" justify="center">
          <a-col :span="4" :order="1">
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img alt="example" src="https://www.yourcabin.com/wp-content/uploads/2018/07/Breathtaking-view-of-Gatlinburg-and-the-Smoky-Mountains.jpg" />
              </template>
              <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4" :order="1">
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img alt="example" src="https://www.yourcabin.com/wp-content/uploads/2018/07/Breathtaking-view-of-Gatlinburg-and-the-Smoky-Mountains.jpg" />
              </template>
              <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4" :order="1">
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img alt="example" src="https://www.yourcabin.com/wp-content/uploads/2018/07/Breathtaking-view-of-Gatlinburg-and-the-Smoky-Mountains.jpg" />
              </template>
              <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>

      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Developed By Arif 
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      return {
        selectedKeys: ref<string[]>(['2']),
      };
    },
  });
</script>
