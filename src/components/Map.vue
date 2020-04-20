<template>

  <div>
    <div>
      Marker icon are retrived from {{ path }} custom path
    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 800px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="marker" />
      <l-icon-default :image-path="path" />
      <l-marker :lat-lng="marker">
        <l-icon
          class-name="someExtraClass"
        >
          <div class="headline">
            test
          </div>
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LIconDefault, LIcon } from "vue2-leaflet";

export default {
  name: "CustomPath",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIconDefault,
    LIcon
  },
  data() {
    return {
      zoom: 13,
      path: "/images/",
      center: [41.822985, -87.6071],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(41.822985, -87.6071),
      icon: icon({
        iconUrl: "static/images/baseball-marker.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      })
    };
  }
};

</script>

<style>
.someExtraClass {
  background-color: aqua;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
</style>