<template>

    <body>
        <section class="section" v-if="id!=6">
            <div class="card" v-for="isi in detail " :key="isi.id">
                    <h1 class="title has-text-centered">{{isi.title}}</h1>
                <div class="card-content">
                    <div><vue-editor style="display:none"></vue-editor></div>
                    <div v-html="isi.content" class="ql-editor"></div>
                </div>
            </div>
        </section>
         <section class="section" v-if="id==6">
             <div class="box is-warning">
                 <div class="container">
            <h2 class="title is-4 has-text-centered is-spaced">Samsat Online</h2>
            <p class="subtitle has-text-centered is-spaced">Pembayaran Pengesahan Tahunan Dapat Di Lakukan Melalui : </p>
        
            <!-- <div class="card" v-for="unggulan in bawah" v-bind:key="unggulan.name">
                <div class="card-content">
                    <figure class="image is-128x128 ">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                    <p class="subtitle ">{{unggulan.name}}</p>
                </div>
            </div> -->
         
                 
                     <nav class="level">
                <div class="level-item has-text-centered effect_card_s0" v-for="unggulan in bawah" v-bind:key="unggulan.name" >
                    <div class="card isi-card-so">
                         <div class="notification">
                            <p class="title is-6">{{unggulan.name}}</p>
                        </div>
                        <div class="card-content">
                        <figure class="image is-128x128 ">
                        <img class="is-rounded" src="https://samsat.acehprov.go.id/fs/public/plc_holder.png">
                        </figure>
                        </div>
                        <div class="notification">
                            <p class="title is-6">{{unggulan.name}}</p>
                        </div>
                    </div>
                </div>
                </nav>
                 
            
           
            
           </div>
             </div>
        </section>
    </body>
    
</template>
<script>
import { VueEditor } from "vue2-editor";
//import 'vue2-editor/dist/vue2-editor.css'
export default {
    components: {
    VueEditor
  },
    metaInfo:{
        titleTemplate: '%s - Layanan',
    },
    data(){
        return {
         id:this.$route.params.idlayanan  ,
         seen:true
        }
    },
    computed: {
        detail(){
            return this.$store.state.src1.layanan_umum.filter(todo => todo.id === this.id)
        },
        bawah(){
            return this.$store.state.src1.bawah
        }
    }
}
</script>

<style>

.effect_card_s0 .isi-card-so {
  margin-bottom: 1rem;
  -webkit-transition: all .1s ease-in-out;
  transition: all .1s ease-in-out;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

.effect_card_s0 .isi-card-so:hover {
  -webkit-transform: scale(1.055) translateY(-2px);
  transform: scale(1.055) translateY(-2px);
  -webkit-box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
  box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
}
</style>

<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";
</style>