<template>
  <div class="container">
      <div class="card">
        <div class="card-content">
            <div class="content">
                <section class="section">
                    <b-field label="Judul"><b-input v-model="judul"></b-input></b-field>
                    <b-field label="Kategori">
                        <b-select placeholder="Select a Kategori" v-model="h_kategori">
                            <option
                                v-for="option in kategori"
                                :value="option.id"
                                :key="option.id"
                                >
                                {{ option.nm }}
                            </option>
                        </b-select>
                    </b-field>
                     <b-field label="Publikasi">
                        <b-checkbox v-model="status_publish"
                            true-value="Yes"
                            false-value="No">
                            {{ status_publish }}
                        </b-checkbox>
                    </b-field>
                </section>
                <section>
                    <vue-editor 
                    id="editor" 
                    useCustomImageHandler 
                    @image-added="handleImageAdded"
                    v-model="content">
                    </vue-editor>
                    <div v-html="content" class="ql-editor"></div>
                </section>
                
                <section class="section">
                    <b-button size="is-medium" @click="simpan" >Simpan</b-button>
                </section>
            </div>
        </div>
      </div>

    
    <div class="card">
        <div class="card-content">
            <div class="content">
                <section class="section">
                    <h1 class="title">List Konten</h1>
                    <b-table 
                    :data="listing_konten"
                    paginated
                    per-page="5"
                    default-sort="draft_at"
                    aria-next-label="Next page"
                    aria-previous-label="Previous page"
                    aria-page-label="Page"
                    aria-current-label="Current page"
                    striped
                    bordered
                    >
                    <b-table-column field="id" label="ID" width="40" numeric v-slot="props" centered>
                        {{ props.row.id }}
                    </b-table-column>
                    <b-table-column field="nm" label="Judul" v-slot="props">
                        {{ props.row.nm }}
                    </b-table-column>
                    <b-table-column field="kategori" label="Kategori" v-slot="props">
                       {{ props.row.nm_kategori }}
                    </b-table-column>
                    <!-- <b-table-column field="konten" label="Konten" v-slot="props">
                      
                       <p v-html="props.row.konten.slice(0,30)"></p>
                
                    </b-table-column> -->
                    <b-table-column field="draft_at" label="Tgl Buat" v-slot="props">
                        {{ props.row.draft_at }}
                    </b-table-column>
                     <b-table-column field="publish" label="Publish" v-slot="props">
                        {{ props.row.publish===1 ? "Yes" : "No" }}
                    </b-table-column>
                    <b-table-column field="edit" label="Edit" centered v-slot="props">
                        <a class="button is-light"  v-on:click="edit_konten(props.row.id)">
                        Edit
                        </a>
                        &nbsp;
                        <a class="button is-danger" v-on:click="hapus_konten(props.row.id)">
                        Hapus
                        </a>
                    </b-table-column>
                    </b-table>
                </section>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      status_publish:"No",
      content:"",
      hasil:'',
      kategori:[],
      h_kategori:'',
      judul:'',
      listing_konten:[],
      status_simpan:"tambah",
      id_edit:'',
    }
  },
  mounted(){
    axios.get(process.env.VUE_APP_URL1+'/st/v2/list_post',{
        headers:{
                'Authorization':this.token
            }
    }).then(
        response => {
            this.listing_konten = response.data.details
            this.kategori=response.data.master.kategori
            }
    )            
  },
  methods:{
    simpan:function(){
        var formdata=new FormData();
        var status_publish= this.status_publish==="No" ? 0 : 1;
        formdata.append('status_simpan',this.status_simpan)
        if(this.status_simpan==="tambah"){
            formdata.append('judul',this.judul)
            formdata.append('kategori',this.h_kategori)
            formdata.append('status_publish',status_publish)
            formdata.append('konten',this.content)
        }else if(this.status_simpan==="edit"){
            formdata.append('id_konten',this.id_edit)
            formdata.append('judul',this.judul)
            formdata.append('kategori',this.h_kategori)
            formdata.append('status_publish',status_publish)
            formdata.append('konten',this.content)
        }

        axios.post(process.env.VUE_APP_URL1+'/st/v2/buat_post',formdata,{
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
                console.log(response.data)
            }
        )

      },
      handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
        console.log("handle image");
        var formData=new FormData();
        formData.append('file',file)
        formData.append('name',file["name"])
        console.log(file);
        axios.post(process.env.VUE_APP_URL1+'/st/v2/upload',formData,{
            headers:{
                'Content-type':'multipart/form-data',
                'Authorization':this.token
            }
        }).then(
            response=> {
              const urlx= response.data.url;
              Editor.insertEmbed(cursorLocation, "image", process.env.VUE_APP_URL1+"/st/v2/image/"+urlx)
              resetUploader();
            }
                
            
        )
    },
    edit_konten(event){
        var aa = this.listing_konten.filter(c => c.id==event)
        this.content=aa[0]['konten']
        this.judul=aa[0]['nm']
        this.h_kategori=aa[0]['kategori']
        this.status_simpan="edit"
        this.id_edit=aa[0]['id']
        this.status_publish= aa[0]['publish']===1 ? "Yes" : "No";
    },
    hapus_konten(event){
        console.log('hapus '+event)
    }
  },
  beforeDestroy() {
    //this.editor.destroy()
  },
  computed:{
      token: function () {
      return this.$store.state.src2.token
    }
  }
}
</script>
<style >
.editor-box> * {
    border-color: grey;
    border-style: solid;
    border-width: 1px;
}

.is-active{
    border-color: grey;
    border-style: solid;
    border-width: 1px;
}
</style>

 