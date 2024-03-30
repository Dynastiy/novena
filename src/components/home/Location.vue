<!-- -33.88444018631812, 150.88938463835265 -->
<template>
    <div>
      <GMapMap
        :center="{ lat: -33.88444018631812, lng: 150.88938463835265 }"
        :zoom="10" 
        map-type-id="terrain" 
        style="width: 100vw; height: 20rem"
        :options="{
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: true
        }"
      />
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>