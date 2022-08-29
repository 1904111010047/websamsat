<template>
<div class="container is-max-desktop">

     <div class="card sa_01">
        <div class="card-content">
            <div class="content">
                <section>
                    <h1 class="title has-text-centered"> Konfigurasi</h1>
                </section>
                 <section>
                     <h3 class="subtitle">Profil</h3>
                    <b-field label="Nama Samsat"><b-input id="nm" v-model="datasamsat.nm"></b-input></b-field>
                    <b-field label="Wilayah"><b-input id="nm" v-model="datasamsat.kode_wil"></b-input></b-field>
                    <b-field label="Alamat"><b-input id="nm" v-model="datasamsat.alamat"></b-input></b-field>
                    <b-field label="No. Telp"><b-input id="nm" v-model="datasamsat.hp"></b-input></b-field>
                    <b-field label="Email"><b-input id="nm" v-model="datasamsat.email"></b-input></b-field>
                    <b-field label="Url Twitter"><b-input id="nm" v-model="datasamsat.url_twitter"></b-input></b-field>
                    <b-field label="Url Instagram"><b-input id="nm" v-model="datasamsat.url_instagram"></b-input></b-field>
                    <b-field label="Url Facebook"><b-input id="nm" v-model="datasamsat.url_facebook"></b-input></b-field>
                    <b-field label="Url Youtube"><b-input id="nm" v-model="datasamsat.url_youtube"></b-input></b-field>
                    

                    <h3 class="subtitle">Visi dan Misi</h3>
                    <b-field label="File Visi Misi">
                    <div class="file has-name is-fullwidth">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                Choose a file…
                            </span>
                            </span>
                            <span class="file-name">
                            Screen Shot 2017-07-29 at 15.54.25.png
                            </span>
                        </label>
                        </div>
                    </b-field>

                    <b-field label="File Maklumat">
                    <div class="file has-name is-fullwidth">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                Choose a file…
                            </span>
                            </span>
                            <span class="file-name">
                            Screen Shot 2017-07-29 at 15.54.25.png
                            </span>
                        </label>
                        </div>
                    </b-field>

                    <b-button size="is-medium" @click="ev1" >Simpan</b-button>

                 </section>
            </div>
        </div>
     </div>
</div>
    
</template>

<script>
    import axios from 'axios';
    export default {
        metaInfo:{
        titleTemplate: '%s - Profil',
        },
        data() {
            return {
                datasamsat: {},
            }
        },
        mounted(){
            axios.get(process.env.VUE_APP_URL1+'/st/v2/home',
            {
            headers:{
                'Authorization':this.token
            }
            }
            ).then(response => (this.datasamsat = response.data.details.profil))            
        },
        methods: {
           ev1(){
               console.log(this.datasamsat)
                
            var formdata=new FormData();            
            formdata.append('nm',this.datasamsat.nm)
            formdata.append('kode_wil',this.datasamsat.kode_wil)
            formdata.append('alamat',this.datasamsat.alamat)
            formdata.append('hp',this.datasamsat.hp)
            formdata.append('email',this.datasamsat.email)
            formdata.append('url_twitter',this.datasamsat.url_twitter)
            formdata.append('url_instagram',this.datasamsat.url_instagram)
            formdata.append('url_facebook',this.datasamsat.url_facebook)
            formdata.append('url_youtube',this.datasamsat.url_youtube)


        axios.post(process.env.VUE_APP_URL1+'/st/v2/uprofil',formdata,{
            headers:{
                'Content-type':'multipart/form-data',
                'Authorization':this.token
            }
        }).then(
            response=> {
                var pesan=response.data==="OK" ? "Berhasil di Simpan" : "Gagal di Simpan";
                var tipe_toast=response.data==="OK" ? "is-success" : "is-danger";
                this.$buefy.toast.open({
                    message: pesan,
                    type: tipe_toast
                })
            
                
            }
        )

           }
        },
       computed:{
      token: function () {
      return this.$store.state.src2.token
    }
  }
        
    }
</script>
