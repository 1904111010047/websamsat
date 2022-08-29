<template>
<div class="container is-max-desktop">
    <section>
    <h1>HOME</h1>    
  </section>
</div>
</template>

<script>
export default {
metaInfo:{
        titleTemplate: '%s - Home',
},
data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  }
};
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
