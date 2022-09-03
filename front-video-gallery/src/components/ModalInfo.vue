<script>
export default {
    props: ['video'],
    methods: {
        onViewVideo() {
            this.$route.push({ name: 'visualizer', params: { url: this.video.image } })
        }
    }
}
</script>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="modal fade" id="modalInfo" tabindex="-1" role="dialog" aria-labelledby="modalInfoLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
                <div class="modal-body container-fluid">
                    <RouterLink :to="{ path: 'visualizer', query: { url: video?.url } }" data-dismiss="modal">
                        <div class="col-2 video-image">
                            <img src="@/assets/play.png" class="play-btn" alt="" srcset="" />
                            <img :src="video?.image" alt="" srcset="" />
                        </div>
                    </RouterLink>
                    <div class="col-10 modal-body-content">
                        <h2>{{ video?.title }}</h2>
                        <p>{{ video?.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.modal-dialog {
    min-height: calc(100vh - 10px);
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
}

.modal {
    border-radius: 15px;
}

.modal-content {
    box-shadow: none;
    -webkit-box-shadow: none;
}

.modal-body {
    padding: 80px 50px;
    display: flex;
}

.modal-body h2 {
    font-family: Roboto;
    font-weight: 500;
    font-size: 21px;
}

.modal-body p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 18px;
}

.modal-body img {
    width: 200px;
    /* margin: 80px 60px; */
}

.modal-body .play-btn {
    width: 50px;
    top: 120px;
    left: 120px;
    z-index: 2;
    position: absolute;
}

.modal-body-content {
    margin-left: 20px;
    display: block;
    margin-right: auto;
}

.modal-footer {
    padding-bottom: 20px;
    border-top: none;
}

.btn-default {
    width: 180px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 12px;
    line-height: 21px;
    color: #136AE4;

}

.btn-primary {
    width: 180px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 12px;
    line-height: 21px;
    background: #136AE4;
}

.close {
    position: relative;
    z-index: 2;
    opacity: 1;
    margin: 20px 30px;
    font-size: 28px;
}
</style>