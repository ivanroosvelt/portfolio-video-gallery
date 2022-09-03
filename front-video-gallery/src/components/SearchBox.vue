<script>
export default {
  data() {
    return {
      videoUrl: ''
    }
  },
  methods: {
    onAddVideo() {
      if(this.videoUrl.match("^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$")){
        this.$emit('onAddVideo', this.videoUrl) 
        return this.videoUrl = ""
      }
      console.log("Bad Youtube Url")
    }
  }
}
</script>

<template>
  <div class="col">
    <h1 class="title">Añadir nuevo video</h1>
    <div class="find-form btn-group" role="group">
      <input class="add-box" type="text" placeholder="Añadir" v-model="videoUrl" />
      <button @click="onAddVideo" class="add-button">
        <span class="add-button-text">
          Añadir
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 28.33px;
  line-height: 37.64px;
  color: #020202;
}

.find-form {
  width: 100%;
}

.add-box {
  width: 70%;
  height: 57px;
  background: #FFF;
  padding: 12px 12px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px 0px 0px 5px;
}

.add-button {
  color: #FFF;
  padding: 12px 12px;
  height: 57px;
  width: 30%;
  border: none;
  background: #136AE4;
  box-shadow: 0px 2px 2px 0px #00000024;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 0px 10px 10px 0px;
}

.add-button-text {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;

}
</style>
