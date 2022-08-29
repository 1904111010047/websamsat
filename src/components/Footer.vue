<template>
 <footer class="footer">
            <div class="container">
                <div class="columns">
                    <div class="column is-narrow">
                      <div class="container" style="width: 200px;">
                        <img src="https://samsatbandaaceh.acehprov.go.id/fs/public/logo_esamsat_aceh/144-x-144.png" alt="">
                      </div>
                  </div>
                  <div class="column is-offset-1">
                      <h2>Alamat : Jl. DR. Ir. Muhammad Hasan (Batoh), Banda Aceh, Aceh, Indonesia.</h2>
                      <h2>Telp   : {{self.hp}}</h2>
                      <h2>Email  : {{self.email}}</h2>
                  </div>
                    <div class="column is-2 is-offset-1">

                        <h2><strong>Media Sosial</strong></h2> 
                        <ul>
                            <li>
                                <!-- <a href="https://www.instagram.com/samsatbna/" class="button is-warning" target="_blank"></a>  -->
                                <img src="@/assets/instagram.png" width="16px" height="16px" alt="" ><a href="https://www.instagram.com/samsatbna/" target="_blank" >Instagram</a>
                            </li>
                            <li>
                                <!-- <a href="https://twitter.com/samsatbna" class="button is-warning" target="_blank"></a>         -->
                                <img src="@/assets/twitter.png" width="16px" height="16px" alt=""><a v-bind:href="self.url_twitter" target="_blank">Twitter</a>
                            </li>
                            <li>
                                <!-- <a href="https://www.facebook.com/kantor.aceh.3" class="button is-warning" target="_blank"></a>           -->
                                <img src="@/assets/facebook.png" width="16px" height="16px" alt=""><a v-bind:href="self.url_instagram" target="_blank">Facebook</a>
                            </li>
                            <li>
                                <!-- <a href="https://www.youtube.com/channel/UCCYtPps2DCgfAEKggSzeWrg/featured" class="button is-warning" target="_blank"></a>         -->
                                <img src="@/assets/youtube.png" width="16px" height="16px" alt=""><a v-bind:href="self.url_instagram" target="_blank">Youtube</a>
                            </li>
                           
                    
                    
                    
                    
                        </ul>
<!--                          
                        <ul>
                            
                            <li><a v-bind:href="self.url_instagram" target="_blank">Instagram</a></li>
                            <li><a v-bind:href="self.url_twitter" target="_blank">Twitter</a></li>
                            <li><a v-bind:href="self.url_facebook" target="_blank">Facebook</a></li>
                            <li><a v-bind:href="self.url_youtube" target="_blank">Youtube</a></li>
                            
                        </ul> -->
                       
                    </div>
                    <!-- <div class="column is-3">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            <li><a href="#">Labore et dolore magna aliqua</a></li>
                            <li><a href="#">Kanban airis sum eschelor</a></li>
                            <li><a href="#">Modular modern free</a></li>
                            <li><a href="#">The king of clubs</a></li>
                            <li><a href="#">The Discovery Dissipation</a></li>
                            <li><a href="#">Course Correction</a></li>
                            <li><a href="#">Better Angels</a></li>
                        </ul>
                    </div>
                    <div class="column is-4">
                        <h2><strong>Category</strong></h2>
                        <ul>
                            <li><a href="#">Objects in space</a></li>
                            <li><a href="#">Playing cards with coyote</a></li>
                            <li><a href="#">Goodbye Yellow Brick Road</a></li>
                            <li><a href="#">The Garden of Forking Paths</a></li>
                            <li><a href="#">Future Shock</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
            
        </footer>
</template>


<script>

export default {
    computed: {
        self(){
          return this.$store.state.src1.self_samsat
        }
    }
}
</script>