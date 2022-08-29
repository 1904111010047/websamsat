<template>
    <body id="top"><br>
         <nav class="level">
                <div class="level-item has-text-centered" >
                    <Polri/>
                </div>
                <div class="level-item has-text-centered" >
                    <AcehLogo/>
                </div>
                <div class="level-item has-text-centered" >
                    <Jr/>
                </div>
         </nav>       
        <!-- Start of Carousel -->
        
            <div class="block">
                <p class="title has-text-centered is-4">Samsat {{self.nm}}</p>
                <p class="subtitle has-text-centered">UPTD Wilayah {{self.kode_wil}}</p>
            </div>
            <div class="hero is-small is-warning is-bold">


         <!-- Hero head: will stick at the top -->
  <!-- <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Beranda
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>

    
  </div> -->

  <!-- Hero content: will be in the middle -->
  <div class="hero-body img_effect">

    <!-- <div class="container has-text-centered">
      <h1 class="title">
        Title
      </h1>
      <h2 class="subtitle">
        Subtitle
      </h2>
    </div> -->

   

    <b-carousel
      :animated="animated"
      :pause-info="pauseInfo"
      :repeat="repeat"
      :arrow=false
      :arrow-hover=false
      class="slshadow"
      >
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i" @click="todetail(carousel.id)" >
    <b-image
    :src="carousel.image"
    placeholder="https://samsatbandaaceh.acehprov.go.id/fs/public/plc_holder.png"
    ratio="901by235"
    ></b-image>
    <!-- <div class="container has-text-centered">
        <h1 class="title">{{carousel.text}}</h1>
        
            
            <b-image class="imgslider"
            :src="carousel.image"
            placeholder="https://picsum.photos/id/237/200/100?blur=10"
            ratio="2by1"
        ></b-image>
        
    </div> -->
    <!-- <div class="overlay pstjudul"> -->
      <div class="pstjudul">
    <div class="title has-text-centered ">
        <h6>{{carousel.title}}</h6>
    </div>
    <div class="subtitle has-text-centered">
        <!-- <b-button type="is-primary is-light is-small" @click="todetail(carousel.id)">Detail</b-button> -->        
    </div>
  </div>
    </b-carousel-item>
      </b-carousel>


  </div>

    </div>
    <!-- end of carousel -->
        <!-- <div class="box cta">
            <p class="has-text-centered">
                <span class="tag is-primary">New</span> Pemutihan Pajak Kendaraan di perpanjang sampai dengan 15 Desember 2020
            </p>
        </div> -->
        <!-- <div class="block">
            <div class="notification inievent">
               <div>
                    <div class="container">
                    <div
                        class="columns is-multiline"
                    >
                        <div class="column is-12">
                        <h1 class="title has-text-centered section-title">
                            Pemutihan Pajak
                        </h1>
                        </div>
                        <div class="column is-10 has-text-centered is-offset-1">
                        <h2 class="subtitle">
                           Peraturan Gubernur Aceh No. 30 Tahun 2020
                        </h2>
                         <h2 class="subtitle">
                          Tentang Pembebasan Denda dan BBNKB
                        </h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div> -->
        
        
       
              <!-- Begin Work Content -->
      <div class="section my-work" id="layanan_samsat">
        <div class="container">
          <div
            class="columns is-multiline"
          >
            <div class="column is-12">
              <h1 class="title has-text-centered section-title">Layanan Samsat</h1>
            </div>
            <div class="column is-3" v-for="isi in layanan_umum " :key="isi.id" @click="detail_layanan(isi.id)">
                <div class="card work-item">
                    <div class="card-image">
                        <figure class="image is-2by1">
                        <!-- <img src="https://samsat.acehprov.go.id/fs/public/plc_holder2.png"> -->
                        <img :src=isi.image>
                        </figure>
                    </div>
                    <div class="card-content">
                        <p class="title is-6 has-text-centered">{{isi.title}}</p>
                    </div>
                </div>

                <!-- <div class="content ">
                            <b-image
                                src="https://bulma.io/images/placeholders/128x128.png"
                                ratio="2by1"
                            ></b-image>
                            <p class="subtitle has-text-centered">{{isi.name}}</p>
                        </div> -->
              
            </div>
          </div>
        </div>
      </div>
      <!-- End Work Content -->
      
        
      

       

    <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
        <h2 class="title is-4 has-text-centered">Info Pajak</h2>
        <p class="subtitle has-text-centered is-spaced">Pengecekan Info Pajak Kendaraan Melalui :</p>
        <p class="subtitle has-text-centered"><b-button type="is-warning" @click="infopajak()">Detail</b-button></p>
    </div>
  </div>
