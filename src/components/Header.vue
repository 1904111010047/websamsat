<template>
  <section>
    <div>
      <b-navbar :shadow="true" :transparent="true" :fixed-top="true" :centered="true">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <span class="title is-5">
              <img src="https://samsatbandaaceh.acehprov.go.id/fs/public/logo_esamsat_aceh/96-x-96.png" alt="" />
            </span>
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/" v-scroll-to="'#top'">Beranda</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/profil">Profil</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/berita">Berita</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/agenda">Agenda</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/regulasi">Regulasi</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/laporan">Laporan</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/pengumuman">Pengumuman</router-link>
          </b-navbar-item>
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/info-publik">Info Publik</router-link>
          </b-navbar-item>
          <!-- <b-navbar-item href="#">
                <router-link class="navbar-item" to="/" v-scroll-to="'#layanan_samsat'">Layanan</router-link>
            </b-navbar-item> -->
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/info-pajak">Info Pajak</router-link>
          </b-navbar-item>
          <b-navbar-dropdown label="Layanan">
            <b-navbar-item href="#">
              <router-link to="/persyaratan">Persyaratan</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
              <router-link to="/alur">Alur Proses</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
              <router-link to="/" v-scroll-to="'#layanan_samsat'">Kanal Layanan</router-link>
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-item href="#">
            <router-link class="navbar-item" to="/faq">FAQs</router-link>
          </b-navbar-item>
        </template>

        <template slot="end">
          <!-- <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item> -->
        </template>
      </b-navbar>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    return this.$store.dispatch("src1/home");
  },
};
</script>
<style>
.bghero {
  background: linear-gradient(90deg, rgba(1, 114, 120, 1) 0%, rgba(13, 159, 185, 1) 89%);
}
.navbar__logo {
  width: 110px;
  height: 110px;
  margin-left: -55px;
  top: 25px;
  z-index: 200;
  display: block;
  position: absolute;
  left: 50%;
}
</style>
