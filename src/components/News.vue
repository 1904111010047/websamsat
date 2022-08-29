<template>
   
          <section class="section">
            <div class="container">
            <h1 class="subtitle">Berita</h1>
            <div class="columns is-multiline">
               
                <div class="column is-one-quarter" v-for="beritax in berita" v-bind:key="beritax.id" @click="todetail(beritax.id)">
                   <div class="card">
                    <div class="card-content">
                        <div class="media">
                        <div class="media-content">
                            <p class="subtitle is-6">{{beritax.title}}</p>
                        </div>
                        </div>

                        <b-image
                            :src=beritax.image
                            placeholder="https://samsatbandaaceh.acehprov.go.id/fs/public/logo_esamsat_aceh/144-x-144.png"
                            alt="news"
                            ratio="4by2"
                        ></b-image>

                        <div class="content">
                         <!-- <div v-html="beritax.content.slice(0, 100)+ '...'" ></div> -->
                        <!-- <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>

            

            </div>
        </section>
        
</template>
<script>
export default {
    name:"news",
    props:['berita'],
    methods: {
        isilimit(xa){
            if ( xa.length > 8 ) {
                return xa.substring(0,20) + '...'
            } else {
                return xa
            }
        },
        todetail(value) {
            console.log("ini detail "+value)
            this.$router.push({name:'detail_news',params:{idnews:value}})
        },
    }
    
}
</script>