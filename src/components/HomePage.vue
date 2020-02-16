<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          v-for="film in info"
          :key="film.imdbID"
        >
          <ImageCard :film="film" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;
import ImageCard from "./ImageCard"

export default {
    name: 'HomePage',
    components:{
        ImageCard
    },
    data() {
        return {
            info: null,
        }
    },
    mounted () {
        axios
            .get('http://www.omdbapi.com/?s=batman&apikey=904eed5c')
            .then(response => (this.info = response.data.Search ))
    },
}
</script>