</section>
       
        <section class="section">
            <div class="container">
                <!-- <h2 class="title is-4 has-text-centered">Info Pajak</h2>
            <p class="subtitle has-text-centered">Pengecekan Info Biaya Pajak Kendaraan Melalui :</p> -->
            <div class="level is-mobile">
            </div>
                   
            </div>
        </section>    
       <News v-bind:berita="news" />
    </body>
</template>
<script>
import AcehLogo from '@/components/logos/Pemda.vue'
import Polri from '@/components/logos/Polri.vue'
import Jr from '@/components/logos/Jr.vue'
import News from '@/components/News.vue'
export default {
    metaInfo:{
        titleTemplate: '%s - Home',
    },
    components:{
        AcehLogo,
        Polri,
        Jr,
        News
    },
    data(){
        return {
            animated: 'fade',
            pauseInfo: false,
            repeat: true,
            rounded:true,
            // carousels: [
            //     { 
            //     text: 'Slide 1', 
            //     color: 'primary',
            //     image: 'https://picsum.photos/id/0/1230/500'
            //     },
            //     {
            //     text: 'Slide 2', 
            //     color: 'primary',
            //     image: 'https://picsum.photos/id/1/1230/500'
            //     },
            //     {
            //     text: 'Slide 3', 
            //     color: 'primary',
            //     image: 'https://bapenda.jabarprov.go.id/wp-content/uploads/2020/07/Header-Triple-Untung-Plus-2020.jpg'
            //     },
            // ],
            iconPack: 'fal',
            
        }
    },
    computed: {
        home(){
            return this.$store.state.src1.atas
        },
        carousels(){
            return this.$store.state.src1.carousel
        },
        layanan_umum(){
            return this.$store.state.src1.layanan_umum
        },
        self(){
          return this.$store.state.src1.self_samsat
        },
        news(){
          return this.$store.state.src1.news
        }
    },
    methods: {
        todetail(value) {
            console.log("ini detail "+value)
            this.$router.push({name:'details',params:{Pid:value}})
        },
        detail_layanan(value) {
                this.$router.push({name:'detail_layanan',params:{idlayanan:value}})
        },
        infopajak(){
             this.$router.push({name:'info-pajak'})
        }
    }
}
</script>
<style>
.slshadow{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* ini overlay */
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background: linear-gradient(90deg, rgba(255,137,89,1) 35%, rgba(195,45,30,1) 100%);
  
}

.img_effect:hover .overlay {
  opacity: 0.9;
}

.pstjudul{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.wtengah{
  justify-content: center;
  min-height: 150px;
}


.inievent{
    color: aliceblue;
    /* background-image: url("http://lorempixel.com/g/1500/1000/nature/10/"); */
    background: rgb(254,188,19);
background: linear-gradient(90deg, rgba(254,188,19,1) 0%, rgba(255,72,169,1) 40%, rgba(197,40,225,1) 84%);
    min-height: 100px; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

html,body {
  background: linear-gradient(90deg, rgba(223,223,235,1) 0%, rgba(224,224,238,1) 29%, rgba(249,248,246,1) 71%, rgba(183,193,195,1) 100%);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
.hero-body .container {
  max-width: 700px;
}
.hero-body .title {
  color: hsl(192,17%,99%) !important;
}
.hero-body .subtitle {
  color: hsl(192,17%,99%) !important;
  padding-top: 2rem;
  line-height: 1.5;
}
.features {
  padding: 5rem 0;
}
.box.cta {
  border-radius: 0;
  border-left: none;
  border-right: none;
}
.card-image > .fa {
  font-size: 8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #209cee;
}
.card-content .content {
  font-size: 14px;
  margin: 1rem 1rem;
}
.card-content .content h4 {
  font-size: 16px;
  font-weight: 700;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
.intro {
  padding: 5rem 0;
  text-align: center;
}
.sandbox {
  padding: 5rem 0;
}
.tile.notification {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.is-shady {
animation: flyintoright .4s backwards;
background: #fff;
box-shadow: rgba(0, 0, 0, .1) 0 1px 0;
border-radius: 4px;
display: inline-block;
margin: 10px;
position: relative;
transition: all .2s ease-in-out;
}
.is-shady:hover {
box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);
}
/*adds font awesome stars*/
footer li:before {
  content: '\f1b2';
  font-family: 'FontAwesome';
  float: left;
  margin-left: -1.5em;
  color: #147efb;
}



.section-dark {
    background: linear-gradient(90deg, rgba(60,230,201,1) 35%, rgba(0,201,170,1) 100%);
  /* background-color: slategray; */
  padding: 60px 0px;
}

.section-dark.my-work .work-item {
  margin-bottom: 1rem;
  -webkit-transition: all .1s ease-in-out;
  transition: all .1s ease-in-out;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

.section-dark.my-work .work-item:hover {
  -webkit-transform: scale(1.055) translateY(-2px);
  transform: scale(1.055) translateY(-2px);
  -webkit-box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
  box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
}
</style>