<template>
  <GMapMap
    :center="center"
    :zoom="7"
    map-type-id="terrain"
    style="width: 450px; height: 450px"
    ref="myMapRef"
  >
    <GMapMarker
      :position="marker"
    />
  </GMapMap>
</template>

<script>
export default {
  name: 'MapComponent',
  props: ['address'],
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
      marker: {lat: 51.093048, lng: 6.842120}
    }
  },
  mounted() {
    this.$refs.myMapRef.$mapPromise.then((mapObject) => {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': this.$props.address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          console.log(latitude, longitude)
        } 
      });
    });
  },
}
</script>