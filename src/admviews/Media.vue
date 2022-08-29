<template>
<div class="container is-max-desktop">
    <div class="card">
        <div class="card-content">
            <div class="content">
                <section class="section">
                    <h1 class="title">Media</h1>
                    <b-table 
                    :data="data"
                    paginated
                    per-page="5"
                    default-sort="user.first_name"
                    aria-next-label="Next page"
                    aria-previous-label="Previous page"
                    aria-page-label="Page"
                    aria-current-label="Current page"
                    >
                    
                    <b-table-column field="id" label="ID" width="40" numeric v-slot="props" centered>
                        {{ props.row.id }}
                    </b-table-column>
                    <b-table-column field="nm" label="Nama" v-slot="props">
                        {{ props.row.nm }}
                    </b-table-column>
                    <b-table-column field="url" label="Preview" v-slot="props" width="30%" centered>
                        <b-image
                        :src="process.env.VUE_APP_URL1+'/st/v2/image/'+props.row.url"
                        webp-fallback=".jpg"
                        lazy
                    ></b-image>
                    </b-table-column>
                    <b-table-column field="tgl" label="Url" v-slot="props">
                        {{ props.row.url }}
                    </b-table-column>
                     <b-table-column field="tgl" label="Upload at" v-slot="props">
                        {{ props.row.tgl }}
                    </b-table-column>
                    <b-table-column field="HAPUS" label="Hapus" v-slot="props" centered>
                        {{ props.row.id }}
                        <a class="button is-light">
                        X
                    </a>
                    </b-table-column>
                    </b-table>
                </section>
                
            </div>
        </div>
    </div>


    <div class="card">
        <div class="card-content">
            <div class="content">
                <section class="section">
                    <h1 class="title">Upload</h1>
                    <div class="image-preview" v-if="imagepreview.length > 0">
                        <img class="preview is-centered" :src="imagepreview">
                    </div>
                    <div class="file has-name is-boxed is-centered">
                    <label class="file-label">
                        <input class="file-input" type="file"  name="resume" @change="previewImage" accept="image/*">
                        <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Pilih File..
                        </span>
                        </span>
                        <span class="file-name" v-if="imagepreview.length > 0">
                        {{imagepreview}}
                        </span>
                    </label>
                    </div>
                     <b-field label="Nama File" v-if="imagepreview.length > 0"><b-input v-model="nama_file"></b-input></b-field>
                     <b-button size="is-medium" @click="ev1" v-if="imagepreview.length > 0">Simpan</b-button>
                </section>
            </div>
        </div>
    </div>
</div>   
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                nama_file:"",
                data: [],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'nm',
                        label: 'Nama',
                    },
                    {
                        field: 'url',
                        label: 'Url',
                    },
                    {
                        field: 'tgl',
                        label: 'Date',
                        centered: true
                    }
                ],
                imagepreview:"",
                imagefilex:""
            }
        },
        mounted(){
            axios.get(process.env.VUE_APP_URL1+'/st/v2/files',
            {
            headers:{
                'Authorization':this.token
            }
            }
            ).then(
                response => (this.data = response.data.details)
            )            
        },
        methods: {
            previewImage: function(event){
                var input = event.target;
                
                if (input.files && input.files[0]) {
                    this.imagefilex=input.files;
                    
                    var reader = new FileReader();
                   
                    reader.onload = (e) => {
                        this.imagepreview = e.target.result;
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            },
            ev1: function(){
                console.log(this.nama_file);
                var formdata=new FormData();

                formdata.append('file',this.imagefilex[0])
                formdata.append('name',this.nama_file)

                axios.post(process.env.VUE_APP_URL1+'/st/v2/upload',formdata,{
                    headers:{
                        'Content-type':'multipart/form-data',
                         'Authorization':this.token
                    }
                }).then(
                    response=> {
                        console.log(response.data)
                        this.nama_file=""
                        this.imagepreview="",
                        this.imagefilex=""
                        this.glast(response.data.url)
                    }
                        
                    
                )
            },
            glast(event){
                console.log(event)
                axios.get(process.env.VUE_APP_URL1+'/st/v2/file?url='+event,
                {
            headers:{
                'Authorization':this.token
            }
            }
                ).then(
                response => (
                    this.data.push(response.data.details)
                    )
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
