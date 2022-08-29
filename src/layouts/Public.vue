<template>
    <div>
    <Splash v-if="isLoading"/>
    <Header v-if="!isLoading"/>
    <router-view v-if="!isLoading"></router-view>
    <Footer v-if="!isLoading"/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Splash from '@/views/Splash.vue'

export default {
  name: "Public",
  data(){
    return {
      isLoading: true
    }
  },
  components: {
    Header,
    Footer,
    Splash
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
};
</script>