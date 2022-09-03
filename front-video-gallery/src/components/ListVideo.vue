<script>
  export default {
    props: ['videosData'],
    methods: {
      onDeleteVideo(idVideo) {
        this.$emit('onDeleteVideo', idVideo)
      },
      showModalInfo(idVideo) {
        this.$emit('onShowInfo', idVideo)
      }
    }
  }
</script>

<script setup>
import VideoItem from './VideoItem.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row justify-content-arround list-video">
      <div class="col-md-4"  v-for="video in videosData" :key="video.id">
        <VideoItem :video="video" @onDeleteVideo="onDeleteVideo" @onShowInfo="showModalInfo"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-video {
  margin-top: 5rem;
}
</style>