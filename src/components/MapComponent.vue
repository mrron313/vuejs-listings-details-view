<template>
  <GMapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 450px; height: 450px"
  >
  </GMapMap>
</template>

<script >
export default {
  name: 'MapComponent',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
    }
  }
}
</script>