<template>
    <section>
        <div>
            <b-navbar :shadow=true :transparent=true :fixed-top=true :centered=true>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                 <span class="title is-5">
                     <img src="https://samsatbandaaceh.acehprov.go.id/fs/public/logo_esamsat_aceh/96-x-96.png" alt="">
                 </span>
            </b-navbar-item>
        </template>
        <template slot="start" v-if="loggedIn!=null">
            <b-navbar-item href="#">
                <router-link class="navbar-item" to="/admin">Home</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link class="navbar-item" to="/admin/profile">Profil</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link class="navbar-item" to="/admin/media">Media</router-link>
            </b-navbar-item>
             <b-navbar-item href="#">
                <router-link class="navbar-item" to="/admin/post">Post</router-link>
            </b-navbar-item>
        </template>

        <template slot="end" v-if="loggedIn!=null">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light" @click="LogOut">
                        Log Out
                    </a>
                </div>
            </b-navbar-item>
        </template>
        </b-navbar>
       </div>
    <div>
    <router-view></router-view>
    </div>
   </section>
</template>

<script>
export default {
  name: "AppLayout",
  methods:{
      LogOut(){
          this.$store.dispatch('src2/LogOut')
          return this.$router.push('/admin/login')
      }
  },
  computed: {
    loggedIn() {
        return this.$store.state.src2.username
    }
    },
};
</script>

<style>
.bghero{
    background: linear-gradient(90deg, rgba(1,114,120,1) 0%, rgba(13,159,185,1) 89%);
}
.navbar__logo{width:110px;height:110px;margin-left:-55px;top:25px;z-index:200;display:block;position:absolute;left:50%}
</style>