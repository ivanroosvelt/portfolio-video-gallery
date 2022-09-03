<script>
export default {
  data() {
    return {
      videosData: [],
      onDeleteVideoId: null,
      onShowInfoVideo: null
    }
  },
  methods: {
    async getVideos() {
      try {
        this.videosData = await getApiVideos()
      } catch (error) {
        console.error(error)
        alert("Se ha producido un error mientras se obtenian los videos.")
      }
    },
    async onAddVideo(videoUrl) {
      try {
        if(this.videosData.some(vid=>vid.url===videoUrl)) return alert("Ya existe ese video")
        let createdVideo = await createApiVideo(videoUrl)
        this.videosData.push(createdVideo)
      } catch (error) {
        console.error(error)
        alert("Se ha producido un error mientras se guardaba el video.")
      }
    },
    showModalDelete(idVideo) {
      this.onDeleteVideoId = idVideo
      $('#modalDelete').modal('toggle')
    },
    async onDeleteVideo() {
      try {
        $('#modalDelete').modal('hide')
        await deleteApiVideo(this.onDeleteVideoId)
        this.videosData = this.videosData.filter(vid => vid.id !== this.onDeleteVideoId)
      } catch (error) {
        console.error(error)
        alert("Se ha producido un error mientras se eliminaba el video.")
      }
    },
    showModalInfo(idVideo) {
      this.onShowInfoVideo = this.videosData.find(vid => vid.id === idVideo)
      $('#modalInfo').modal('show')
    },
  },
  mounted() {
    this.getVideos()
  }
}
</script>
<script setup>
import SearchBox from '@/components/SearchBox.vue'
import ListVideo from '@/components/ListVideo.vue'
import ModalDelete from '@/components/ModalDelete.vue';
import ModalInfo from '@/components/ModalInfo.vue';
import { getApiVideos, createApiVideo, deleteApiVideo } from "../repo/mainRepo";

</script>

<template>
  <main>
    <div class="container-fluid wrapper">
      <SearchBox @onAddVideo="onAddVideo" />
      <ListVideo :videosData="videosData" @onDeleteVideo="showModalDelete" @onShowInfo="showModalInfo" />
      <ModalDelete @onDelete="onDeleteVideo" />
      <ModalInfo :video="onShowInfoVideo" />
    </div>
  </main>
</template>
