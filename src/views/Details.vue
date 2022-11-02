<template>
  <a-row type="flex" justify="center" :style="{marginTop: '20px'}">

    <a-divider orientation="left">Details</a-divider>

    <a-col :span="7">
      <MapComponent />
    </a-col>

    <a-col :span="6">
      <div :style="{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%', fontSize: '17px', lineHeight: '22px' }">
        <h4 :style="{ fontSize: '22px', lineHeight: '22px' }">TITLE</h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </a-col>
  </a-row>
</template>

<script>

  export default {
    mounted() {
      console.log(this.$route.params.id);
    },
  }
</script>