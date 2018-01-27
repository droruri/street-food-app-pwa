<template>
  <v-layout justify-center>
    <v-flex xs12>
      <video ref="video" class="camera-stream"/>
    </v-flex>
    <v-flex xs12>
      <v-btn @click.prevent="capture" fab dark small color="red">
        <v-icon dark>camera</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        mediaStream: null,
        advanced:{advanced: [{
          facingMode: "environment"
        }]},
      }
    },
    mounted() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.mediaStream = mediaStream;
          this.$refs.video.srcObject = mediaStream;
          this.$refs.video.play()
        })
        .catch(error => console.error('getUserMedia() error:', error));
    },
    methods:{
      capture () {
        const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
        const imageCapture = new window.ImageCapture(mediaStreamTrack);
        return imageCapture.takePhoto().then(blob => {
          console.log(blob)
        })
      }
    }
  }
</script>

<style scoped>
  .camera-modal {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 10;
  }
  .camera-stream {
    width: 100%;
    max-height: 100%;
  }
</style>
