<template>
    <div class="container is-fluid">
      
    <div class="notification">
        <div class="columns is-desktop" v-for="todo in home" v-bind:key="todo.nm_wil">
                <div class="column">
                <div class="card">
                    <div class="card-content">
                    {{ todo }}
                    </div>
                </div>
            </div>
            <!-- <div class="column">
                <div class="card">
                    <div class="card-content">
                    {{ todo.wilsamsat }}
                    </div>
                </div>
            </div> -->
            
            </div>

<section class="hero is-warning">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Esamsat Aceh
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
    </div>
  </div>
</section>

  </div>

  <div class="tile is-ancestor">
  <div class="tile is-parent">
    <div class="tile is-child box">
      <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
      </b-carousel>
    
    </div>
  </div>
</div>


<!-- <nav class="level is-mobile" >
  <div class="level-item has-text-centered">
    <div>
      <p class="title">{{unggulan.name}}</p>
    </div>
  </div>
</nav> -->
<div class="card">
   <header class="card-header">
    <p class="card-header-title">
      Channel Pembayaran
    </p>
    </header>
  <div class="card-content">
  <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
    <div class="column" v-for="unggulan in bawah" v-bind:key="unggulan.name">
      <figure class="image is-128x128">
    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
  </figure>
      {{unggulan.name}}
    </div>
  </div>
  </div>
</div>



        </div>
</template>

<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Slide 1', color: 'primary' },
                { text: 'Slide 2', color: 'info' },
                { text: 'Slide 3', color: 'success' },
                { text: 'Slide 4', color: 'warning' },
                { text: 'Slide 5', color: 'danger' }
            ],
            iconPack: 'fal',
        }
    },
    mounted(){
      return this.$store.dispatch('src1/home')
    },
    computed: {
      home(){
         return this.$store.state.src1.atas
      },
      bawah(){
        return this.$store.state.src1.bawah
      }
     
    }
}
</script>