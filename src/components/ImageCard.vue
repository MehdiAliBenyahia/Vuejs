<template>
  <b-card
    :img-src="film.Poster"
    :header="film.Title"
    img-alt="Image"
    img-top
    tag="article"
    style="width:20em; margin:2.5px;"
    img-height="300px"
    class="mb-2"
  >
    <b-card-text>
      {{ (film.Year)? 'mon texte true' : 'est false' }}
    </b-card-text>
      Détails
    </b-button>
  </b-card> 
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    name: 'ImageCard',
    props: {
        film: {
            type :Object,
            default: null
        },
        method: { 
            type: Function,
            default: null
        },
    },
 
}
    
</script>

<style>
</style>