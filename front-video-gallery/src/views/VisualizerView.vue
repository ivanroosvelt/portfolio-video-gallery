<script>
export default {
  data: function () {
    return {
      url: ""
    }
  },
  async created() {
    this.url = this.$route.query.url.replace("watch?v=","embed/") + "?autoplay=1&mute=1";
  }
}
</script>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink :to="{ path: '/' }">
    <button type="button" class="btn btn-default">
      <img src="@/assets/go-back.svg" width="15" height="15" alt="" srcset="">
      <span>Volver</span>
    </button>
  </RouterLink>
  <div class="video-container">
    <iframe width="560" height="315" :src="url">
    </iframe>
  </div>
</template>

<style>
.btn-default {
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  gap: 5px;
  width: 180px;
  border: 1px solid #136AE4;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2)) drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.14));
  border-radius: 10px;
}

.btn-default span {
  margin-left: 5px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12px;
  line-height: 21px;
  color: #136AE4;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
