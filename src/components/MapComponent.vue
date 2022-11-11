<template>
  <GMapMap
    :center="center"
    :zoom="14"
    map-type-id="terrain"
    style="width: 100%; height: 450px"
    ref="myMapRef"
  >
    <GMapMarker
      v-if="map !== null"
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
      map: null,
      center: {lat: 51.093048, lng: 6.842120},
      marker: {}
    }
  },
  methods: {
    setMarker (val) {
      this.marker = val;
      this.center = val;
    }
  },
  mounted() {
    const address = this.$props.address;    
    var self = this;

    this.$refs.myMapRef.$mapPromise.then(function (mapObject) {
      var geocoder = new google.maps.Geocoder();
      self.map = mapObject;
      geocoder.geocode({ 'address': address }, function(results, status) {
        return results
      }).then(function (res) {
        self.setMarker({lat: res.results[0].geometry.location.lat(), lng: res.results[0].geometry.location.lng()})
      });
    });
  },
}
</script>