<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: "samsat"
  },
  data(){
    return {
      judul: "jjjaa"
    }
  },
  computed: {
    self(){
      return this.$store.state.src1.self_samsat
    }
  }
}
</script>