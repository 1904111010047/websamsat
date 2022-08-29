<template>
    <body>
         <section class="section">
             
                 <div class="container">
            <h2 class="title has-text-centered is-spaced">Persyaratan</h2>
            <div class="notification">
                <p class="title is-4 has-text-centered is-spaced">Pengesahan Tahunan : </p>
        
                <section class="section">
                    <p class="subtitle" v-for="isi in tahunan " :key="isi.id">
                     <b-icon
                                icon="check-circle"
                                pack="fa">
                            </b-icon>     {{isi}}
                    </p>
                </section>
            </div>
            <div class="notification is-warning">
                <p class="title is-4 has-text-centered">Ganti STNK 5 Tahun : </p>
                <section class="section">
                    <p class="subtitle" v-for="isi in ganti_stnk " :key="isi.id">
                        <b-icon
                                icon="check-circle"
                                pack="fa">
                            </b-icon>  {{isi}}
                    </p>
                </section>
            </div>

            <div class="notification">
                <p class="title is-4 has-text-centered is-spaced">Keringanan : </p>
            <!-- <section class="section">
                <div v-for="(value, name, index) in keringanan" :key="value.id">
                {{ index }}. {{ name }}: {{ value }}
                </div>
            </section> -->
            <section class="section">
                <div v-for="(value, name) in keringanan" :key="value.id" >
                   
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title" v-if="name!='lainnya'">Kriteria {{name}}</p>
                        </div>
                        <div class="card-content" v-if="name!='lainnya'">
                            
                             <p class="subtitle" v-for="isi in value " :key="isi.id">
                            <b-icon
                                icon="check-circle"
                                pack="fa">
                            </b-icon>  {{isi}}
                            </p>
                        </div>
                    </div>
                   
                    
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title" v-if="name=='lainnya'">Syarat {{name}}</p>
                        </div>
                        
                        <div class="card-content" v-if="name=='lainnya'">
                             <p class="subtitle" v-for="isi in value " :key="isi.id">
                            <b-icon
                                icon="check-circle"
                                pack="fa">
                            </b-icon>  {{isi}}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            
           </div>
        </section>
    </body>
</template>
<script>
export default {
    metaInfo:{
        titleTemplate: '%s - Persyaratan',
    },
    data(){
        return {
         
        }
    },
    computed: {
        tahunan(){
            return this.$store.state.src1.syarat_tahunan
        },
        ganti_stnk(){
            return this.$store.state.src1.syarat_ganti_stnk
        },
        keringanan(){
            return this.$store.state.src1.syarat_keringanan
        }
    }
}
</script>

