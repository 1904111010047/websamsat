<template>
  <vue-splash
    :show="true"
    :logo="logo"
    color="#00d4db"
    :size="300"
    :fixed="true"
  />
</template>
 
<script>

 
export default {
   data(){
    return {
    logo: "https://samsat.acehprov.go.id/fs/public/esamsataceh.svg"
    }
    }
}
</script>