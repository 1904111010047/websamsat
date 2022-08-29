<template>
    <body>
        <section class="section">
            <div class="container">
                <p class="title has-text-centered">
                Alur Pelayanan
                </p>
            </div>
            <div class="container">
            <div class="block">
                <p class="title has-text-left is-4">Alur Proses Pengesahan</p>
                <img src="@/assets/alur_layanan.jpg">

                <p class="title has-text-left is-4">Alur Proses Pembayaran atau Pergantian</p>
                <img src="@/assets/alur_pembayaran.jpg">

                <p class="title has-text-left is-4">Alur Proses Pengaduan Layanan Masyarakat</p>
                <img src="@/assets/Alur.png">
            </div>
        </div> 
        </section>
        <section class="section" v-for="(value) in alur_layanan" :key="value.id">
            <div class="card">
                <div class="card-content">
                    <p class="title is-4 has-text-centered is-space">
                        {{value.name}}
                    </p>
                    <p class="has-text-centered is-spaced">
                        <img v-bind:src="value.url_img" alt="">
                    </p>
                </div>
            </div>            
        </section>
    </body>
</template>
<script>
export default {
    data(){
        return {
         
        }
    },
    computed: {
        alur_layanan(){
            return this.$store.state.src1.alur_layanan
        }
    }
}
</script>
<div class="container">
            <div class="block">
                <p class="title has-text-centered is-4">Alur Proses Ganti STNK</p>
                <img src="@/assets/youtube.png"
            </div>
            