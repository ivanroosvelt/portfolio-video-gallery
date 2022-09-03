<template>
  <div class="container-card">
    <button type="button" @click="$emit('onDeleteVideo', video.id)" class="close float-right" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="card" :style="style" @click="$emit('onShowInfo', video.id)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: ['video'],
  computed: {
    style() {
      return 'background-image: url(' + this.video?.image + ')';
    }
  }
}
</script>

<style scoped>
.container-card {
  margin: 35px 20px;
  cursor: pointer;
}

.card {
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.close {
  width: 24px;
  height: 24px;
  opacity: .7;
  background-color: black;
  margin: 0px 5px;
}

.close span {
  color: white;
}
</style>
